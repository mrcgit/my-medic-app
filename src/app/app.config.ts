import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as featuresEffets from './store/features/features.effects';
import * as pressureEffets from './store/pressure/pressure.effects';
import * as temperatureEffects from './store/temperature/temperature.effects';

import { featuresReducer } from './store/features/features.reducer';
import { provideHttpClient } from '@angular/common/http';
import { pressureReducer } from './store/pressure/pressure.reducer';
import { DatePipe } from '@angular/common';
import { temperatureReducer } from './store/temperature/temperature.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({name: 'slice1', reducer: featuresReducer}),
    provideState({name: 'slice2', reducer: pressureReducer}),
    provideState({name: 'slice3', reducer: temperatureReducer}),
    provideEffects([featuresEffets, pressureEffets,temperatureEffects ]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    DatePipe
  ]
};
