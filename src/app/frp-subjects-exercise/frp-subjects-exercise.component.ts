import { Component, OnInit } from '@angular/core';
import { MyPlugin, PluginManager, isPlugable } from '../data/typescript-data';

@Component({
  selector:    'frp-subjects-exercise',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsExerciseComponent implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();
  }

}