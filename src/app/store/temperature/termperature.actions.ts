import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GraphSerieModel, MedicParameter } from "../../core/model/medic-parameter";
import { ApiResponse } from "../../core/model/response.model";





export const TemperatureActions = createActionGroup(
    {
        source: 'features',
        events: {
            'loadTemperatureParams' : emptyProps(),
            'loadTemperatureParamsSuccess':  props<{payload: MedicParameter[]}>(),
            'addTemperatureParam':props<{payload: MedicParameter}>(),
            'addTemperatureParamSuccess':props<{payload: ApiResponse}>(),
            'deleteTemperatureParams':props<{payload: MedicParameter}>(),
            'deleteTemperatureParamSuccess':props<{payload: MedicParameter}>(),
            'loadError': emptyProps(),
        }
    }

)