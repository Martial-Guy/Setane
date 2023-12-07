import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    private authservices:AuthService,
    private router :Router,
    private spinner :NgxSpinnerService,
    private altercontroller:AlertController
  ){

  };
  reset: FormGroup =new  FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    
});
resets(){
  return this.authservices.reset(this.reset.value).then(()=>{
    window.alert('A link has been send to your Mail')
}) .catch(e=>{

  this.spinner.hide()
  let msg='could not SignUp try again';
  if(e.code=='auth/user-not-found'){
    msg='Email do not exist'
   
  }
 
  this.showAlert(msg)
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
