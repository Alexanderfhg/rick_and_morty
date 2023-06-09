import { useNavigate } from "react-router-dom";
import styles from './Card.module.css'

export default function Card(props) {
   const navigate = useNavigate();

   const goDetail = () => navigate(`/detail/${props.id}`)

   return (
      <div className={styles.card}>
            <button className={styles.closeButton} onClick={props.onClose}>X</button>
         <button onClick={goDetail} className={styles.buttonContainer} >
            <div className={styles.nameContainer}>
               <h2 id='name'>{props.name}</h2>
            </div>
            <img className={styles.cardImg} src={props.image} alt={props.name} />
         </button>
      </div>
   );
}
