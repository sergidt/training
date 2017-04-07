import { Component, OnInit } from '@angular/core';
import { Customer, Employee, updateProperties, Department } from '../data/typescript-data';

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


//keyof and Lookup Types
interface Employee {
    name: string,
    age: number,
    department: Department
}

type K1 = keyof Employee; // "name" | "age" | "department"

enum Department {
    I_D, SALES
}

let john: Employee = {
    name: 'John Doe',
    age: 37,
    department: Department.ADMINISTRATION
};

function updateProperties<T, K extends keyof T>(value: T, props: Array<[K, any]>) {
    let copy: T = Object.assign({}, value);
     props.forEach(([k, v]: [K, any]) => copy[k] = v);
     return copy;
}

console.log(john);

console.log(updateProperties(john, [['age', 41], ['department', Department.SALES]]));

//Object Spread and Rest

const array = [1,2,3,4];

const newArray = [0, ...array];

//the same for objects 
let obj = { x: 1, y: "string" };
var newObj = {...obj, z: 3, y: 4};

</code>
</pre>`;


  ngOnInit() {
    console.clear();

    let customer = new Customer("Joe");
    customer._tag = "test";
    customer.accountBalance = 100;
    console.log(customer._tag);
    console.log(customer.accountBalance);

    let john: Employee = {
      name: 'John Doe',
      age: 37,
      department: Department.ADMINISTRATION
    };

    console.log(john);
    console.log(updateProperties(john, [['age', 41], ['department', Department.SALES]]));
  }

}