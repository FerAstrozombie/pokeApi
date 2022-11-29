import { useState } from "react"
import Cards from "../cards/Cards";
import UseFetch from "../useEffect/UseFetch";
import "./styles.css"

const Pokemon = () => {

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    const estado = UseFetch(url);
    const { cargando, data} = estado;
    cargando? console.log("cargando") : console.log(data.results);
    

    return (
        
        <>
            {
                cargando
                ?
                <h1>Cargando...</h1>
                :
                <div className="padre">
                    <Cards results = {data.results}/>
                    <div className="botonera">
                        <button className="botones" onClick={() => setUrl(data.previous)}>Anterior</button>
                        <button className="botones" onClick={() => setUrl(data.next)}>Siguiente</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Pokemon