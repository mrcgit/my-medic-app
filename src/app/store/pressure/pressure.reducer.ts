import { createReducer, on } from "@ngrx/store";

import { GraphSerieModel, MedicParameter } from "../../core/model/medic-parameter";
import { PressureActions } from "./pressure.actions";


export interface PressureParamsState  {
    items: MedicParameter[],
    model: GraphSerieModel[],
}



const initialState: PressureParamsState = {
    items: [],
    model: []
    
}

export const pressureReducer = createReducer(
    initialState,
    on(PressureActions.loadPressureParamsSuccess, (state,action)=> ({...state, items: action.payload})),
    on(PressureActions.addPressureParamSuccess, (state,action)=> ({...state, items: [...state.items, action.payload.item]})),

)
