import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Social } from "../../components/social"
export function Home() {
    return(
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-stone-700 mt-20">Guilherme Viana</h1>
            <span className="md:text-3xl text-2xl text-stone-800 mb-5 mt-10">Me siga nas redes sociais 👇</span>
            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-sky-700 mb-4 w-full mt-6 py-2 rounded-lg select-none transition:transform duration-300 hover:scale-105 cursor-pointer">
                    <a href="">
                        <p className="text-base md:text-lg">
                            LinkedIn
                        </p>
                    </a>
                </section>

                <footer className="flex justify-center gap-3 my-4">
                    <Social url="https://www.facebook.com/people/Guilherme-Muniz-Viana/pfbid02MV4nKAFYfqZJdpPU4bc4ycxMYkS2JFBLfc2nVbobFmX7dMY3sJjtizeVQfk8kmHZl/">
                        <FaFacebook size={35}/>
                    </Social>
                    <Social url="https://br.linkedin.com/in/guilherme-viana-7b7914200">
                        <FaLinkedin size={35}/>
                    </Social>
                    <Social url="https://www.instagram.com/gmviana1?igsh=MWszOGY5eHczcTAzbA==">
                        <FaInstagram size={35}/>
                    </Social>
                </footer>
            </main>
        </div>
    )
}