import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PRESSURE_PARM_EP } from './endpoint';
import { MedicParameter } from '../core/model/medic-parameter';
import { FakeHttpClientService } from './fake-http-client.service';

//import { NEWS_FEED, NEWS_SECTIONS, NEWS_SECTIONS_NAMES, NEWS_SECTIONS_PARAMS } from '../apis/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PressureParamService {



  constructor(private http: FakeHttpClientService) { 
  }

  getAll(): Observable<MedicParameter[]>{
    return this.http.get<MedicParameter[]>(PRESSURE_PARM_EP.GET_ALL);
  }

  delete(id: string): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(id);
  }

  add(item: MedicParameter):  Observable<ApiResponse>{
    return this.http.post<ApiResponse>(PRESSURE_PARM_EP.ADD, item);
  }


}
