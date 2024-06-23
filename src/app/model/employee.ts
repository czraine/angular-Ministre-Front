export interface Employee { 
    id?: number;
    firstName?: string;
    lastName?: string;
    position?: string;
    age?: number;
    salary?: number;
    gender?: Employee.GenderEnum;
}
export namespace Employee {
    export type GenderEnum = 'Homme' | 'Femme';
    export const GenderEnum = {
        Homme: 'Homme' as GenderEnum,
        Femme: 'Femme' as GenderEnum
    };
}


