import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  constructor(public popOverController:PopoverController){

  }
OnInit(){
  setTimeout(()=>{
    this.popOverController.dismiss
  },8000)
}
}
