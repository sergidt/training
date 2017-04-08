import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'frp-subjects-exercise2',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsExercise2Component implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();
  }

}