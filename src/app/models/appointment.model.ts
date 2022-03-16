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

    constructor(id: string, userId: string, date: string, location: string, status: AppointmentStatusEnum) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.location = location;
        this.status = status;
    }

}