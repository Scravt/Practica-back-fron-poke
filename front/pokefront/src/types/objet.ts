export interface Objet{
    item_id: number;
    name:    string;
    price:   number;
    effect:  string;
}

export interface ObjetResponse {
    objets: Objet[];
}