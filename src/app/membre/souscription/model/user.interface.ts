export interface IUser {
    id: number;
    username: string;
    telephone: string;
    roles: any[];
    password: string;
    firstname: string;
    email?: string;
    lastname: string;
    country?: string;
    ville?: string;
    longitude?: string;
    latitude?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;

}
