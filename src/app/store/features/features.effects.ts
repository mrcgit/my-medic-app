import { HttpClient } from "@angular/common/http";
import { Inject, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ConfigurationService } from "../../services/configuration.service";
import { FeatureActions } from "./features.actions";




export const featuresEffects = createEffect(
    (
      actions$ = inject(Actions),
      service$ = inject(ConfigurationService)
    ) => {
        return actions$
          .pipe(
            ofType(FeatureActions.loadFeatures),
            mergeMap(
              () => service$.getFeaturesData()
                .pipe(
                  map((response) => {
                    return FeatureActions.loadFeaturesSuccess({ payload: response })
                  }),
                  catchError(() => of(FeatureActions.loadError()))
                )
            ),
          )
      },
      {
        functional: true
      }
    )

   
       
