import { Component, OnInit } from '@angular/core';
import {Alert} from "../alert"
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {

  alert = <Alert>{};

  selectedAlert?: Alert;

  constructor(private alertService: AlertService) { }


  ngOnInit(): void {
    this.getAlert();
  }

  getAlert(): void {
    this.alertService.getAlert()
        .subscribe((response) =>{console.log('response received')
      this.alert = response;
  })
  }


}
