import { User } from '../../user/model/user';
import { IPublication } from './publication.interface';

export class Publication /*implements IPublication*/ {

    public id: number;
    public  libelle:string;
    public  description:string;
    public  date:string;
    public  expiration:string;
    public  personne:any;





    constructor(id: any) {
        this.id = id ? id : null;
    /* this.id=publication.id;
        this.libelle=publication.libelle;
        this.description=publication.description;
        this.date=publication.date;
        this.expiration=publication.expiration;
        this.personne=publication.personne;*/
       

    }


}
