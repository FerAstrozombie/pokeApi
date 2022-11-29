import CardPokemon from "./CardPokemon"
import "./styles.css"


const Cards = ({results,}) => {

    return (
        
        <div className="container">
            {
                results.map( p =>(                        
                <CardPokemon key={p.name} url={p.url}/>                        
                ))
            }
        </div>

    )
}

export default Cards