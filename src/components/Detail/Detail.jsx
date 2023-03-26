import styles from "./Detail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(props) {
    const { id } = useParams();
    const [Character, setCharacter] = useState({});
    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/home");
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response)=> response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("There aren't characters with this ID");
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <button onClick={backToHome}>Back</button>
            <h1>{Character.name}</h1>
            <h1>{Character.status}</h1>
            <h1>{Character.specie}</h1>
            <h1>{Character.gender}</h1>
            <img src={Character.image} alt={Character.name} />
        </div>
    )
}