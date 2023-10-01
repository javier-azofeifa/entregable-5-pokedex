import "../components/styles/PokedexIdPage.css";
import pokemonLogo from "../assets/pokemon.png";
import pokeball from "../assets/pokeball.png";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const PokedexIdPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [id]);

  console.log(pokemon);

  const typesPokemon1 = (types = []) => {
    const nameTypes = types.map((type) => type.type.name);

    if (nameTypes[0]) {
      return nameTypes[0];
    }
  };

  const typesPokemon2 = (types = []) => {
    const nameTypes = types.map((type) => type.type.name);

    if (nameTypes[1]) {
      return nameTypes[1];
    } else {
      return "No type";
    }
  };

  const getAbilitiesPokemon = (abilities = []) => {
    const nameAbilities = abilities.map((ability) => {
      return ability.ability.name;
    });

    if (!nameAbilities[1]) {
      nameAbilities[1] = "No ability";
    }

    return nameAbilities[1];
  };

  const percentPogresStat = (baseStat) => {
    const maxStat = 255;
    return (baseStat * 100) / maxStat;
  };

  const getMoves = (array = []) => {
    return array.slice(0, 25);
  };

  return (
    <main className="main">
      <div className="pokemon__logo">
        <img className="pokemon__image1" src={pokemonLogo} alt="Pokedex" />
        <img className="pokemon__image2" src={pokeball} alt="Pokedex" />
      </div>
      <div className="pokemon__container">
        <header className="pokemon__header">
          <div className="pokemon__img">
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
          <div className="pokemon__nick">
            <h1 className="pokemon__id"># {id}</h1>
            <h2 className="pokemon__name">{pokemon?.name}</h2>
          </div>
        </header>
        <section className="pokemon__info">
          <div className="pokemon__container__weight__height">
            <div className="pokemon__weight">
              <p>Weight</p>
              <h3>{pokemon?.weight}</h3>
            </div>
            <div className="pokemon__height">
              <p>Height</p>
              <h3>{pokemon?.height}</h3>
            </div>
          </div>
        </section>
        <hr className="pokemon__hr" />
        <section>
          <div className="pokemon__container__types__skills">
            <div>
              <h2 className="pokemon__type__p">Type</h2>
              <div className="pokemon__types__box">
                <div className="pokemon__type__one">
                  {typesPokemon1(pokemon?.types)}
                </div>
                <div className="pokemon__type__two">
                  {typesPokemon2(pokemon?.types)}
                </div>
              </div>
            </div>
            <div>
              <h2 className="pokemon__skills__p">Abilities</h2>
              <div className="pokemon__types__box">
                <div className="pokemon__skill__one">
                  {pokemon?.abilities[0].ability.name}
                </div>
                <div className="pokemon__skill__two">
                  {getAbilitiesPokemon(pokemon?.abilities)}
                </div>
              </div>
            </div>
          </div>
          <div className="pokemon__container__stats">
            <div className="pokemon__header__stats">
              <div className="pokemon__title__stats">
                <h2>Stats</h2>
              </div>
              <div className="pokemon__line__stats">
                <div className="pokemon__line__s"></div>
              </div>
              <div className="pokemon__img__stats">
                <img src="/img/pokeStats.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="pokemon__body__stats">
            {pokemon?.stats.map((stat) => (
              <div key={stat.stat.url} className="pokemon__stat__container">
                <div className="pokemon__stat__info">
                  <h4>{stat.stat.name}:</h4>
                  <p>{stat.base_stat}/255</p>
                </div>
                <div className="pokemon__stat__bar">
                  <div
                    className="pokemon__bar"
                    style={{ width: `${percentPogresStat(stat.base_stat)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="pokemon__container__movements">
            <div className="pokemon__container__stats">
              <div className="pokemon__header__stats">
                <div className="pokemon__title__stats">
                  <h2>Movements</h2>
                </div>
                <div className="pokemon__line__stats">
                  <div className="pokemon__line__s"></div>
                </div>
                <div className="pokemon__img_stats">
                  <img src="/img/pokeStats.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="pokemon__movements">
              {getMoves(pokemon?.moves).map((move) => (
                <div key={move.move.url} className="pokemon__moves">
                  {move.move.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PokedexIdPage;
