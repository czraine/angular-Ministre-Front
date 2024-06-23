
export interface EmployeeRequest { 
    firstName?: string;
    lastName?: string;
    position?: string;
    age?: number;
    salary?: number;
    gender?: EmployeeRequest.GenderEnum;
}
export namespace EmployeeRequest {
    export type GenderEnum = 'Homme' | 'Femme';
    export const GenderEnum = {
        Homme: 'Homme' as GenderEnum,
        Femme: 'Femme' as GenderEnum
    };
}


