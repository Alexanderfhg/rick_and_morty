import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
    const { id } = useParams();
    const [Character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) => response.json())
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
        <div className={styles.div}>
            <div className={styles.container}>
                <div className={styles.dataContainer}>
                    <h1>Name: {Character.name}</h1>
                    <h1>Status: {Character.status}</h1>
                    <h1>Specie: {Character.species}</h1>
                    <h1>Origin: {Character.origin}</h1> 
                    <h1>Gender: {Character.gender}</h1>
                </div>
                <div className={styles.imgContainer}>
                    <img src={Character.image} alt={Character.name} />
                </div>
            </div>
        </div>
    )
}