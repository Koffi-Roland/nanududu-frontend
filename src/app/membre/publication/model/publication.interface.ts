import { User } from '../../user/model/user';

export interface IPublication {
    id: number;
    libelle:string;
    description:string;
    date:string;
    expiration:string;
    personne:User;
}
