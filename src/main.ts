import './style.css';
// import { name, age } from './bases/01-types';
// import { pokemons } from './bases/02-objects';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="title">Hello ${ charmander.name }!</h1>
  </div>
`;
