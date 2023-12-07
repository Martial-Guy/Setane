import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.scss']
})
export class RestaurentComponent {
  @Input() restaurent: any;
  getCuisines(data:any){
   return data.join(', ')
  }

}
