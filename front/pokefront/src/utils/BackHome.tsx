
import { NavLink } from 'react-router-dom'

export const BackHome = () => {
    return (
        <NavLink to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-5">
            Back to Home
        </NavLink>
    )
}
