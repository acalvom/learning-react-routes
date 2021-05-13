import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const CivilizationDetails = () => {

    const [detail, setDetail] = useState({});
    const {name} = useParams();

    useEffect(() => {
        document.title = 'Civilization Details';
        const getDetails = async () => {
            const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/' + name);
            const dataJSON = await data.json();
            setDetail(dataJSON);
        }
        getDetails();
    }, [name]); // Para indicar que name es el parámetro al que hacer seguimiento


    return (
        <div>
            <h4> Civilization Details </h4>
            <hr/>
            <li>ID: {detail.id}</li>
            <li>Name: {detail.name}</li>
            <li>Expansion: {detail.expansion}</li>
            <li>Army Type: {detail.army_type}</li>
            <li>Team Bonus: {detail.team_bonus}</li>
        </div>
    )
}

export default CivilizationDetails
