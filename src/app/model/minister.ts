import { Employee } from './employee';


export interface Minister { 
    id?: number;
    name?: Minister.NameEnum;
    employees?: Set<Employee>;
}
export namespace Minister {
    export type NameEnum = 'HEALTH' | 'EDUCATION' | 'AGRICULTURE' | 'DEFENSE' | 'TOURISM' | 'JUSTICE';
    export const NameEnum = {
        Health: 'HEALTH' as NameEnum,
        Education: 'EDUCATION' as NameEnum,
        Agriculture: 'AGRICULTURE' as NameEnum,
        Defense: 'DEFENSE' as NameEnum,
        Tourism: 'TOURISM' as NameEnum,
        Justice: 'JUSTICE' as NameEnum
    };
}


