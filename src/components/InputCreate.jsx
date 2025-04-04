import './InputCreate.css';
import { useState } from "react";


const InputCreate = () => {

    const [ title, setTitle ] = useState('');
    const [ response, setResponse ] = useState(null)
 
    const handleSubmit = async (event) => {
        console.log('URL desde .env:', import.meta.env.VITE_APP_API_URL);

        event.preventDefault();

        const urlApiCreate = import.meta.env.VITE_APP_API_URL+'create'; // endpoint POST
        const payload = {title}; // dato que se envía al back

        try{
            const response = await fetch(urlApiCreate, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // traducir dato payload de .js a json
            });

            if(response.ok) {
                const data = await response.json();
                console.log('datos que traemos con fetch: ', data);
                setResponse(`Título de la tarea: ${data.title}`);
                setTitle("");
            }else {
                throw new Error ('No se ha podido acceder a los datos')
            }
        }catch (error) {
            console.log('Error: ', error);
        }
    }

    return(
        <>
            <h3>Formulario para crear tarea</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder="Introduce una nueva tarea"
                />
                <button className='btn' type="submit">Enviar</button>
            </form>
            <h2>{response}</h2>
            
        </>
    )
};

export default InputCreate;

//! Repasar la forma mucho más sencilla de hacerlo con axios.