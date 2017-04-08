import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'generics',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class GenericsComponent implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }
}