import { Publication } from '../../publication/model/publication';
import { ISouscription } from './souscription.interface';

export class Souscription implements ISouscription {

    public id: number;
    public date: string;
    public etat: boolean;
    public publication: Publication;

    constructor(souscription:ISouscription) {
        this.id=souscription.id;
        this.date=souscription.date;
        this.etat=souscription.etat;
        this.publication=souscription.publication;
       

    }


}
