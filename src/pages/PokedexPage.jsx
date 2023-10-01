import SelectType from "../components/PokedexPage/SelectType";
import PokeCard from "../components/PokedexPage/PokeCard";
import { useEffect, useRef, useState } from "react";
import pokemonLogo from "../assets/pokemon.png";
import "../components/styles/PokedexPage.css";
import pokeball from "../assets/pokeball.png";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");

  const [selectedType, setSelectedType] = useState("allPokemons");

  const trainer = useSelector((store) => store.trainer);

  const inputSeach = useRef();

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

  const [pokemons, getPokemons, getTypesPokemon] = useFetch(url);

  useEffect(() => {
    if (selectedType === "allPokemons") {
      getPokemons();
    } else {
      getTypesPokemon(selectedType);
    }
  }, [selectedType]);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputSeach.current.value.trim().toLowerCase());
  };

  console.log(inputValue);

  const pokeFiltered = pokemons?.results.filter((poke) =>
    poke.name.includes(inputValue)
  );

  return (
    <div className="pokedex__container">
      <div className="pokemon__logo">
        <img className="pokemon__image1" src={pokemonLogo} alt="Pokedex" />
        <img className="pokemon__image2" src={pokeball} alt="Pokedex" />
      </div>
      <div className="pokedex__box">
        <header className="pokedex__info">
          <p className="pokedex__p">
            <span>Welcome! </span>Trainer: <span>{trainer}</span>, find your
            favorite pokemon!
          </p>
          <form className="pokedex__form" onSubmit={handleSearch}>
            <input className="pokedex__input" ref={inputSeach} type="text" />
            <button className="pokedex__button">Search</button>
          </form>
        </header>
        <SelectType setSelectedType={setSelectedType} />
      </div>
      <div className="pokecard__container">
        {pokeFiltered?.map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
