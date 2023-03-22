export default function SearchBar(props) {
   return (
      <div>
         <input type='search'/>
         <button onClick={() => props.onSearch('Id = 0')}>Agregar</button>
      </div>
   );
}
