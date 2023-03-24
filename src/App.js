import './App.css';
import { useState } from 'react';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters from './data.js';
import Nav from './components/Nav';



function App() {

   const [characters, setCharacters] = useState([])

   function onSearch(text) {
      for(let i = 1; i < 800; i++){
         fetch(`https://rickandmortyapi.com/api/character/${i}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert("No hay personahes con ese ID");
         }
      });
      }
   }

   function onClose(id) {
      setCharacters(characters.filter((character) => character.id !== id));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <div>
            <Cards characters={characters} onClose={onClose} />
         </div>
      </div>
   );
}
export default App;
