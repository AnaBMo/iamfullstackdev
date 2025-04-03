/*
input y botón
funcionalidad: al insertar la tarea en el input y darle al botón enviar 
se añadirá a nuestra BBDD y por tanto desde la ruta "/" podremos ver todos 
las tareas anteriores junto con las que añadamos desde React
*/
import './InputCreate.css';
import { useState } from "react";

const InputIncrease = () => {

    const [ title, setTitle ] = useState('');
 
    const handleSubmit = () => {
        event.preventDefault();
    }

    {/*    
        * Recuerda que lo que mandamos a BBDD desde POSTMAN es el { title }. El ID se crea solo.
        //! ¿payload es {title}?

        * Es un método POST al endpoint /createdel BACK. Revisa que es correcto para poder crear tu envío

        * Con el método fetch puedes añadir la url del end point y lo que queremos pasarle a esa URL.
    */}

    {/*  
       fetch(urlApi, {
            method: 'POST', // Método HTTP
            headers: {
            'Content-Type': 'application/json', // Indicamos que el contenido es JSON
            },
            body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
        }) 
    */}

    return(
        <>
            <h3>Formulario para crear tarea</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder="Introduce una nueva tarea"
                />
                <button className='btn' type="submit">Enviar</button>
            </form>
            
        </>
    )
};

export default InputIncrease;