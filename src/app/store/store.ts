
import { FeatureState } from "./features/features.reducer";
import { PressureParamsState } from "./pressure/pressure.reducer";

export type AppState = {
    slice1: FeatureState
    slice2: PressureParamsState
    
}