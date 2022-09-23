import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Client } from 'src/app/core/models/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // public collection$: Observable<Client[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    // this.collection$ = this.httpClient.get<Client[]>(this.urlApi + `/clients`);
  }
}
