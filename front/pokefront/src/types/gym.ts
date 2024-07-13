export interface Gym {
    gym_id:  number;
    name:    string;
    leader:  string;
    address: Address;
    pokemon: Pokemon[];
}

export interface Address {
    street: string;
    number: number;
}

export interface Pokemon {
    name:  string;
    level: number;
}

export interface GymResponse {
    gyms: Gym[];
}