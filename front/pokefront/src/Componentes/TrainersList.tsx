import { useEffect, useState } from 'react';
import { Trainer } from '../types/trainers';
import { getRequestTrainers } from '../Services/ServiceTrainers';
import { BackHome } from '../utils/BackHome';

export const TrainersList = () => {
    const [trainers, setTrainers] = useState<Trainer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await getRequestTrainers('trainers');
                setTrainers(response.data.trainers);
                console.log(response.data.trainers);
                setLoading(false);
            } catch (err) {
                setError('Error fetching trainers');
                setLoading(false);
            }
        };

        fetchTrainers();
    }, []);

  return (
    <div className='w-screen text-white flex flex-col items-center'>
      <h1 className='text-3x1 pb-4 pt-5'>Trainers</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul className='flex gap-5'>
        {trainers?.map((trainer: Trainer) => (
          <li key={trainer.trainer_id} className='min-w-[200px] max-w[400px] border border-solid border-black rounded-2xl p-3 '>
            <h2 className='text-center'>{trainer.name}</h2>
            <p className='pb-2'>Age: {trainer.age}</p>
            <p className='pb-2'>Street: {trainer.address.street}</p>
            <p className='pb-2'>Number: {trainer.address.number}</p>
            <h2>Pokemons:</h2>
            <ul>
              {trainer.pokemon.map((poke) => (
                <li key={poke.name} className='pl-4'>
                  <h3> Nombre:{poke.name}</h3>
                  <p>Level:{poke.level}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <BackHome />
    </div>
  )
}
