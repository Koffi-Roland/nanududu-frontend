import { IUser } from './user.interface';

export class User implements IUser {

    public id: number;
    public username: string;
    public telephone: string;
    public roles: any[];
    public password: string;
    public firstname: string;
    public email?: string;
    public lastname: string;
    public country?: string;
    public ville?: string;
    public longitude?: string;
    public latitude?: string;
    public created_at?: string;
    public updated_at?: string;
    public token?: string;

    constructor(user:IUser) {
        this.id=user.id;
        this.firstname=user.firstname;
        this.lastname=user.lastname;
        this.email=user.email;
        this.roles=user.roles;
        this.password=user.password;
        this.telephone=user.telephone;

    }


}
