import { Link } from "react-router-dom";
import Detail from "../../Detail/Detail";

export default function Card(props) {
   return (
      <div className="card">
         <button className="button" onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2 id='name'>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img className="cardImg" src={props.image} alt={props.name} />
      </div>
   );
}
