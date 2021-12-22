import { Component, OnInit, Input } from '@angular/core';
import { Alert } from "../alert";

@Component({
  selector: 'app-alert-detail',
  templateUrl: './alert-detail.component.html',
  styleUrls: ['./alert-detail.component.sass']
})
export class AlertDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() alert?:Alert;


}
