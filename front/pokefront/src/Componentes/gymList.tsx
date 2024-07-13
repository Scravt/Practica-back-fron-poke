import React, { useEffect, useState } from 'react';
import { getRequestGym } from '../Services/ServiceGym';
import { Gym, GymResponse } from '../types/gym';

export const GymList: React.FC = () => {
    const [gyms, setGyms] = useState<Gym[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGyms = async () => {
            try {
                const response = await getRequestGym('gym');
                setGyms(response.data.gyms);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching gyms');
                setLoading(false);
            }
        };

        fetchGyms();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <ul>
                {gyms?.map((gym: Gym) => (
                    <li key={gym.gym_id}>
                        <h2>{gym.name}</h2>
                        <p><strong>Location:</strong> {gym.address.street} {gym.address.number}</p>
                        <p><strong>Leader:</strong> {gym.leader}</p>
                        <h3>Pokemons:</h3>
                        <ul>
                            {gym.pokemon.map((pokemon, index) => (
                                <li key={index}>
                                    <strong>{pokemon.name}:</strong> {pokemon.level}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};
