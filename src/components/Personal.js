import React, {Fragment, useEffect, useState} from 'react';

const Personal = () => {

    const [personal, setPersonal] = useState([]);

    /* Use Effect
     * useEffect es un hook de React que permite le permite a un componente hacer algo una
     * vez se ha renderizado, es decir, que tras pintarse el componente, se ejecuta una acción
     * Es fundamental para consumir datos de un API. En este ejemplo: https://jsonplaceholder.typicode.com/users
     */

    useEffect(() => {
        document.title = 'Personal Title';
        getData().then()
    }, []) // Con [] solo lo ejecuta una vez

    /* Esta es la función que obtiene los datos del API.
     * Son siempre funciones asíncronas (async y await)
     * Para recoger los datos --> fetch
     */
    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        setPersonal(users);
    }

    return (
        <Fragment>
            <h4> Personal Page </h4>
            {
                personal.map((usr) => <li key={usr.id}>{usr.name} - {usr.email} - {usr.phone}</li>)
            }
        </Fragment>
    );
};

export default Personal;
