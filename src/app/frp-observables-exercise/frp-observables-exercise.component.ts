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
    - We only want to do the request if the input text is not empty.
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

    let mouseclick$ = Observable.fromEvent(document, 'keyup');

    let mousemove$ = Observable.fromEvent(document, 'mousemove')
                               .takeUntil(mouseclick$)
        .subscribe(console.log);

    /*

    Observable.fromEvent(this.input.nativeElement, 'keyup')
              .debounceTime(300)
              .map((e: KeyboardEvent) => e.target['value']) // text casella
              .distinctUntilChanged()
              .filter(text => text.length > 3)
              .switchMap((text: string) => this.simulatedRequest(text))
              .subscribe(_ => this.results.nativeElement.innerText = _);*/
  }

  simulatedRequest = (term: string) => Observable.timer(1).map(_ => `Search result from -> ${term} request`);
}