import { Tag } from '../../tag/model/tag';
import { User } from '../../user/model/user';
import { ISos } from './sos.interface';

export class Sos implements ISos {

    public id: number;
    public etat: boolean;
    public date: string;
    public personne: User;
    public tag: Tag;

    constructor(sos:ISos) {
        this.id=sos.id;
        this.etat=sos.etat;
        this.date=sos.date;
        this.personne=sos.personne;
        this.tag=sos.tag;
    }

}
