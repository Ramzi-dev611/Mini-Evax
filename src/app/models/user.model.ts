export class User {
    public id: string = ""
    public name: string = "";
    public cin: string = "";
    public evaxCode: string = ""
    public email: string = "";
    public phone: string = "";

    constructor(id: string='', name: string='', cin: string='', evaxCode: string='', email: string='', phone: string=''){
        this.id = id;
        this.name = name;
        this.cin = cin;
        this.evaxCode = evaxCode;
        this.email = email;
        this.phone = phone;
    }
}
