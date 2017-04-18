import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'generics',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class GenericsComponent implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;

  ngOnInit() {
    console.clear();

    let db : DBManager<Device> = new DBManager<Device>();

    let camera: Camera = {
      id: 1,
      name: 'camera 1',
      fixed: true,
      toString: function(){
        return `Camera: ${this.name}`;
      }};

    let dms: DMS = {
      id: 2,
      name: 'DMS 1',
      message: 'danger',
      toString: function(){
        return `DMS: ${this.name}`;
      }};




  console.log(db.save(camera));
  }

}
interface Device {
  id: number;
  name: string;
  toString: () => string;
}

interface Camera extends Device {
  fixed: boolean;
}

interface DMS extends Device {
  message: string;
}

class DBManager<T extends Device> {
  save(device: T): void {
    console.log(device.name);
  }
}


