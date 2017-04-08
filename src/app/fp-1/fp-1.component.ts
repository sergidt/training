import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-1',
  template: `<h2 class="subtitle">Pure functions and Currying</h2>
              <div [innerHtml]="htmlContent"></div>`
})
export class Fp1Component implements OnInit {

  htmlContent = `<pre><code>
//Pure Functions

//Currying and Partial Function Application

//Generic curried function

</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }

}
