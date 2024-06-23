
export interface MinisterRequest { 
    name?: MinisterRequest.NameEnum;
}
export namespace MinisterRequest {
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


