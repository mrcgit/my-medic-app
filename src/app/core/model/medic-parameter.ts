


export interface MedicParameter{
    id: string;
    date: Date;
    list: { [key: string]: string };
    name: string
}


export interface GraphSerieModel{
    name: string,
    series: GraphItemModel[]
}


export type GraphItemModel = {
    name: string,
    value: string,
}

