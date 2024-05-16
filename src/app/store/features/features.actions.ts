import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { FeatureModel } from "../../core/model/feature.model";





export const FeatureActions = createActionGroup(
    {
        source: 'features',
        events: {
            'loadFeatures' : emptyProps(),
            'loadFeaturesSuccess':  props<{payload: FeatureModel[]}>(),
            'setCurrentFeature': props<{payload: FeatureModel}>(),
            'loadError': emptyProps(),
        }
    }

)