import { Component, OnInit } from '@angular/core';
import { getString, Leaf, Node, MySingleton } from '../data/typescript-data';

@Component({
  selector:    'generics',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class GenericsComponent implements OnInit {

  htmlContent = `<pre><code>
  function getString<T>(input : T) : string {
   return JSON.stringify(input);
  }

//we can return a generic type as well
  function getFirst<T>(items: T[]) : T {
   return items[0];
  }

//Generic interfaces
  interface Cache {
   registerItem<E>(items : E[]) : void;
  }
  
//or:
  interface Cache<E> {
   registerItem(items : E[]) : void;
  }

  class MySingleton<T> {
   constructor(private _instance: T) {}
  
   get instance() : T {
   return this._instance;
   }
  }
  
  
  const leaf: Leaf = new Leaf("I'm a leaf");
  const node: Node =  new Node(leaf, leaf);
  console.log(getString(node));

  const instance: Date = new Date();
  const singleton: MySingleton<Date> = new MySingleton(instance);
  console.log(singleton.instance);
</code>
</pre>`;

  ngOnInit() {
    console.clear();
    const leaf: Leaf = new Leaf("I'm a leaf");
    const node: Node =  new Node(leaf, leaf);
    console.log(getString(node));


    const instance: Date = new Date();
    const singleton: MySingleton<Date> = new MySingleton(instance);
    console.log(singleton.instance);

  }

}