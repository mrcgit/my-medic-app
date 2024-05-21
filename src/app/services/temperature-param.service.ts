import { Injectable } from '@angular/core';
import { FakeHttpClientService } from './fake-http-client.service';
import { MedicParameter } from '../core/model/medic-parameter';
import { Observable } from 'rxjs';
import { TEMPERATURE_PARM_EP } from './endpoint';
import { ApiResponse } from '../core/model/response.model';

@Injectable({
  providedIn: 'root'
})
export class TemperatureParamService {

  constructor(private http: FakeHttpClientService) { 

  }

  getAll(): Observable<MedicParameter[]>{
    return this.http.get<MedicParameter[]>(TEMPERATURE_PARM_EP.GET_ALL);
  }

  delete(id: string): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(id);
  }

  add(item: MedicParameter):  Observable<ApiResponse>{
    return this.http.post<ApiResponse>(TEMPERATURE_PARM_EP.ADD, item);
  }

}
