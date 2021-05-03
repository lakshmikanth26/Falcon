import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http-service/http.service';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public httpService: HttpService,
    private httpClient: HttpClient) { }

  getPlanets() {
    return this.httpService.get(baseUrl + 'planets');
  }
  
}
