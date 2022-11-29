import UseFetch from "../useEffect/UseFetch"
import "./styles.css"

const CardPokemon = ({url}) => {

    const estado = UseFetch(url);
    const { cargando, data} = estado;

    return (
        <>
            {
                cargando ?
                <h2> Cargando...</h2>
                :
                <div className="cardsHeader">
                    <h5 className="cardTitle">{data.id}</h5>
                    <img className="img" src={data.sprites.other.dream_world.front_default} alt={data.name} />
                    <p className="cardText">{data.name}</p>
                </div>
            }
        </>
    )
}

export default CardPokemon