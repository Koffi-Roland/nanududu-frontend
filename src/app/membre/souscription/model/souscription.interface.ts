import { Publication } from '../../publication/model/publication';
import { User } from '../../user/model/user';

export interface ISouscription {
    id: number;
    date: string;
    etat: boolean;
    publication: Publication;
  
}
