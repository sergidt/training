import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-exercise-2',
  template: `<h2 class="subtitle">FP - Exercise 2</h2>
             <div [innerHtml]="htmlContent"></div>`
})
export class FpExercise2Component implements OnInit {

  htmlContent = `<pre><code>
//////////////////////////////////////////////////////////////////////////////////
// CHALLENGE: Create a function named totalMovableCameras,                      //
//            that counts the movable cameras from our device list              //
//////////////////////////////////////////////////////////////////////////////////
</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }

}
