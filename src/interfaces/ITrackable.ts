
export interface ITrackable {
    getStatus ():string;
    setStatus(newStatus: string): void;
}