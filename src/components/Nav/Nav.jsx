import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav(props) {

    const navigate = useNavigate();

    const goHome = () => navigate('/home');
    const goAbout = () => navigate('/about');

    return (
        <div className={styles.container}>
            <div className={styles.homeButtonContainer}>
                <button className={styles.butImg} onClick={goHome}>
                    <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="Welcome" />
                </button>
            </div>
            <div className={styles.searchBarContainer}>
                <button onClick={props.randomChar} className={styles.button}>Personaje Aleatorio</button>
                <SearchBar onSearch={props.onSearch} />
            </div>
            <div className={styles.otherButtonsContainer}>
                <button onClick={goAbout} className={styles.button}>About</button>
                <button onClick={props.logOut} className={styles.button}>Log out</button>
            </div>
        </div>
    )
}