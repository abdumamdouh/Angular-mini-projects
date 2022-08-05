import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';

import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logs: Log[] = [];

  // inject the log service to the constructor so we can use the methods inside the service
  // dependency injection
  // when you declare the visibility at the constructor brackets in typescript
  // => means that you has made a property then assign to it a value and now it's a property in the component
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logs = this.logService.getLogs();
  }

  // emit the clicked log to the behavior subject object so we can subscribe for it at the log from
  handleLogClick(log: Log) {
    // console.log(log);
    this.logService.setFormLog(log);
  }
}
