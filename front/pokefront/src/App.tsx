import { Routes,Route } from 'react-router-dom';




import PokemonList from './Componentes/PokemonList';
import { GymList } from './Componentes/GymList';
import  {ObjetsList}  from './Componentes/ObjetsList';
import { RegionsList } from './Componentes/RegionsList';
import { TrainersList } from './Componentes/TrainersList';
import {Home} from './Componentes/Home';

function App() {

  return (
    <div className=" bg-gray-700 h-screen w-screen ">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/gym" element={<GymList />} />
        <Route path="/objets" element={<ObjetsList />} />
        <Route path="/regions" element={<RegionsList />} />
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="*" element={"not found"} />

      </Routes>
    </div>
  )
}

export default App
