import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import '../styles/PokedexPage.css'

const SelectType = ({ setSelectedType }) => {
  const url = "https://pokeapi.co/api/v2/type";

  const [types, getTypes] = useFetch(url);

  useEffect(() => {
    getTypes();
  }, []);

  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="select__container">
      <select onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>
        {types?.results.map((typeInfo) => (
          <option key={typeInfo.url} value={typeInfo.url}>
            {typeInfo.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectType;