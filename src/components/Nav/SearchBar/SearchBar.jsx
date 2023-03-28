import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [search, setSearch] = useState("");

   function handleChange(event) {
      setSearch(event.target.value)
   }

   return (
      <div className={styles.input_group}>
         <input
            type="text"
            onChange={handleChange}
            value={search}
            className={styles.input}
            id="Email"
            name="Email"
            placeholder="Ingrese el ID" />
         <input
            onClick={() => props.onSearch(search)}
            className={styles.button_submit}
            value="Agregar"
            type="submit" />
      </div>
   );
}
