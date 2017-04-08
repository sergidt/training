import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'algebraic-data-types1',
  template: `<div [innerHtml]="htmlContent"></div>`

})
export class AlgebraicDataTypesComponent1 implements OnInit {

  htmlContent = `<pre><code>

//Union Types 
</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }

}