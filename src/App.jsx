import React from 'react';
import useFetchApi from './hooks/useFetchApi';
import './App.css';



function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/3';
  const urlRick = 'https://rickandmortyapi.com/api/character/3';
  
  const { data: pokemon,  loading: loadingPokemon,  error: errorPokemon } = useFetchApi(urlPokemon);
  const { data: personajeRick, loading: loadingPersonajeRick, error: errorPersonajeRick } = useFetchApi(urlRick);
  
    return (
      <>
          <h1>Pokemon</h1>
          {loadingPokemon && <p>Cargando...</p>}
          {errorPokemon && <p>{error}</p>}
          {pokemon && (
              <div>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <p>Nombre: {pokemon.name}</p>
                  <p>Peso: {pokemon.weight}</p>
              </div>
          )}

          <h1>Personaje de Rick</h1>
            {loadingPersonajeRick && <p>Cargando...</p>}
            {errorPersonajeRick && <p>{error}</p>}
            {personajeRick && (
              <div>
                  <img src={personajeRick.image} alt={personajeRick.name} />
                  <p>Nombre: {personajeRick.name}</p>
                  <p>Especie: {personajeRick.species}</p>
              </div>
            )}
      </>
    );       
  };


export default App;
