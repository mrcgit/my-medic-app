interface ButtonModel{
    label: string,
    action: string
}


export interface FeatureModel{
    id: string,
    name: string;
    description: string;
    buttons: ButtonModel[]
    icon: string,
    bg: string
    planningType: string
}