import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'type-guards',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class TypeGuardsComponent implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();
  }

}