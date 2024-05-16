import { createReducer, on } from "@ngrx/store";
import { FeatureActions } from "./features.actions";
import { AppState } from "../store";
import { FeatureModel } from "../../core/model/feature.model";


export interface FeatureState  {
    features: FeatureModel[],
    current: FeatureModel 
}

const defaultFeature = {
    name: '',
    description: '',
    buttons: [],
    icon: '',
    bg: '',
    planningType: ''
}

const initialState: FeatureState = {
    features: [],
    current: defaultFeature
}

export const featuresReducer = createReducer(
    initialState,
    on(FeatureActions.loadFeaturesSuccess, (state,action)=> ({...state, features: action.payload})),
    on(FeatureActions.setCurrentFeature,(state,action)=> ({...state, current: action.payload}))
)


