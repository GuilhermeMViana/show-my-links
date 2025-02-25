import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormEvent, useState } from "react";

import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent){
        e.preventDefault();

        if ( email !== '' || password !== '') {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Login realizado com sucesso!")
                navigate("/admin", { replace: true })
            })
            .catch(() => {
                alert("Verifique seus dados")
            })
        }

    
        if ( email === '' || password === '')
            alert("Preencha todos os campos!")
    }

    return(
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-20 text-stone-700 mb-7 font-bold text-4xl md:text-5xl">Show my <span className="bg-gradient-to-r from-blue-700 to-violet-900 bg-clip-text text-transparent">Links</span></h1>
            </Link>

            <form onSubmit={handleSubmit} action="" className="w-full max-w-xl flex flex-col">   
            <Input 
                placeholder="Login" 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
                placeholder="Senha" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button className="h-9 bg-sky-600 rounded border-0 text-lg font-medium text-stone-800" type="submit">
                Acessar
            </button>
            </form>
        </div>
    )
}