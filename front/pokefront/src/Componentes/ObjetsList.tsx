import { useState, useEffect } from "react";
import { Objet } from "../types/objet";
import { getRequestObjet } from "../Services/ServiceObjet";
import { BackHome } from "../utils/BackHome";


export const ObjetsList = () => {
    const [objets, setObjets] = useState<Objet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchObjets = async () => {
            try {
                const response = await getRequestObjet("objetos");
                console.log(response.data.objets);
                setObjets(response.data.objets);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchObjets();
    }, []);



  return (
    <div className="w-screen text-white flex flex-col h-80 items-center p-40">
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur lors du chargement des objets</p>}
      <ul className="w-1/4">
        {objets?.map((objet) => (
          <li key={objet.item_id}>
            <h3 className="text-3xl pb-1">{objet.name}</h3>
            <p className="pl-2">Prix:  {objet.price} </p>
            <p className="pl-2 pb-3">Effect: {objet.effect}</p>
          </li>
        ))}
      </ul>
      <BackHome/>
    </div>
  )
}
