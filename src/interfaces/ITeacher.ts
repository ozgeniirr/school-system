import { IPerson } from "./IPerson";


export interface ITeacher extends IPerson {
    branch: string;
    introduce():string;

} 