export interface Trainer {
    trainer_id: number;
    name:       string;
    age:        number;
    address:    Address;
    pokemon:    Pokemon[];
}

export interface Address {
    street: string;
    number: number;
}

export interface Pokemon {
    name:  string;
    level: number;
}

export interface TrainerResponse {
    trainers: Trainer[];
}