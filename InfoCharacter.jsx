import React, { useState } from 'react';
import getData from "./fetchApi";

const ShowInfoCharacters = () => {
    const [charactersData, setCharactersData] = useState([]);

    const fetchData = async () => {
        const data = await getData();
        setCharactersData(data);
    };

    if(charactersData.length === 0) {
        fetchData();
    }

    const randomIndex = Math.floor(Math.random() * charactersData.length);
    const selectedCharacter = charactersData[randomIndex];

    return (
        <div className='font'>
            <h1>{selectedCharacter?.name}</h1>
            <p>Height: {selectedCharacter?.height}</p>
            <p>Birth Year: {selectedCharacter?.birth_year}</p>
            <p>Skin Color: {selectedCharacter?.skin_color}</p>
            <hr />
            <hr className='secondLine'/>
            <p>
                {selectedCharacter?.name} is a character from starwars and Star Wars is a beloved science fiction
                 franchise that has captured the hearts of fans worldwide..
            </p>
            
        </div>
    );
}

export default ShowInfoCharacters;


// const people = {
//     [
//         {
//           name: 'Luke Skywalker',
//           height: '172',
//           birth_year: '19BBY',
//           skin_color: 'fair'
//         },
//         {
//           name: 'C-3PO',
//           height: '167',
//           birth_year: '112BBY',
//           skin_color: 'gold'
//         },
//         {
//           name: 'R2-D2',
//           height: '96',
//           birth_year: '33BBY',
//           skin_color: 'white, blue'
//         },
//         {
//           name: 'Darth Vader',
//           height: '202',
//           birth_year: '41.9BBY',
//           skin_color: 'white'
//         },
//         {
//           name: 'Leia Organa',
//           height: '150',
//           birth_year: '19BBY',
//           skin_color: 'light'
//         },
//         {
//           name: 'Owen Lars',
//           height: '178',
//           birth_year: '52BBY',
//           skin_color: 'light'
//         },
//         {
//           name: 'Beru Whitesun lars',
//           height: '165',
//           birth_year: '47BBY',
//           skin_color: 'light'
//         },
//         {
//           name: 'R5-D4',
//           height: '97',
//           birth_year: 'unknown',
//           skin_color: 'white, red'
//         },
//         {
//           name: 'Biggs Darklighter',
//           height: '183',
//           birth_year: '24BBY',
//           skin_color: 'light'
//         },
//         {
//           name: 'Obi-Wan Kenobi',
//           height: '182',
//           birth_year: '57BBY',
//           skin_color: 'fair'
//         }
//       ]
// }