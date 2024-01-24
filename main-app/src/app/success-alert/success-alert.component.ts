import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent implements OnInit {
  serverStatus: string = 'Online';
  serverId: number = 10;
  isNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
        this.isNewServer = true;
      }, 2000
    )
  }

  ngOnInit() {
  }
}
