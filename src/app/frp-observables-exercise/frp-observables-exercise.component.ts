import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector:    'frp-observables-exercise',
  template: `<div>
    We want to simulate a request from a input text value:
    <br>
    every time that we write some text, a request must to be triggered, and the response must be shown into the results
    div.
    <br>
    <br>
    <hr>
    Extra points: 
    We can improve this code: 
    <br>
    - Insert a threshold time because we don't want do the request every char you type.
    <br>
    - We only wnat to do the request if the input text is not empty.
    <br>
  </div>
  <br>
  <hr>
  <input #input type="text"/>
  <br>
  Results:
  <div #results></div>`,
  styles: [`
    input {
    margin-bottom: 30px;
  }
  
     
  `]
})
export class FRPObservablesExerciseComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef;
  @ViewChild('results') results: ElementRef;

  ngAfterViewInit() {
    console.clear();
  }

  simulatedRequest = (term: string) => Observable.timer(2000).map(_ => `Search result from -> ${term} request`);
}