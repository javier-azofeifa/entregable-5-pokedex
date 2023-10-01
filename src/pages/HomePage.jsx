import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import trainer from "../assets/trainer.png";
import pokemon from "../assets/pokemon.png";
import "../components/styles/HomePage.css";
import { useRef } from "react";

const HomePage = () => {
  /* const trainer = useSelector(store => store.trainer)

  console.log(trainer); */

  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleTrainer = (e) => {
    e.preventDefault();
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div className="trainer__container">
      <div className="trainer__logo">
        <img className="trainer__image1" src={pokemon} alt="Pokedex" />
        <img className="trainer__image2" src={pokeball} alt="Pokedex" />
      </div>
      <div className="trainer__info">
        <img className="trainer__image3" src={trainer} alt="Trainer" />
        <div className="trainer__box">
          <h2 className="trainer__h2">Hi Trainer!</h2>
          <p className="trainer__p">To start, please, enter your trainer nickname</p>
          <form className="trainer__form" onSubmit={handleTrainer}>
            <input className="trainer__input" ref={inputTrainer} type="text" />
            <button className="trainer__button">Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;