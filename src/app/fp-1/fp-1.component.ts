import { Component, OnInit } from '@angular/core';
import { multiply, curriedMultiply, double, updateStateAndVisibility } from '../data/fp-data';

@Component({
  selector: 'fp-1',
  template: `<h2 class="subtitle">Pure functions and Currying</h2>
              <div [innerHtml]="htmlContent"></div>`
})
export class Fp1Component implements OnInit {

  htmlContent = `<pre><code>
//Pure Functions
const multiply = (a,b) => a * b;

//as a normal function 
function multiply(a,b) {
 return a * b;
}

console.log("pure function multiply");
console.log(multiply(10, 20));

//Currying and Partial Function Application
const curriedMultiply = (x: number) => (y: number) => x * y;

console.log("curried function curriedMultiply");
console.log(curriedMultiply(100)(20));

//Generic curried function
function add<T>(x: T) {
 return (y: T) => x + y;
}

console.log(add(123)(123)); //-> output: 246
console.log(add("123")(123)); //-> output: "123123"

const updateStateAndVisibility = obj =>
   state =>
     visibility => Object.assign({}, obj, state, visibility);

const value = updateStateAndVisibility({type: 'camera'})({state:'online'})({visible: true});
console.log(value);

</code>
</pre>`;

  ngOnInit() {
    console.clear();
    console.log("pure function multiply");
    console.log(multiply(10, 20));

    console.log("curried function curriedMultiply");
    console.log(curriedMultiply(100)(20));

    console.log(double(5));

    console.log(updateStateAndVisibility({type: 'camera'})({state: 'online'})({visible: true}));
  }

}
