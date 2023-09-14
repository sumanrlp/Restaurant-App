import { Component } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private data:PopUpComponent){}

  title = 'rishi_exercise_1';

}
