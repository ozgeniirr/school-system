import { IPerson } from "./IPerson";


export interface IStudent extends IPerson {
    studentId:string;
    introduce(): string;
}