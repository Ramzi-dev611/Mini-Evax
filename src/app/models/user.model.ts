export class User {
    private id: string = ""
    private name: string = "";
    private cin: string = "";
    private evaxCode: string = ""
    private email: string = "";
    private phone: string = "";

    public getName(): string{
        return this.name;
    }    
    public setName(name: string){
        this.name= name;
    }

    public getCin(): string {
        return this.cin;
    }
    public setCin(cin: string) {
        this.cin = cin;
    }
    public getId(): string {
        return this.id;
    }
    public getEvaxCode(): string {
        return this.evaxCode;
    }
    public setEvaxCode(code: string) {
        this.evaxCode = code;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string) {
        this.email = email;
    }
    public getPhone(): string {
        return this.phone;
    }
    public setPhone(phone: string) {
        this.phone = phone;
    }
}
