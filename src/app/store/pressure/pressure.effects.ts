
import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { PressureActions } from "./pressure.actions";
import { PressureParamService } from "../../services/pressure-param.service";




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
                    return PressureActions.loadPressureParamsSuccess({ payload: response.filter((p)=> p.name ==='pressure') })
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


      export const deletePressionParams = createEffect(
        (
          actions$ = inject(Actions),
          service$ = inject(PressureParamService)
        ) => {
            return actions$
              .pipe(
                ofType(PressureActions.deletePressionParams),
                mergeMap(
                  (action) => service$.delete(action.payload.id)
                    .pipe(
                      map((response) => {
                        return PressureActions.deletePressureParamSuccess({ payload: action.payload })
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





   
       
