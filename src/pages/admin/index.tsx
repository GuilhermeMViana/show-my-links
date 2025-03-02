import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Links } from "../../components/Links";
import { FiTrash } from "react-icons/fi";
import { firestore} from "../../services/firebaseConnection"
import { addDoc, collection } from "firebase/firestore"

export function Admin() {
    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [textColor, setTextColor] = useState("#ffffff")
    const [backgroundColor, setBackgroundColor] = useState("#000000")

    function handleRegister(e: FormEvent) {
        e.preventDefault()

        if (nameInput === "" || urlInput === "") {
            alert("Preencha todos os campos")
            return
        }

        addDoc(collection(firestore, "links"), {
            name: nameInput,
            url: urlInput,
            bg: backgroundColor,
            color: textColor,
            created: new Date()
        })
        .then( () => {
            setNameInput("")
            setUrlInput("")
            alert("Cadastrado com sucesso!")
        })
        .catch( (error) => {
            console.log("erro:", error)
        })

        setNameInput("")
        setUrlInput("")
    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form onSubmit={handleRegister} className="flex flex-col mt-10 mb-3 w-full max-w-xl">
                <label htmlFor="" className="text-stone-800 font-medium mt-2 mb-2">Título do link</label>
                <Input
                    placeholder="Título"
                    value={nameInput}
                    onChange={ (e) => setNameInput(e.target.value) }
                />

                <label htmlFor="" className="text-stone-800 font-medium mt-2 mb-2">Url do link</label>
                <Input
                    placeholder="Url"
                    value={urlInput}
                    onChange={ (e) => setUrlInput(e.target.value) }
                />

                <section className="flex flex-col items-center gap-5 my-5">
                    <div className="flex gap-25 text-2xl text-stone-800">
                        <label htmlFor="" className="text-stone-800 font-medium mt-2 mb-2">Cor da fonte</label>

                        <label htmlFor="" className="text-stone-800 font-medium mt-2 mb-2">Cor de fundo</label>
                    </div>
                    <div className="flex gap-50">
                        <input 
                            type="color" 
                            value={textColor}
                            onChange={ (e) => setTextColor(e.target.value) }
                        />

                        <input 
                            type="color" 
                            value={backgroundColor}
                            onChange={ (e) => setBackgroundColor(e.target.value) }
                        />
                    </div>
                </section>

                {nameInput != '' && (
                    <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                    <label htmlFor="" className="text-stone-800 font-medium mt-2 mb-2">Preview:</label>
                    <Links textStyle={ { backgroundColor: backgroundColor } } colorProps={ { color: textColor} } title={nameInput} url={urlInput}/>
                </div>
                )}
                
                <button type="submit" className="bg-sky-700 h-9 rounded-md text-stone-300 font-medium gap-3 flex justify-center items-center mb-7 cursor-pointer">
                    Cadastrar
                </button>
            </form>

            <h2 className="font-bold text-stone-300 mb-4 text-2xl">
                Meus links
            </h2>

            <div className="flex justify-between items-center w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none bg-teal-800">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
                </div>
                <div>
                    <button className="border border-dashed rounded py-1 px-2 bg-neutral-900">
                        <FiTrash size={20} color="#ffffff"/>    
                    </button>
                </div>
            </div>
        </div>
    )
}