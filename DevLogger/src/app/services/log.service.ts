import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

//Injectable decorator means that this service
//can be injected to components using the dependent injection in the constructor

@Injectable({
  providedIn: 'root',
})
export class LogService {
  // use logs property as a global state for two slicing components
  // if one component is a parent of the other you can pass the state as an input
  logs: Log[] = [];

  // use behavior subject to listen/subscribe for stream of date or its initial value
  private logSource = new BehaviorSubject<Log>({ id: 0, text: '', date: null });
  // you need to make a source private property then make an observable property from this source to communicate with
  // you will access this observable property and subscribe to it to get the stream of logs or the initial value
  selectedLog = this.logSource.asObservable();

  constructor() {
    //you can use a static data here at first
    // then you can make ajax calls here in the service in methods that can be used in the components
    this.logs = [
      {
        id: 1,
        text: 'Marwan Mousaa',
        date: new Date('8/4/2022 06:40:15'),
      },
      {
        id: 2,
        text: 'Wegz',
        date: new Date('8/3/2022 02:04:00'),
      },
      {
        id: 3,
        text: 'Marwan Pablo',
        date: new Date('8/2/2022 12:20:11'),
      },
      {
        id: 4,
        text: 'Moussa Sam',
        date: new Date('8/1/2022 01:50:20'),
      },
      {
        id: 5,
        text: 'Abyusif',
        date: new Date('8/5/2022 12:54:23'),
      },
    ];
  }

  // you can't use ngOnInit in a service, you can use it only on components, use the constructor method instead
  // ngOnInit(): void {}

  // make it to return the logs as observables to be asynchronous
  getLogs(): Observable<Log[]> {
    // of operator is a pure method that transform information into the observables stream
    return of(this.logs);
  }

  // will use this method to set form log to the data source so every subscriber to this BehaviorSubject object gets the new data
  setFormLog(log: Log) {
    // use the next method to the BehaviorSubject object to stream new data for the subscribers
    // Using the next method, we can pass every value emitted by the observable
    this.logSource.next(log);
    // console.log(log);
  }

  // add log
  addLog(log: Log) {
    log.id = this.logs.length + 1;
    // console.log('from service', log);
    this.logs.unshift(log);
    // you can't reassign the reference type with a new value, edit in place, in React you clone but in Angular edit in place
    // this.logs = [log, ...this.logs];
    // console.log(this.logs);
  }

  //delete log
  deleteLog(log: Log) {
    console.log('from service', log);
    const { id } = log;
    // this won't work
    // this.logs = this.logs.filter((log) => log.id !== id);
    this.logs.forEach((log, index) => {
      if (log.id === id) this.logs.splice(index, 1);
    });
  }
}
