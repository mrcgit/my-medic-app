import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRESSURE_PARM_EP } from './endpoint';


@Injectable({
  providedIn: 'root'
})
export class FakeHttpClientService {
  endPoint = '';

  constructor( ) {
    
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
    let list; 

    if(params){
     list = JSON.parse(params)
    }
    const item = (list as Array<{id: string}>).find((item)=> item.id === id);
    if(item){


    }

    const listAsString = JSON.stringify(list);
    
    localStorage.setItem(this.endPoint, listAsString);

    const mockData: T = {code: 0, message: "OK"} as T; 

    return of(mockData);
  }
   
  

  post<T>(url: string, data: any):  Observable<T>{
    
    const params = localStorage.getItem(this.endPoint);
    let list; 

    if(params){
     list = JSON.parse(params)
    }
    list.push(data);
    const listAsString = JSON.stringify(list);
    
    localStorage.setItem(this.endPoint, listAsString);

    const mockData: T = {code: 0, message: "OK"} as T; 

    return of(mockData);
  }
}
