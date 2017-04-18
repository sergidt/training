import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'ts2-2',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class TS2_2Component implements OnInit {

  htmlContent = `<pre><code>
//Spread operator, deconstructing
...array
</code>
</pre>`;


  ngOnInit() {
    console.clear();

    let sergi: Person = {
      name: 'sergi',
      age: 37};

  type keys = keyof Person; //name | age
  console.log(updateProperties(sergi, [['name', 'sergi dote'], ['age', 38]]));
  }
}

interface Person {
  name: string;
  age: number;
}

function updateProperties<T, K extends keyof T>(value: T, props: Array<[K, any]>) {
  let newObject: T = Object.assign({}, value);
  props.forEach(([k, v]: [K, any]) => newObject[k] = v);
  return newObject;
}

