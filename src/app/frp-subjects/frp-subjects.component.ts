import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector:    'frp-subjects',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsComponent implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();
  }

}