import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector:    'frp-observables',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPObservablesComponent implements OnInit {

  htmlContent = `<pre><code>
//Cold observables start pushing only when we subscribe. They start over if we subscribe again.
let interval$ = Observable.interval(1000);

    interval$
      .subscribe(x => console.log('consumer 1:' + x));

    setTimeout(() => {
      interval$
        .subscribe(x => console.log('consumer 2:' + x));
    }, 3000);
    
//Hot observables are pushing even when we are not subscribed to them (e.g., UI events).
let interval$ = Observable.interval(1000)
        .share();

    interval$
      .subscribe(x => console.log('consumer 1:' + x));

    setTimeout(() => {
      interval$
        .subscribe(x => console.log('consumer 2:' + x));
    }, 3000);
</code>
</pre>`;


  ngOnInit() {
    console.clear();

    /* let interval$ = Observable.interval(1000).share();

     interval$
     .subscribe(x => console.log(`consumer 1: ${x}`));


     setTimeout(() => {
     interval$
     .subscribe(x => console.log(`consumer 2: ${x}`));
     }, 4000);
     */

    const mouseDown$ = Observable.fromEvent(document, 'mousedown');
    const mouseUp$ = Observable.fromEvent(document, 'mouseup');
    const mouseMove$ = Observable.fromEvent(document, 'mousemove');


    const drag$ = mouseDown$
                      .switchMap(_ => mouseMove$
                                        .takeUntil(mouseUp$));

   // drag$.subscribe(printMousePosition);
  }

}

function printMousePosition(event: MouseEvent) {
  console.log(`Mouse postion: [${event.x}, ${event.y}]`);
}