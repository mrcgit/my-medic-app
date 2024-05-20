import { inject } from "@angular/core";
import { GraphSerieModel, MedicParameter } from "../../core/model/medic-parameter";
import { AppState } from "../store";
import { UtilsService } from "../../services/utils.service";


export const selectPressureParams = (state: AppState) => state.slice2.items

export const selectPressureGraphModel = (state: AppState) => computePressureModel(state.slice2.items)





const computePressureModel = (pressureParams: MedicParameter[]): GraphSerieModel[] =>{
  const utils = inject(UtilsService);
    let result;

    if(pressureParams && pressureParams.length > 0){

      const name1 = "sistolica"
      const name2 = "diastolica"
  
      const serie1 = pressureParams.slice(-7).map((p) =>{
        return {
            name: utils.formatDate(p.date, "dd/MM/yyyy:HH:mm")!,
            value: p.list["sistolica"]
        };
      });
  
      const serie2 = pressureParams.slice(-7).map((p)=> {
        return {
          name:utils.formatDate(p.date, "dd/MM/yyyy:HH:mm")!,
          value: p.list["diastolica"]
        }
      })
  
      const model: GraphSerieModel[] = [
        {
          "name": name1,
          "series": serie1,
        },
        {
          "name": name2,
          "series": serie2,
        }
      ]
     result = model;
    }  else {
      result =  [
        {
          "name": '',
          "series": [],
        },
        {
          "name": '',
          "series": [],
        }
      ]
    }
    return result;
  }