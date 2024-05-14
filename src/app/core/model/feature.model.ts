interface ButtonModel{
    label: string,
    action?: ()=> void
}


export interface FeatureModel{
    name: string;
    description: string;
    buttons: ButtonModel[]
    icon: string
}