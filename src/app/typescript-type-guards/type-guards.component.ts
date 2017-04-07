import { Component, OnInit } from '@angular/core';
import { MyPlugin, PluginManager, isPlugable } from '../data/typescript-data';

@Component({
  selector:    'type-guards',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class TypeGuardsComponent implements OnInit {

  htmlContent = `<pre><code>
  function isPlugable(item: (Plugable | Updatable)) : item is Plugable {
   return (<Plugable>item).plug !== undefined;
  }
  
  function isUpdatable(item: (Plugable | Updatable)) : item is Updatable {
   return (<Updatable>item).update !== undefined;
  }
  
  const myPlugin: MyPlugin = new MyPlugin("Custom plugin");
  const manager: PluginManager = new PluginManager();
  manager.installPlugin(myPlugin);  
  manager.updatePlugin(myPlugin);

  console.log(isPlugable(myPlugin));
</code>
</pre>`;


  ngOnInit() {
    console.clear();
    const myPlugin: MyPlugin = new MyPlugin("Custom plugin");
    const manager: PluginManager = new PluginManager();
    manager.installPlugin(myPlugin);
    manager.updatePlugin(myPlugin);

    console.log(isPlugable(myPlugin));
  }

}