import "./styles.css";
import tiposPokemon from "../../tiposdepokemon.png"
import charizard from "../../charizard.gif"
import pokedex from "../../pokedex.jpg"

const Inicio = () => {
    return (
        <div>
            <h2>Te contamos un poco de la historia de Pokemon</h2>
            <p>La palabra Pokémon es la contracción romanizada de la marca japonesa Pocket Monsters (ポケットモンスター Poketto Monsutā?, literalmente "monstruos de bolsillo"), como tales contracciones son muy comunes en Japón.
            Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas con un sistema de evolución lamarckiano. Los jugadores toman el papel Entrenadores Pokémon y tienen tres objetivos generales: completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon poderosos de aquellos que han atrapado para competir contra otros entrenadores. El objetivo final del juego es llegar a ganar la Liga Pokémon y convertirse en el campeón regional. La temática de coleccionar, entrenar y luchar están presentes en casi todas las versiones de la franquicia Pokémon, incluidos los videojuegos, las series de anime y manga, y el juego de cartas coleccionables Pokémon.
            </p>
            <div className="orden">
                <img className="charizard" src={charizard} alt="" />
            </div>

            <h4>Tipos de pokemon</h4>
            <p>Existen 18 tipos en los que se organiza a los pokémon. Los tipos acero y siniestro fueron agregados en el año 2000, en los juegos Gold, Silver y Crystal y el tipo hada fue agregado el 2013 en los juegos Pokémon X e Y. Los pokémon pueden aprender ataques distintos a los de su tipo. Por ejemplo, Kabutops (Agua/Roca) puede aprender el movimiento Pokémon Giga drenado que es de tipo planta.
            Cada pokémon tiene una cantidad determinada de movimientos o ataques que puede aprender. Estos se pueden clasificar por su tipo o elemento (por ejemplo, el ataque trueno es un ataque tipo eléctrico).
            Los pokémon también se ordenan y dividen de esta manera, dándole ventajas o desventajas contra otros. Por ejemplo: un pokémon tipo agua tiene más probabilidad de vencer a un pokémon tipo fuego, que uno tipo planta, ya que los ataques de tipo agua apagan el fuego, mientras que los ataques de tipo fuego queman las plantas. A las plantas, por su parte, ya que crecen con el agua, esta no les causa mucho daño. Esta secuencia, se compararía con el popular juego piedra, papel o tijera.</p>
            <div className="orden">
                <img className="tipos" src={tiposPokemon} alt="" />
            </div>

            <h4>Pokedex</h4>
            <p>El pokédex es un dispositivo electrónico que interviene en los videojuegos y la serie de anime. En los juegos, su función es registrar los datos de un pokémon. En el manga y el anime, el Pokédex es una enciclopedia electrónica, la cual proporciona al entrenador información sobre un pokémon que es desconocido con tan solo exponer el pokédex en frente del pokémon.
            En los videojuegos un entrenador recibe una pokédex en blanco al iniciar su recorrido. El objetivo es completar la información de todos los pokémon disponibles en la región en donde se encuentre. El entrenador recibirá el nombre y la imagen del pokémon que haya sido encontrado. En Pokémon Red y Blue, el pokédex registra la información de cada pokémon con tan solo verlo. La información más detallada de un pokémon se encuentra disponible después de que el entrenador haya capturado a un pokémon salvaje. Esta información incluye tipo, altura, peso, técnicas, y una descripción breve del pokémon.</p>
            <div className="orden">
                <img className="tipos" src={pokedex} alt="" />
            </div>
        </div>
    )
}

export default Inicio