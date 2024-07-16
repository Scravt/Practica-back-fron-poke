import { useEffect, useState } from 'react';
import { getRequestGym } from '../Services/ServiceGym';
import { Gym } from '../types/gym';
import { BackHome } from '../utils/BackHome';

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
        <div className='w-screen text-white flex flex-col items-center'>
            <h1 className='text3x1 p-20'> Gym Pokemons!!!</h1>
            <ul className='flex flex-wrap gap-4'>
                {gyms?.map((gym: Gym) => (
                     <li key={gym.gym_id} className='border border-black rounded-2xl p-3 flex-1 min-w-[200px] max-w-[300px]'>
                        <h2 className='text-2xl'>{gym.name}</h2>
                        <p className='pl-2'><strong>Location:</strong> {gym.address.street} {gym.address.number}</p>
                        <p className='pl-2'><strong>Leader:</strong> {gym.leader}</p>
                        <h3 className='pt-2'>Pokemons:</h3>
                        <ul >
                            {gym.pokemon.map((pokemon, index) => (
                                <li key={index}>
                                    <strong className='pl-2'>{pokemon.name}:</strong> {pokemon.level}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <BackHome />

        </div>
    );
};
