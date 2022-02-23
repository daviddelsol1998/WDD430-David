export class Contact {
    public id: number;
    public name: string;
    public email: string;
    public phone: number;
    public imageUrl: string;
    public group: Array<string>;

    constructor(id: number, name: string, email: string, phone: number, imageUrl: string, group?: Array<string>) {

    }
}