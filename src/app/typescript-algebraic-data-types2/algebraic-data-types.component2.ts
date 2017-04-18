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

    let p1 = {
      plug: function(){
        console.log("p1 plugged");
      },


      update: function(){

      }
    };

    let aa : UpdatablePlugin = p1;

    console.log(aa.plug());
  }
}

interface Plugable {
  plug: () => void;
}

interface Updatable {
  update: () => void;
}

type UpdatablePlugin = Plugable & Updatable;

