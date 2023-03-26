import './App.css';
import { useState } from 'react';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards';
// import SearchBar from './components/SearchBar.jsx';
// import characters from './data.js';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';



function App() {

   const [characters, setCharacters] = useState([])

   function onSearch(text) {
         fetch(`https://rickandmortyapi.com/api/character/${text}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert("There are no characters with this ID");
         }
      });
   }

   function onClose(id) {
      setCharacters(characters.filter((character) => character.id !== id));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}
export default App;