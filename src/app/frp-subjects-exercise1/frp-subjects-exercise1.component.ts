import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector:    'frp-subjects-exercise1',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsExercise1Component implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();
  }

}