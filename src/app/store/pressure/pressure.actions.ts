import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GraphSerieModel, MedicParameter } from "../../core/model/medic-parameter";
import { ApiResponse } from "../../core/model/response.model";





export const PressureActions = createActionGroup(
    {
        source: 'features',
        events: {
            'loadPressureParams' : emptyProps(),
            'loadPressureParamsSuccess':  props<{payload: MedicParameter[]}>(),
            'addPressureParam':props<{payload: MedicParameter}>(),
            'addPressureParamSuccess':props<{payload: ApiResponse}>(),
            'loadPressureGraphModel': props<{payload: MedicParameter[]}>(),
            'loadPressureGraphModelSuccess': props<{payload: GraphSerieModel[]}>(),
            'loadError': emptyProps(),
        }
    }

)