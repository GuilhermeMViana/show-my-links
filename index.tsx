import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Links } from "../../components/Links";
import { FiTrash } from "react-icons/fi";
import { firestore} from "../../services/firebaseConnection"
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore"

interface snapshotProps {
    id: string,
    name: string,
    url: string,
    bg: string,
    color: string
}

export function Admin() {
    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [textColor, setTextColor] = useState("#ffffff")
    const [backgroundColor, setBackgroundColor] = useState("#000000")

    const [links, setLinks] = useState<snapshotProps[]>([])

    useEffect(() => {
        const linksRef = collection(firestore, "links")
        const queryRef = query(linksRef, orderBy("created", "asc"))
        
        const unsub = onSnapshot(queryRef, (snapshot) => {
            let list = [] as snapshotProps[]

            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color
                })
            })

            setLinks(list)
        })

        return ( () => {
            unsub();
        })
    }, [])

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

    }

    // function handleDelete(id) {
    //     e.preventDefault()

    //     deleteDoc()
    // }

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
                    <Links textStyle={textColor} bgColor={backgroundColor} title={nameInput} url={urlInput}/>
                </div>
                )}
                
                <button type="submit" className="bg-sky-700 h-9 rounded-md text-stone-300 font-medium gap-3 flex justify-center items-center mb-7 cursor-pointer">
                    Cadastrar
                </button>
            </form>

            <h2 className="font-bold text-stone-300 mb-4 text-2xl">
                Meus links
            </h2>

           {links.map((item) => (
             <div key={item.id}>
                <Links title={item.name} url={item.url} bgColor={item.bg} textStyle={item.color} deleteIcon/>
             </div>
           ))}
        </div>
    )
}