import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRESSURE_PARM_EP } from './endpoint';


@Injectable({
  providedIn: 'root'
})
export class FakeHttpClientService {
  endPoint = '';

  constructor( ) {}


  sequence(): string{
    const data = localStorage.getItem("sequence")
    return data ? data + 1 : "1"; 

  }

   setEndPoint(endPoint: string){
    this.endPoint = endPoint;
   }


  get<T>(url: string): Observable<T> {

    const params = localStorage.getItem(this.endPoint);
    let list; 

    if(params){
     list = JSON.parse(params)
    }
    
    const mockData: T = list as T; 

    return of(mockData);
  }


  delete<T>(id: string): Observable<T>{

    const params = localStorage.getItem(this.endPoint);
    let list = params ? JSON.parse(params) : [];

    const index = (list as Array<{id: string}>).findIndex((item)=> item.id === id)
    if(index){
      (list as Array<{id: string}>).slice(index,1);
    }

    const listAsString = JSON.stringify(list);
    
    localStorage.setItem(this.endPoint, listAsString);

    const mockData: T = {code: 0, message: "OK"} as T; 

    return of(mockData);
  }
   
  

  post<T>(url: string, data: any):  Observable<T>{
    
    const params = localStorage.getItem(this.endPoint);
    const list = params ? JSON.parse(params) : [];
    
    const id = this.sequence();
    data.id = id;

    list.push(data);
    const listAsString = JSON.stringify(list);
    
    localStorage.setItem(this.endPoint, listAsString);

    const mockData: T = {code: 0, message: "OK"} as T; 

    return of(mockData);
  }
}
