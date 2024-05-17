import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private datePipe: DatePipe) {
    
}


formatDate(date: Date, formatString: string){
  return this.datePipe.transform(date, formatString);
}

}
