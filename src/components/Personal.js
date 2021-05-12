import React, {useEffect} from 'react';

const Personal = () => {

    /*
     * useEffect es un hook de React que permite le permite a un componente hacer algo una
     * vez se ha renderizado, es decir, que tras pintarse el componente, se ejecuta una acción
     * Es fundamental para consumir datos de un API. En este ejemplo: https://jsonplaceholder.typicode.com/users
     */

    useEffect(() => {
        document.title = 'Personal Title'
    })

    return (
        <div>
            <h4> Personal Page </h4>
        </div>
    );
};

export default Personal;
