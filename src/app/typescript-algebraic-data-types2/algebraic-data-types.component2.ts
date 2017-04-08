import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'algebraic-data-types2',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class AlgebraicDataTypesComponent2 implements OnInit {

  htmlContent = `<pre><code>
  // Intersection Types
</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }
}