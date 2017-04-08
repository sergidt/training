import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-2',
  template: `<h2 class="subtitle">Function Composition and High Order Functions</h2>
             <div [innerHtml]="htmlContent"></div>`
})
export class Fp2Component implements OnInit {

  htmlContent = `<pre><code>
//Compose function

//High Order Functions
</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }

}
