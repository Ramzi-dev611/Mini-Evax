export enum AppointmentStatusEnum {
    holding= "Available",
    taken = "Taken",
    missed = "Missed"
}

export class Appointment {
    private id: string ="";
    private userId: string ="";
    private date: string= "";
    private location: string = "";
    private status: AppointmentStatusEnum= AppointmentStatusEnum.holding;

    public getId(): string{
        return this.id;
    } 

    public getUserId(): string {
        return this.userId;
    }
    public setUserId(id: string) {
        this.userId = id;
    }

    public getDate(): string {
        return this.date;
    }
    public setDate(date: string) {
        this.date = date;
    }

    public getLocation(): string {
        return this.location;
    }
    public setlocation(location: string) {
        this.location = location;
    }
    public getName(): AppointmentStatusEnum {
        return this.status;
    }
    public setName(status: AppointmentStatusEnum) {
        this.status = status;
    }
}
