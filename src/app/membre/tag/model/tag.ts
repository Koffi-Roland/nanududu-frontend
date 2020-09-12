import { ITag} from './tag.interface';

export class Tag implements ITag {

    public id: number;
    public libelle: string;
    public description: string;

    constructor(tag:ITag) {
        this.id=tag.id;
        this.libelle=tag.libelle;
        this.libelle=tag.libelle;
    }


}
