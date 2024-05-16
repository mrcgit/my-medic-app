import { AppState } from "../store";


export const selectFeatures = (state: AppState) => state.slice1.features

export const selectCurrentFeature = (state: AppState) => state.slice1.current





