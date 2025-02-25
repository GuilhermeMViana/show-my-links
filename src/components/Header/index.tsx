import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

import { auth } from "../../services/firebaseConnection";
import { signOut } from 'firebase/auth'


export function Header() {

    async function handleLogout() {
        await signOut(auth)
    }

    return(
        <header className="w-full text-3xl max-w-2xl mt-4">
            <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md p-3">
                <div className="flex gap-3 font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/admin/social">Redes Sociais</Link>
                </div>
                <button onClick={handleLogout}>
                    <Link to="/"><CiLogout size={36} color="#db2629"/></Link>
                </button>
            </nav>
        </header>
    )
}