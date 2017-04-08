import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-exercise',
  template: `<h2 class="subtitle">FP - Exercise</h2>
             <div [innerHtml]="htmlContent"></div>`
})
export class FpExerciseComponent implements OnInit {

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
