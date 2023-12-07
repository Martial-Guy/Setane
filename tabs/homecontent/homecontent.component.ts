import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/pages/popover/popover.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.scss'],
 
})
export class HomecontentComponent {
  constructor(
    public popoverController: PopoverController,
    private httpservie:HttpClient,
    private authservie:AuthService,
    private api:ApiService
    ) {}
  banners:any=[];
  categories:any=[];
  favorites:any=[];
  offers:any=[];
  nearby:any=[]
 loc :any='Loading'
  ngOnInit(){
    this.authservie.getlocation().subscribe((res)=>{
      console.log(res)
      this.loc=res
    })
    this.getCurrentLosition();
    this.categories = this.api.categories
   this.banners=[
       {banner:'assets/dishes/TARO.jpg'},
       {banner:'assets/dishes/ramen.jpg'},
       {banner:'assets/dishes/tempoura.jpg'},
       {banner:'assets/dishes/pasta2.jpg'}
    ];
     this.favorites=this.api.allRestaurants
 const offers = [...this.api.allRestaurants]
this.nearby = this.api.allRestaurants
this.offers=this.offers.sort((a: any,b:any)=> parseInt(b.id) - parseInt(b.id))

  }
async getCurrentLosition(){
  try {
  
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
   
  } catch (e) {
    console.log(e)
    this.OpenPopOver()
  }
}
OpenPopOver(){
  const  ev ={
   target:{
     getBoundingClientRect:()=>{
       return{
         left:5,
     }
   }
  }
}
this.presentPopover(ev);
}
 async presentPopover(event:any){
 const popover = await this.popoverController.create({
   component: PopoverComponent,
   event: event,
   cssClass:'custome Popover',
   translucent:true,
 });

 await popover.present();
 const  {data}  = await popover.onDidDismiss();
 console.log(`Popover dismissed with role: ${data}`);
 if(data) {
  this.requestGeolocationPermission();

} else {
  this.loc = 'Yaounde'
}
}
async requestGeolocationPermission(){
     this.httpservie.get('https://ipapi.co/json/')
          try {
           const  status=  await Geolocation.requestPermissions();
           if (status?.location=='granted')  this.getCurrentLosition;
           else  this.loc = 'please enable location';
          
           console.log(status)
          } catch (error) {
            console.log(error)
          }
}

}
