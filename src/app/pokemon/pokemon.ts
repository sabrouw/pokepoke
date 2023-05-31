export class Pokemon {
    //valeur initiale
    id: number;
    name: string;
    hp: number; 
    cp: number; 
    picture: string;
    types: Array<string>;
    created: Date;
    //créer un constructeur pour des valeur par défaut
    //lors de la création d'un pokemon
    constructor(
        name: string = "Entrer un nom.. ",
        hp: number = 100,
        cp: number = 10,
        picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
        types: string[] = ["normal"],
        created: Date = new Date()
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created= created;
    }
}