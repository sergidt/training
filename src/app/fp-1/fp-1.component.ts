import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-1',
  template: `<h2 class="subtitle">Pure functions and Currying</h2>
  <div [innerHtml]="htmlContent"></div>`
})
export class Fp1Component implements OnInit {

  htmlContent = `<pre><code>
//Pure Functions
const multiply = (x: number, y: number) => x * y;

//Currying and Partial Function Application

//Generic curried function

</code>
</pre>`;

  ngOnInit() {
    console.clear();

    let p = { name: 'sergi', age: 37 };
    console.log(updateName(p, 'sergi dote'));

    let a = [1,2,3,4];
    const [e1, e2, e3, ...tail] = a;
    console.log(e2);


    const double = multiply(2);

    const triple = multiply(3);

    console.log(triple(14));






  }
}




const multiply = (x: number) => (y: number) => x * y;























interface Person {
  name: string,
  age: number
}

function updateName(p: Person, name: string) : Person {
  let newPerson: Person = {...p, name};
  return newPerson;
}

const addItem = (array: any[], newItem: any) => [...array, newItem];
