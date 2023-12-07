import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidden:boolean=true
  loginForms: FormGroup =new  FormGroup({
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });
  constructor(
    private spinner :NgxSpinnerService,
    private dialog:MatDialog,
    private authservice:AuthService,
    private router :Router,
    private  altercontroller:AlertController
  ){}
  ngOnInit(){}
  onsubmit(){
    this.spinner.show()
    setTimeout(()=>{
      this.spinner.hide()
    },5000)

    this.authservice.login(this.loginForms.value).then((data)=>{
      console.log(data)
      this.router.navigateByUrl('home',{replaceUrl:true})
    }) .catch(e=>{
         this.spinner.hide()
          let msg='could not SignUp try again';
          if (e.code=='auth/user-not-found') {
            msg='Email could not be founnd'
            console.log(e)
            
            
          } else if(e.code=='auth/wrong-password'){
            msg='Wrong Password'
          }
          this.showAlert(msg)
          
    })
   
  }
  openMat(){
    this.dialog.open(DialogComponent,{
      width:'350px',

    })
  }
  async showAlert(message:any){
    const alert= await this.altercontroller.create({
      header:'Authentication failed',
      message,
      buttons:['Ok']
    })
    await alert.present();
 

}
}