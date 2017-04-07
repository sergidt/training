import { Component, OnInit } from '@angular/core';
import { add, compose, divide, fork, sum, count, repeat } from 'app/data/fp-data';

@Component({
  selector: 'fp-2',
  template: `<h2 class="subtitle">Function Composition and High Order Functions</h2>
             <div [innerHtml]="htmlContent"></div>`
})
export class Fp2Component implements OnInit {

  htmlContent = `<pre><code>
//Compose function

function compose(args, funct) {
 return args.reduce((a,b) => funct(a)(b));
}
//add function
const add = (a) => (b) => a + b;

//we can execute that:
console.log(compose([1, 2, 3], add));  
console.log(compose(['a', 'b', 'c'], add)); 

//Another example:
export const fork = (join, func1, func2) => (val) => join(func1(val), func2(val));

export const divide = (a, b) => a / b;

export const sum = (args) => compose(args, add);

export const count = (items) => items.length;

const mean = fork(divide, sum, count);
console.log(mean([10, 20, 30]));


//High Order Functions
//  examples: map, fiter, ...

//  custom Repeat function: 
 
const repeat = (times, funct, initial) => times > 0 ? repeat(times - 1, funct, funct(initial)) : initial;

console.log(repeat(5, (_) => _ + '*', 'rating: '));

</code>
</pre>`;

  ngOnInit() {
    console.clear();
    console.log(compose([1, 2, 3], add));
    console.log(compose(['a', 'b', 'c'], add));

    const mean = fork(divide, sum, count);
    console.log(mean([10, 20, 30]));

    console.log('High Order Function');
    console.log(repeat(5, (_) => _ + '*', 'rating: '));
  }

}
