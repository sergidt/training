import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTab = 0;

  tabs =  ['TS: Basics', 'TS: Algebraic data types 1', 'TS: Algebraic data types 2', 'TS: type guards', 'TS: Generics', 'Typescript 2.2.2', 'FP - 1',
    'FP - 2', 'FP - Exercise 1', 'FP - Exercise 2', 'FRP: Observables', 'FRP: Observables Exercise', 'FRP: Subjects', 'FRP: Subjects Exercise 1', 'FRP: Subjects Exercise 2'];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
