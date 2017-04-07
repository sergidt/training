import { Component, OnInit } from '@angular/core';
import { add, compose, divide, fork, sum, count, repeat } from 'app/data/fp-data';

@Component({
  selector: 'fp-exercise',
  template: `<h2 class="subtitle">FP - Exercise</h2>
             <div [innerHtml]="htmlContent"></div>`
})
export class FpExerciseComponent implements OnInit {

  htmlContent = `<pre><code>
//Our data
  
export enum DeviceType {
  Camera, DMS
}

export enum CameraType {
  Movable, Fixed
}

export class Device {
  constructor(public name: string, public deviceType: DeviceType) {}
}

export class Camera extends Device {
  constructor(public name: string, public cameraType: CameraType) {
      super(name, DeviceType.Camera);
  }

  isFixed(): boolean {
      return this.cameraType === CameraType.Fixed;
  }
}

export let devices = [
  new Device('DMS1', DeviceType.DMS),
  new Camera('Camera1', CameraType.Movable),
  new Device('DMS2', DeviceType.DMS),
  new Camera('Camera2', CameraType.Fixed),
  new Camera('Camera3', CameraType.Movable),
  new Camera('Camera4', CameraType.Fixed),
  new Camera('Camera4', CameraType.Fixed)
];

//////////////////////////////////////////////////////////////////////////////////
// CHALLENGE: Create a function named totalMovableCameras,                      //
//            that counts the movable cameras from our device list              //
//////////////////////////////////////////////////////////////////////////////////
</code>
</pre>`;

  ngOnInit() {
    console.clear();
  }

}
