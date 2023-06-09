import React, { useState } from "react";
import styles from './Form.module.css'
import validate from './validation.js';

export default function Form(props) {

    const [errors, setErrors] = useState({})

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value });
        setErrors(validate({ ...data, [event.target.name]: event.target.value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.login(data);

    }

    return (
        <div>
            <div className={styles.login_box}>
                <img className={styles.img} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="Welcome" />
                <h1 className={styles.h1}>Login to your account</h1>
                <form className={styles.form}>
                    <div className={styles.user_box}>
                        <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            className={styles.input}
                            value={data.email} />
                        <label className={styles.label}>Email</label>
                    </div>
                    <p className={styles.errMail}>{errors.mail && errors.mail}</p>

                    <div className={styles.user_box}>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            className={styles.input}
                            value={data.password} />
                        <label className={styles.label}>Password</label>
                        <p className={styles.errPass}>{errors.password && errors.password}</p>
                    </div>
                    <center>
                        <button type="submit" className={styles.a} onClick={handleSubmit}>
                            Log in
                            <span className={styles.span}></span>
                        </button>
                    </center>
                </form>
            </div>
        </div>
    )
}