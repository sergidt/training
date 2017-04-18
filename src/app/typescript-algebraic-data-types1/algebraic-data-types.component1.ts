import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'algebraic-data-types1',
  template: `<div [innerHtml]="htmlContent"></div>`

})
export class AlgebraicDataTypesComponent1 implements OnInit {

  htmlContent = `<pre><code>

//Union Types 
</code>
</pre>`;

  ngOnInit() {
    console.clear();

    let l1 : Leaf = new Leaf("leaf1");
    let l2 : Leaf = new Leaf("leaf2");
    let l3 : Leaf = new Leaf("leaf3");

    let n1 : Node = new Node(l1, l2);

    let tree: Tree = new Node(n1, l3);

    console.log(tree.toString());
    console.log(n1.left.toString());
  }

}





class Leaf {
  constructor(public value: string) {}

  toString(): string {
    return `Leaf: ${this.value}`;
  }
}

class Node {
  constructor(public left: Tree, public right: Tree) {}

    toString(): string {
      return `Node`;
    }
}

type Tree = Node | Leaf;