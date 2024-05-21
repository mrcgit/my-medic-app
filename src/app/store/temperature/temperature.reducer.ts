import { createReducer, on } from "@ngrx/store";

import {  MedicParameter } from "../../core/model/medic-parameter";
import { TemperatureActions } from "./termperature.actions";


export interface TemperatureParamsState{
    items: MedicParameter[],
}



const initialState: TemperatureParamsState = {
    items: [],
    
}

export const temperatureReducer = createReducer(
    initialState,
    on(TemperatureActions.loadTemperatureParamsSuccess, (state,action)=> ({...state, items: action.payload})),
    on(TemperatureActions.addTemperatureParamSuccess, (state,action)=> ({...state, items: state.items  ? [...state.items, action.payload.item] :  [ action.payload.item]})),
    on(TemperatureActions.deleteTemperatureParamSuccess, (state,action)=> ({...state, items: state.items  ? state.items.filter((i)=>i.id !== action.payload.id) :  []}))
)

