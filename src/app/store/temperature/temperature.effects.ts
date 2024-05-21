
import { inject } from "@angular/core";
import { Actions, act, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ConfigurationService } from "../../services/configuration.service";
import { TemperatureActions } from "./termperature.actions";
import { PressureParamService } from "../../services/pressure-param.service";
import { GraphSerieModel, MedicParameter } from "../../core/model/medic-parameter";
import { TemperatureParamService } from "../../services/temperature-param.service";





export const loadTemeratureParams = createEffect(
    (
      actions$ = inject(Actions),
      service$ = inject(TemperatureParamService)
    ) => {
        return actions$
          .pipe(
            ofType(TemperatureActions.loadTemperatureParams),
            mergeMap(
              () => service$.getAll()
                .pipe(
                  map((response) => {
                    return TemperatureActions.loadTemperatureParamsSuccess({ payload: response })
                  }),
                  catchError(() => of(TemperatureActions.loadError()))
                )
            ),
          )
      },
      {
        functional: true
      }
    )

    export const addTemperatureParam = createEffect(
      (
        actions$ = inject(Actions),
        service$ = inject(PressureParamService)
      ) => {
          return actions$
            .pipe(
              ofType(TemperatureActions.addTemperatureParam),
              mergeMap(
                (action) => service$.add(action.payload)
                  .pipe(
                    map((response) => {
                      return TemperatureActions.addTemperatureParamSuccess({ payload: response })
                    }),
                    catchError(() => of(TemperatureActions.loadError()))
                  )
              ),
            )
        },
        {
          functional: true
        }
      )


      export const deletePressionParams = createEffect(
        (
          actions$ = inject(Actions),
          service$ = inject(PressureParamService)
        ) => {
            return actions$
              .pipe(
                ofType(TemperatureActions.deleteTemperatureParams),
                mergeMap(
                  (action) => service$.delete(action.payload.id)
                    .pipe(
                      map((response) => {
                        return TemperatureActions.deleteTemperatureParamSuccess({ payload: action.payload })
                      }),
                      catchError(() => of(TemperatureActions.loadError()))
                    )
                ),
              )
          },
          {
            functional: true
          }
        )





   
       
