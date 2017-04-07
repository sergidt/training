import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector:    'frp-subjects',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsComponent implements OnInit {

  htmlContent = `<pre><code>
    const interval$ = Observable.interval(1000);

    const subject$ = new Subject<any>();

    //We are passing subject as an observer
    interval$.subscribe(subject$);

    subject$.subscribe(console.log);

    setInterval(() => {
      subject$.next("interval tick");
    }, 5000);
    
    
    //Able to stop receiving values
     setTimeout(() => {
      console.log("complete");
      subject$.complete();
    }, 10000); 
</code>
</pre>`;


  ngOnInit() {
    console.clear();

    const interval$ = Observable.interval(1000);

    const subject$ = new Subject<any>();

    interval$.subscribe(subject$);

    subject$.subscribe(console.log);

    setInterval(() => {
      subject$.next("interval tick");
    }, 5000);

    setTimeout(() => {
      console.log("complete");
      subject$.complete();
    }, 10000);
  }

}