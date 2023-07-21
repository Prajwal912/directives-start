import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numOdd = [1,3,5,9];
  numEven = [2,4,6,8];
  onlyOdd = false;
}
