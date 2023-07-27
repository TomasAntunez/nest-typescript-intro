import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeapiAdapterAxios, PokeapiFetchAdapter } from '../api/pokeapi.adapter';


export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${ this.id }.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // TODO: inject dependencies
    private readonly http: HttpAdapter

  ) {}


  scream() {
    console.log( `${ this.name.toUpperCase() }!!!` );
  }

  speak() {
    console.log( `${ this.name }, ${ this.name }` );
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

    const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log( data.moves );

    return data.moves;
  }

}


const pokeapiFetch = new PokeapiFetchAdapter();
const pokeapiAxios = new PokeapiAdapterAxios();

export const charmander = new Pokemon( 1, 'charmander', pokeapiFetch );

charmander.getMoves();
