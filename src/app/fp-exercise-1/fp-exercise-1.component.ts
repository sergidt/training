import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-exercise-1',
  template: `<h2 class="subtitle">FP - Exercise 1</h2>
             <div [innerHtml]="htmlContent"></div>`
})
export class FpExercise1Component implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }

}
