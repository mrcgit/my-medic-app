import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as featuresEffets from './store/features/features.effects';
import { featuresReducer } from './store/features/features.reducer';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({name: 'slice1', reducer: featuresReducer}),
    //provideState({name: 'slice2', reducer: misureReducer}),
    provideEffects([featuresEffets]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})
  ]
};
