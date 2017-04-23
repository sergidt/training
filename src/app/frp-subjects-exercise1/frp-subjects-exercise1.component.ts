import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector:    'frp-subjects-exercise1',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsExercise1Component implements OnInit {

  htmlContent = `<pre><code>
interface Device {
  name: string;
  active: boolean;
}

interface filter {
  field: string;
  value: any;
}

</code>
</pre>`;


  ngOnInit() {
    console.clear();

    const devices: Array<Device> = [
      {name: 'Camera 1', active: true},
      {name: 'Camera 2', active: true},
      {name: 'DMS 1', active: false},
      {name: 'DMS 2', active: true},
      {name: 'TSS 1', active: false},
      {name: 'TSS 2', active: false}
    ];

    const devices$ = Observable.of(devices);

    const filter: Filter = {field: 'active', value: true};

    const filters$ : BehaviorSubject<Filter> = new BehaviorSubject<Filter>(filter);



    const filteredDevices$ = Observable.combineLatest(devices$, filters$)
                                       .map(([devices, filter]) => applyFilter(devices, filter));

    filteredDevices$.subscribe(devices => devices.forEach(d => printDevice(d)));


    setTimeout(() => {
      filters$.next({field: 'name', value: 'Camera 1'});
    }, 5000);
  }

}

interface Device {
  name: string;
  active: boolean;
}

interface Filter {
  field: string;
  value: any;
}

function printDevice(d: Device) {
  console.log(`Device: ${d.name}, active: ${d.active}`);
}

const applyFilter: FilterFunction<Device> = (devices: Device[], filter: Filter) => devices.filter(d => d[filter.field] === filter.value);




interface FilterFunction<T> extends Function {
  (items: T[], filter: Filter): T[];
}