import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'ts2-2',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class TS2_2Component implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();
  }

}