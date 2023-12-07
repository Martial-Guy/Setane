import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { IonicModule } from '@ionic/angular';

export const component=[
  RestaurentComponent
]

@NgModule({
  declarations: [
    RestaurentComponent,
    ...component
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[...component]
})
export class ComponentsModule { }
