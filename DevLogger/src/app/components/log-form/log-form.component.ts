import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';

import { LogService } from 'src/app/services/log.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  // text: string = '';
  log: Log = {
    id: 0,
    text: '',
    date: '',
  };

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    // subscribe to the behavior object data stream to get the clicked/selected log
    this.logService.selectedLog.subscribe((log) => (this.log = log));
  }
}
