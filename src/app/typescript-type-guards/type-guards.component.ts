import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'type-guards',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class TypeGuardsComponent implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();



    let r1 : Viewport = {
      id: 1,
      grow: 0.5,
      tabs: []
    };

    let r2 : Box = {
      id: 1,
      grow: 0.5,
      items: []
    };

    checkItem(r2);

  }

}

function checkItem(item: Viewport | Box ){
  if (isViewport(item)){
    console.log("is Viewport");
  }else {
    console.log("is Box");
  }
}


interface IResizable {
  id: number,
  grow: number
}

interface Viewport extends IResizable {
  tabs: Array<any>
}

interface Box extends IResizable {
  items: Array<IResizable>
}

//guards
function isViewport(item: IResizable): item is Viewport {
  return (<Viewport>item).tabs !== undefined;
}

function isBox(item: IResizable): item is Box {
  return (<Box>item).items !== undefined;
}