
export const pokemonIds = [1, 2, 3, 4, 5];


interface Pokemon {
  id   : number;
  name : string;
  age? : number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  age: 23
};

export const charmander: Pokemon = {
  id: 0,
  name: 'Charmander'
}


export const pokemons: Pokemon[] = [];

pokemons.push( charmander, bulbasaur );


console.log(pokemons);
