import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('tabs', {static: false}) tabs!: IonTabs ;

  screenWidth=0;
collapsed=false;
  selectedTab: string | undefined;

closeNav(){

  this.collapsed=false

}
toggleCollaps(){
  this.collapsed=!this.collapsed
 
}
setCurrentTab() {
  
  this.selectedTab = this.tabs.getSelected() || 'homecontent';
  console.log(this.selectedTab);
}
}
