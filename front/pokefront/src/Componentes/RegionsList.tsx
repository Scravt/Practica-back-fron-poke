import {getRequestRegions} from '../Services/Serviceregions';
import { useEffect, useState } from 'react';
import { Region } from '../types/regions';
import { BackHome } from '../utils/BackHome';

export const RegionsList: React.FC = () => {
    const [regions, setRegions] = useState<Region[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await getRequestRegions('regions');
                setRegions(response.data.regions);
                console.log(response.data.regions);
                setLoading(false);
            } catch (err) {
                setError('Error fetching regions');
                setLoading(false);
            }
        };

        fetchRegions();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='w-screen text-white flex flex-col items-center'>
            <ul className='w-1/4 pt-10 '>
                {regions?.map((region: Region) => (
                    <li key={region.region_id} className='pb-5' >
                        <h2 className='text-3xl'>{region.name}</h2>
                        <p>{region.description}</p>
                    </li>
                ))}
            </ul>
            <BackHome />
        </div>
    );
};