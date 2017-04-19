import { Component, OnInit } from '@angular/core';
import { Camera, Device, devices, DeviceType } from './fp-exercise-data';

@Component({
  selector: 'fp-exercise-2',
  template: `<h2 class="subtitle">FP - Exercise 2</h2>
  <div [innerHtml]="htmlContent"></div>`
})
export class FpExercise2Component implements OnInit {

  htmlContent = `<pre><code>
//////////////////////////////////////////////////////////////////////////////////
// CHALLENGE: Create a function named totalMovableCameras,                      //
//            that counts the movable cameras from our device list              //
//////////////////////////////////////////////////////////////////////////////////
</code>
</pre>`;

  ngOnInit() {
    console.clear();

    console.log(getDevicesCountByConditions(devices, totalCamerasConditions));
  }
}


type Predicate = (d: Device) => boolean;


function getDevicesCountByConditions(devices: Device[], conditions: Predicate[]): number {
  return filterDevices(conditions)(devices).length;
}

function and(condicions: Predicate[]) : Predicate {
  return (d) => condicions.every(c => c(d));
}

const movableCamerasConditions = [(d: Device) => d.deviceType === DeviceType.Camera,
  (d: Device) => !(<Camera>d).isFixed()];


const totalCamerasConditions = [(d: Device) => d.deviceType === DeviceType.Camera];

const filterDevices = (conditions: Predicate[]) => (devices) => devices.filter(and(conditions));

const movableCameras = getDevicesCountByConditions(devices, movableCamerasConditions);
const totalCameras = getDevicesCountByConditions(devices, totalCamerasConditions);

