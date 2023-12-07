import { Injectable } from '@angular/core';
import { Firestore, doc, docData, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Photo } from "@capacitor/camera";
import { Storage, getDownloadURL, ref, uploadBytesResumable, uploadString } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

export const userkey='camille_user_id' 
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  datainfo!:any

  constructor(
    private fireauth: AngularFireAuth
    , private router: Router,
    private auth: Auth,
    private _firestore: Firestore,
    private _storage: StorageService,
    private Storages:Storage,
    private  httpservie:HttpClient,
    private afAuth: AngularFireAuth, 
  
  ) {
    
  }
  ;
  google() {
    const _date = new Date();
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigateByUrl('home')
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
       this._storage.setStorage('camille_user_id', res.user?.uid)
      const datafer = doc(this._firestore, `Users/${res.user?.uid}`)
      const data = {
        email: res.user?.email,
        name: '',
       dates:  _date
 
       };
      setDoc(datafer,data,{ merge: true })
    }, err => {
      alert(err.message);
    })
  }
 async signout() {
    return this.fireauth.signOut().then(async () => {
      this.router.navigateByUrl('home')
      await this._storage.removestorage(userkey)
    }) 
    
  }
  reset(formValue:any) {
    return this.fireauth.sendPasswordResetEmail(formValue.email)
  }
  async register(formValue: any) {
    try {
      const registerUser = await createUserWithEmailAndPassword(getAuth(), formValue.email, formValue.password)
      const uid = registerUser.user.uid
      const datafer = doc(this._firestore, `Users/${uid}`)
      const _date = new Date();
      const data = {
       email: formValue.email,
       name: formValue.name,
      dates:  _date

      };

      await this._storage.setStorage('camille_user_id', uid)

      setDoc(datafer,data)

    } catch (error) {
      throw (error)
      console.log(error)
    }

  }
  async login(formValue: any) {
    try {
      const response = await this.fireauth.signInWithEmailAndPassword(formValue.email,formValue.password)
      console.log(response)
      if (response?.user) {
        const uid = response.user.uid
        await this._storage.setStorage('camille_user_id', uid)
      }

    } catch (error) {
      throw (error)
      console.log(error)
    }
  }
  getUserprofile(){
    const user= this.auth.currentUser
    const userDocRef=doc(this._firestore ,`Users/${user?.uid}`)
    return docData(userDocRef)
  }
  async upLoadImage(camerafile:Photo){
    const user=this.auth.currentUser;
    const path=`usersProfiles/${user?.uid}/profile.png`;
    const storageRef=ref(this.Storages,path)
    try {
      if (camerafile.base64String) {
        await uploadString(storageRef, camerafile.base64String, 'base64');
        const imageUrl= await getDownloadURL(storageRef)
      const userDocRef=doc(this._firestore ,`Users/${user?.uid}`)
      const userDocSnap = await getDoc(userDocRef);
        const existingData = userDocSnap.data();
        const updatedData = { ...existingData, imageUrl }; 
        await updateDoc(userDocRef,{imageUrl})
      }
      return true 
    } catch (error) {
      return false
    }

  }
  getlocation(){
    return this.httpservie.get('https://ipapi.co/json/')
        
  }
  
}
