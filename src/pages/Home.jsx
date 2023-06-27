import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'
import { Container, Grid } from '@mui/material'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons'


export const Home = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = () => {
    var endpoints = []
    for(var i = 1;i<=151; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    var response = axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setPokemon(res)).catch((err) => console.log(err))
    return response

    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=50').then((res) => setPokemon(res.data.results)).catch((err) => console.log(err))
  }

  const pokemonFilter = (name) => {
    var filteredPokemon = []
    if (name === ''){
      getPokemon()
    }
    for (var i in pokemon) {
      if(pokemon[i].data.name.includes(name)){
        filteredPokemon.push(pokemon[i])
      }
    }
    setPokemon(filteredPokemon)
  }

  return (
    <div>
        <Navbar pokemonFilter={pokemonFilter} />
        <Container maxWidth='false'>
          <Grid container spacing={3}>
            {pokemon.length === 0 ? <Skeletons /> : 
              pokemon.map((pokemon, i) => 
                <Grid item xs={12} sm={6} md={5} lg={2} key={i}>
                  <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                </Grid>
              )
            }
          </Grid>            
        </Container>
    </div>
  )
}
