import { ITag} from './tag.interface';

export class Tag /*implements ITag*/ {

    public id: number;
    public libelle: string;
    public description: string;

    constructor(id: any) {
        this.id = id ? id : null;
    }


}
