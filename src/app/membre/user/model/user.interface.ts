export interface IUser {
    id: number;
    identifiant: string;
    telephone: string;
    roles: any[];
    motDePasse: string;
    nom: string;
    adresse?: string;
    prenom: string;
    aggree?: boolean;
    ville?: string;
   // longitude?: string;
    //latitude?: string;
    //created_at?: string;
   //updated_at?: string;
   // token?: string;

}
