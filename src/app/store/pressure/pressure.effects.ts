
import { inject } from "@angular/core";
import { Actions, act, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ConfigurationService } from "../../services/configuration.service";
import { PressureActions } from "./pressure.actions";
import { PressureParamService } from "../../services/pressure-param.service";
import { GraphSerieModel, MedicParameter } from "../../core/model/medic-parameter";





export const loadPressureParms = createEffect(
    (
      actions$ = inject(Actions),
      service$ = inject(PressureParamService)
    ) => {
        return actions$
          .pipe(
            ofType(PressureActions.loadPressureParams),
            mergeMap(
              () => service$.getAll()
                .pipe(
                  map((response) => {
                    return PressureActions.loadPressureParamsSuccess({ payload: response })
                  }),
                  catchError(() => of(PressureActions.loadError()))
                )
            ),
          )
      },
      {
        functional: true
      }
    )

    export const addPressureParm = createEffect(
      (
        actions$ = inject(Actions),
        service$ = inject(PressureParamService)
      ) => {
          return actions$
            .pipe(
              ofType(PressureActions.addPressureParam),
              mergeMap(
                (action) => service$.add(action.payload)
                  .pipe(
                    map((response) => {
                      return PressureActions.addPressureParamSuccess({ payload: response })
                    }),
                    catchError(() => of(PressureActions.loadError()))
                  )
              ),
            )
        },
        {
          functional: true
        }
      )





   
       
