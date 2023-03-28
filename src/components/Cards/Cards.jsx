import Card from './Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {

   const { characters, onClose } = props;

   return (
      <div className={styles.cardContainer}>
         <div className={styles.cards}>
            {characters.map((element) => (
               <Card
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={() => onClose(element.id)}
                  key={element.id}
               />
            ))}
         </div>
      </div>);
}
