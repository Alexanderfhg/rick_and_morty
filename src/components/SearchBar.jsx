import { useState } from "react";

export default function SearchBar(props) {
   const [search, setSearch] = useState(""); 
   
   function handleChange (event) {
      console.log(event.target.value)
      setSearch(event.target.value)
   }

   return (
      <div className="input-group">
         <input type="text" onChange={handleChange} value={search} className="input" id="Email" name="Email" placeholder="Ingrese el ID" />
         <input onClick={() => props.onSearch(search)} className="button--submit" value="Agregar" type="submit"/>
      </div>
   );
}
