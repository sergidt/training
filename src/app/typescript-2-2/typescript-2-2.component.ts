import { Component, OnInit } from '@angular/core';
import { Customer } from '../data/typescript-data';

@Component({
  selector:    'ts2-2',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class TS2_2Component implements OnInit {

  htmlContent = `<pre><code>
//Mix-in classes
class Person {
    constructor(public name: string) {}
}

type Constructor<T> = new(...args: any[]) => T;

function Tagged<T extends Constructor<{}>>(Base: T) {
    return class extends Base {
        _tag: string;
        constructor(...args: any[]) {
            super(...args);
            this._tag = "";
        }
    }
}

let customer = new Customer("Joe");
customer._tag = "test";
customer.accountBalance = 100;
console.log(customer._tag);
console.log(customer.accountBalance);
</code>
</pre>`;


  ngOnInit() {
    console.clear();

    let customer = new Customer("Joe");
    customer._tag = "test";
    customer.accountBalance = 100;
    console.log(customer._tag);
    console.log(customer.accountBalance);

  }

}