import { useEffect, useState } from 'react';
import { Trainer } from '../types/trainers';
import { getRequestTrainers } from '../Services/ServiceTrainers';

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
    <div>
      <h1>Trainers</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trainers?.map((trainer: Trainer) => (
          <li key={trainer.trainer_id}>
            <h2>{trainer.name}</h2>
            <p>{trainer.age}</p>
            <p>{trainer.address.street}</p>
            <p>{trainer.address.number}</p>
            <ul>
              {trainer.pokemon.map((poke) => (
                <li key={poke.name}>
                  <h3>{poke.name}</h3>
                  <p>{poke.level}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
