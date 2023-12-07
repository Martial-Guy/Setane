import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AddCartService } from 'src/app/serivces/add-cart.service';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  id:any
  restaurent:any
  categories:any[]=[]
  items:any[]=[]
  constructor(
    private rout:ActivatedRoute,
    private nCtrl:NavController,
    private apikey :ApiService,
    private addcart:AddCartService,
  ){
         
  }
   ngOnInit(){
  this.getData()
  this.getId()

   }
   getId(){
    const id= this.rout.snapshot.paramMap.get('id')
    console.log(id)
  
    if(!id){
     this.nCtrl.back();
     return;
    }
    this.id=id;
    this.restaurent=this.apikey.allRestaurants.find(x=>x.id==this.id) 
    this.categories=[...this.apikey.categories],
    this.items=[...this.apikey.allItems].filter(x=>x.uid==this.id)
    console.log('itens',this.items)
  
   }
   getData(){
    
   }
   getCuisines(data:any){
    return data.join(', ')
   }
   addToCart(item: any) {
    this.addcart.addItem(item);
  }
  
}
