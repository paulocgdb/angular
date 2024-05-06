import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent implements OnInit {
  serverStatus: string = 'Offline';
  serverId: number = 10;
  isNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
        this.isNewServer = true;
        this.serverStatus = 'Online';
      }, 2000
    )
  }

  ngOnInit() {
  }
}
