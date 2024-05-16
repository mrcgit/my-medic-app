import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { FeatureModel } from '../core/model/feature.model';
import { FEATURE_ENDPOINT } from './endpoint';

//import { NEWS_FEED, NEWS_SECTIONS, NEWS_SECTIONS_NAMES, NEWS_SECTIONS_PARAMS } from '../apis/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { 
  }

  getFeaturesData(): Observable<FeatureModel[]>{
    return this.http.get<FeatureModel[]>(FEATURE_ENDPOINT);
  }


}
