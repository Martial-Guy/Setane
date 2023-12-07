import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss']
})
export class EmptyScreenComponent {
  @Input()  model: any ;

}
