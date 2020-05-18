import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('¿Quién es ese pokémon?');

search(id)
  .then((data) => {
    render(data);
  })
  .catch(() => {
    alert('No hay pokémon');
  });
