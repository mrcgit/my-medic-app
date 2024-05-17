
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


      export const loadPressureGraphModel = createEffect(
        (
          actions$ = inject(Actions),
        ) => {
            return actions$
              .pipe(
                ofType(PressureActions.loadPressureGraphModel),
                mergeMap(
                  (action) => computePressureModel(action.payload)
                    .pipe(
                      map((response) => {
                        return PressureActions.loadPressureGraphModelSuccess({ payload: response })
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


        const computePressureModel = (pressureParams: MedicParameter[]): Observable<GraphSerieModel[]> =>{
          let result;

          if(pressureParams && pressureParams.length > 0){
      
            const name1 = "sistolica"
            const name2 = "diastolica"
        
            const serie1 = pressureParams.map((p) =>{
              return {
                  name: p.date.toDateString(),
                  value: p.list["sistolica"]
              };
            });
        
            const serie2 = pressureParams.map((p)=> {
              return {
                name: p.date.toDateString(),
                value: p.list["diastolica"]
              }
            })
        
            const model: GraphSerieModel[] = [
              {
                "name": name1,
                "series": serie1
              },
              {
                "name": name2,
                "series": serie2
              }
            ]
           result = model;
          }  else {
            result =  [
              {
                "name": '',
                "series": []
              },
              {
                "name": '',
                "series": []
              }
            ]
          }
          return of(result);
        }


   
       
