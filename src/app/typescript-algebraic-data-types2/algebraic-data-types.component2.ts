import { Component, OnInit } from '@angular/core';
import { MyPlugin, PluginManager } from '../data/typescript-data';

@Component({
  selector:    'algebraic-data-types2',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class AlgebraicDataTypesComponent2 implements OnInit {

  htmlContent = `<pre><code>
  // Intersection Types
  interface Plugable {
    plug : () => void;
  }
  
  interface Updatable {
    update : () => void;
  }
  
  type UpdatablePlugin = Plugable & Updatable;
  
  class PluginManager {
    installPlugin(plugin: UpdatablePlugin){
      plugin.plug();
    }
    
    updatePlugin(plugin: UpdatablePlugin){
      plugin.update();
    }
  }
  
  class MyPlugin implements Plugable, Updatable {
     constructor(public name: string){}
  
     plug() {
      console.log("Installing plugin:" + this.name);
     }
  
     update() {
      console.log("Updating plugin:" + this.name);
     }
  }
  
  const myPlugin: MyPlugin = new MyPlugin("Custom plugin");
  const manager: PluginManager = new PluginManager();
  manager.installPlugin(myPlugin);
  manager.updatePlugin(myPlugin);
</code>
</pre>`;

  ngOnInit() {
    console.clear();
    const myPlugin: MyPlugin = new MyPlugin("Custom plugin");
    const manager: PluginManager = new PluginManager();
    manager.installPlugin(myPlugin);
    manager.updatePlugin(myPlugin);
  }

}