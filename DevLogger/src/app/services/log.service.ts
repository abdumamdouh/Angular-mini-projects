import { Injectable } from '@angular/core';
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

  // you can't use ngOnInit in a service, you can use it only on components
  // ngOnInit(): void {}

  getLogs(): Log[] {
    return this.logs;
  }
}
