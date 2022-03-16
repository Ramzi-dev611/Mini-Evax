export enum AppointmentStatusEnum {
    holding= "Available",
    taken = "Taken",
    missed = "Missed"
}

export class Appointment {
    public id: string ="";
    public userId: string ="";
    public date: string= "";
    public location: string = "";
    public status: AppointmentStatusEnum= AppointmentStatusEnum.holding;

}
