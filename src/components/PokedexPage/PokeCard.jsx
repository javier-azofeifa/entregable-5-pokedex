import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import '../styles/PokeCard.css'

const PokeCard = ({ url }) => {
  const [pokemon, getPokemon] = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, []);

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };

  const firstType = pokemon?.types[0].type.name

  return (
    <article className={`pokecard ${firstType}-border`} onClick={handleNavigate}>
      <header className={`pokecard__header ${firstType}-gradient`}>
        <img
          className="pokecard__image"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt={pokemon?.name}
        />
      </header>
      <section className="pokecard__body">
        <h2 className={`pokecard__name ${firstType}-color`}>{pokemon?.name}</h2>
        <ul className="pokecard__types">
          {pokemon?.types.map((typeInfo) => (
            <li className="pokecard__typename" key={typeInfo.type.url}>
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
        <hr className="pokecard__hr" />
        <ul className="pokecard__stats">
          {pokemon?.stats.map((statInfo) => (
            <li className="pokecard__stat" key={statInfo.stat.url}>
              <h3 className="pokecard__stat__name">{statInfo.stat.name}</h3>
              <span className="pokecard__stat__value">
                {statInfo.base_stat}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;