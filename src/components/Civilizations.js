import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Civilizations = () => {
    const [civilization, setCivilization] = useState([]);

    useEffect(() => {
        document.title = 'Civilizations';
        getCivilizations().then();
    }, [])

    const getCivilizations = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        const dataJSON = await data.json();
        setCivilization(dataJSON.civilizations);
    }

    return (
        <div>
            <h4> Civilizations Page </h4>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Army</th>
                    <th>Expansion</th>
                </tr>
                </thead>
                <tbody>
                {
                    civilization.map((civ) =>
                        <tr key={civ.id}>
                            <td>
                                <Link to={`/civilizations/${civ.name}`}> {civ.name}</Link>
                            </td>
                            <td> {civ.army_type}</td>
                            <td> {civ.expansion}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Civilizations;
