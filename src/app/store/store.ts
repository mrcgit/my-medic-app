import { FeatureSlice } from "@ngrx/store";
import { FeatureModel } from "../core/model/feature.model";
import { FeatureState } from "./features/features.reducer";

export type AppState = {
    slice1: FeatureState
    
}