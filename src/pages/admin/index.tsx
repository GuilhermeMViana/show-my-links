import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Links } from "../../components/Links";
import { FiTrash } from "react-icons/fi";

export function Admin() {
    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [textColor, setTextColor] = useState("#ffffff")
    const [backgroundColor, setBackgroundColor] = useState("#000000")

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form action="" className="flex flex-col mt-10 mb-3 w-full max-w-xl">
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
                
                <button type="submit" className="bg-sky-700 h-9 rounded-md text-stone-300 font-medium gap-3 flex justify-center items-center mb-7">
                    Cadastrar
                </button>
            </form>

            <h2 className="font-bold text-stone-300 mb-4 text-2xl">
                Meus links
            </h2>

            <div className="flex justify-between items-center w-11/12 max-w-xl rounded py-3 px-2 mb-2">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, voluptas!</p>
                </div>
                <div>
                    <button className="border- border-dashed py-1 px-2">
                        <FiTrash size={24} color="#ffffff"/>    
                    </button>
                </div>
            </div>
        </div>
    )
}