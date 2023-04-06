import styles from "./About.module.css";

export default function About(props) {
    // const pictureFreddyHerrera = "./FreddyHerrera.jpg";
    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h2>Acerca de mí</h2>
                <p>¡Hola! Soy Freddy Alexander Herrera Garcia, un amante de la programación, actualmente estudio en SoyHenry y curso una ingeniería de software en la universidad Politécnico Grancolombiano de Colombia. Me apasiona el desarrollo de aplicaciones y la resolución de problemas mediante el uso de tecnologías innovadoras. Desde que comencé mi formación en programación, he estado trabajando arduamente para mejorar mis habilidades y poner en práctica lo que aprendo en SoyHenry y en la universidad.</p>
                <p>Recientemente, he creado esta página web a modo de practicar todo lo que he estado aprendiendo en mi camino hacia convertirme en un desarrollador de software de alta calidad. En ella podrás ver el resultado de mi estudio FrontEnd . Si tienes alguna pregunta o si estás interesado en trabajar junto conmigo en algún proyecto, ¡no dudes en contactarme! Estoy emocionado por la oportunidad de seguir creciendo y aprendiendo en el campo de la programación.</p>
            </div>
        </div>
    )
}