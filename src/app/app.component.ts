import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTab = 0;

  tabs =  ['TS: Algebraic data types 1', 'TS: Algebraic data types 2', 'TS: type guards', 'TS: Generics', 'Typescript 2.2.2', 'FP - 1',
    'FP - 2', 'FP - Exercise', 'FRP: Observables', 'FRP: Observables Exercise', 'FRP: Subjects', 'FRP: Subjects Exercise'];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
