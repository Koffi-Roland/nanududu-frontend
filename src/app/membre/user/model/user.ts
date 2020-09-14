import { IUser } from './user.interface';

export class User /*implements IUser*/ {

    public id: number;
    public identifiant: string;
    public telephone: string;
    public roles: any[];
    public motDePasse: string;
    public nom: string;
    public adresse?: string;
    public prenom: string;
    public aggree?: boolean;
    public ville?: string;


    constructor(id: any) {
            this.id = id ? id : null;
           
              /*  this.identifiant = user.identifiant;
        this.telephone = user.telephone;
        this.motDePasse = user.motDePasse;
        this.roles = user.roles;
        this.nom = user.nom;
        this.adresse = user.adresse;
        this.prenom = user.prenom;
        this.aggree = user.aggree;
        this.ville = user.ville;*/


    }




}
