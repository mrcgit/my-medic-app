
import { FeatureState } from "./features/features.reducer";
import { PressureParamsState } from "./pressure/pressure.reducer";
import { TemperatureParamsState } from "./temperature/temperature.reducer";

export type AppState = {
    slice1: FeatureState
    slice2: PressureParamsState
    slice3: TemperatureParamsState
    
}