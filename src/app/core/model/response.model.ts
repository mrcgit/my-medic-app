import { MedicParameter } from "./medic-parameter"

export interface ApiResponse {
    code: number,
    message: string
    item: MedicParameter
}