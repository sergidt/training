import { Component, OnInit } from '@angular/core';
import { print, Leaf, Tree, Node } from '../data/typescript-data';

@Component({
  selector:    'algebraic-data-types1',
  template: `<div [innerHtml]="htmlContent"></div>`

})
export class AlgebraicDataTypesComponent1 implements OnInit {

  htmlContent = `<pre><code>

//Union Types 

  export type Alphanumeric = string | number;

  export function print(value: Alphanumeric) {
    console.log(value);
  }

  export type Empty = void;

  export type Tree = Node | Leaf;

  export class Leaf {
    constructor(public value: Alphanumeric | Empty){}

    toString(): string {
      return 'Leaf: ' + this.value;
    }
  }

  export class Node {
    constructor(public leftChild: Tree, public rightChild: Tree){}

    toString(): string{
      return 'Node';
    }
  }
  
  print('kapsch');
  print(123);

  const leaf: Leaf = new Leaf("I'm a leaf");
  const tree: Tree =  new Node(leaf, leaf);
  console.log(tree.rightChild.toString());
</code>
</pre>`;

  ngOnInit() {
    console.clear();

    print('kapsch');
    print(123);


    const leaf: Leaf = new Leaf("I'm a leaf");
    const tree: Tree =  new Node(leaf, leaf);
    console.log(tree.rightChild.toString());
  }

}