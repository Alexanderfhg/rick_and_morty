import './App.css';
import { useState, useEffect } from 'react';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form'

function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const EMAIL = "0freddyherrera0@gmail.com";
   const PASSWORD = "asdf321";

   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      } else {
         window.alert("Usuario y/o constraseña incorrectos")
      }
   }

   function logOut() {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   //  Hay 826 personajes en total
   function onSearch(id) {
      let flag = true;
      characters.map(character => {
         if(character.id == id){
            flag = false;
         }
      })

      if(flag === true){
         fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert("No hay carácteres con ese ID");
            }
         });
      } else {
         window.alert("Esta carta ya se encuentra en tu colección, ¡sigue buscando nuevas!")
      }
      

   }

   function onClose(id) {
      setCharacters(characters.filter((character) => character.id !== id));
   }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav logOut={logOut} onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}
export default App;