import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector:    'frp-subjects',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsComponent implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();

    const interval$ = Observable.interval(1500);

    const subject$ : Subject<any> = new Subject<any>();

    const click$ = Observable.fromEvent(document, 'click')
                             .subscribe(subject$);

    subject$
    .subscribe(console.log);

    interval$
    .subscribe(subject$);
  }

}