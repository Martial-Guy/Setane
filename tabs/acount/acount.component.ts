import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';


@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent {
  profile:any
   userinofos:any
   datainfo:any
 
  constructor(
     private authService:AuthService,
     private router:Router,
    private auth:Auth,
    private _firestore: Firestore,
    private localstorage:StorageService,
    

  ){
    this.authService.getUserprofile().subscribe((data)=>{
      this.profile=data
     }),
     this.getUserinfo()
  }
   
  logout(){
       try {
        this.authService.signout().then(e=>{
          this.router.navigateByUrl('login',{replaceUrl:true})
        })
        console.log('logout successful')
       } catch (error) {
        
       }
  }
  async changeProfile(){
          const image= await  Camera.getPhoto({
            quality:50,
            allowEditing:true,
            resultType:CameraResultType.Base64,
            source:CameraSource.Photos
          })
          console.log(image)
          this.authService.upLoadImage(image)
         const exo=this.auth.currentUser
  }
  async getUserinfo(){
    const uid=this.localstorage.getStorage('camille_user_id')
    const userDocRef=doc(this._firestore ,`Users/${uid}`)
    const userDocSnap = await getDoc(userDocRef);
  
   }
}
