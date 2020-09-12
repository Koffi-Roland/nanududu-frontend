import { Tag } from '../../tag/model/tag';
import { User } from '../../user/model/user';

export interface ISos {
    id: number;
    etat: boolean;
    date: string;
    personne: User;
    tag: Tag;
   

}
