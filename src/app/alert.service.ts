import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Alert } from './alert';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class AlertService {

  private alertsUrl = 'https://digital.nhs.uk/restapi/CyberAlert/?_limited=true';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getAlert(): Observable<Alert> {
    return this.http.get<Alert>(this.alertsUrl)

  }

}
