import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hidden:boolean=true;
  hide:boolean=true
  registrationForms: FormGroup =new  FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(5)]),
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
        Confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),this.matchValidator('password')])
  });
  matchValidator(
    matchTo: string, 
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl): 
    ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] 
           AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === 
        (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }
 constructor(
   private router:Router,
   private authservice:AuthService,
   private spinner :NgxSpinnerService,
   private altercontroller:AlertController
   ){}
   registerWithEmailAndPassword(){
    this.spinner.show()
    this.authservice.register(this.registrationForms.value).then((data)=>{
      console.log(data)
        this.router.navigateByUrl('home',{replaceUrl:true})
        setTimeout(()=>{
          this.spinner.hide()
        },5000)
    }) .catch(e=>{
         this.spinner.hide()
          let msg='could not SignUp try again';
          if (e.code=='auth/email-already-in-use') {
            msg='Email is already in uses'
            console.log(e)
            
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
