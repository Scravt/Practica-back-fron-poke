import { NavLink } from "react-router-dom"

export const Home = () => {
    return (
        <div className="bg-gray-700 text-white flex flex-col h-80 items-center">
            <h1 className="text-4xl p-4 mt-2" >
                Welcome to the Pokemon World !!!
            </h1>
            <section className="gap-7 h-72 w-1/3 flex flex-col items-center">
                <h2 className="self-center">Do you want to consult?</h2>
                <article className="gap-5 w-full flex flex-wrap justify-start items-start">
                    <NavLink to="/pokemon" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Pokemons
                    </NavLink>
                    <NavLink to="/gym" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Gyms
                    </NavLink>
                    <NavLink to="/objets" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Objets
                    </NavLink>
                    <NavLink to="/regions" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Regions
                    </NavLink>
                    <NavLink to="/trainers" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Trainers
                    </NavLink>
                </article>
            </section>

        </div>
    )
}
