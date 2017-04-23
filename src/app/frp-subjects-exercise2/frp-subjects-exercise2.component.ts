import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector:    'frp-subjects-exercise2',
  template: `<div [innerHtml]="htmlContent"></div>`
})
export class FRPSubjectsExercise2Component implements OnInit {

  htmlContent = `<pre><code>
</code>
</pre>`;


  ngOnInit() {
    console.clear();

    const incidences$: Subject<Incidence> = new Subject<Incidence>();

    const updates$ : Subject<any> = new Subject<any>();

    incidences$
      .do((incidence: Incidence) => console.log(`Incidence -> ${incidence.type}`))
      .map(incidence => incidenceToEvent(incidence))
      .subscribe(updates$);


    const events$ = updates$
        .scan((event: Event[], operation: EventOperation) => operation(events), []);

    events$
    .map(events => events[events.length - 1])
    .subscribe(event => console.log(`Event -> e${event.type}, severity: ${event.severity}`));


    Observable.interval(2500)
        .map(_ => new Incidence(getIncidenceType()))
        .subscribe(incidences$);
  }

}

type IncidenceType = string;

type Severity = string;

const TRAFFIC_INCIDENCE = "TRAFFIC_INCIDENCE";
const METEO_INCIDENCE = "METEO_INCIDENCE";
const CLOSE_ROAD = "CLOSE_ROAD";
const DAMAGE = "DAMAGE";
const UNKNOWN = "UNKNOWN";

const LOW = "LOW";
const NORMAL = "NORMAL";
const HIGH = "HIGH";
const SEVERE = "SEVERE";

const incideceTypes = [TRAFFIC_INCIDENCE, METEO_INCIDENCE, CLOSE_ROAD, DAMAGE, UNKNOWN];

const severities = [LOW, NORMAL, HIGH, SEVERE];

function randomValue(array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

const getIncidenceType = () => randomValue(incideceTypes);
const getSeverity = () => randomValue(severities);

class Incidence {
  constructor(public type: IncidenceType){}
}

class Event {
  constructor(public type: IncidenceType, public severity: Severity){}
}

interface EventOperation extends Function {
  (events: Event[]) : Event[];
}

const incidenceToEvent : EventOperation = (incidence: Incidence) => (events: Event[]) => events.concat(new Event(incidence.type, getSeverity()));