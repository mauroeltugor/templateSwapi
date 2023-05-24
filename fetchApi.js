const getData = async() => {
    const url = 'https://swapi.dev/api/people/';
    const getCharacters = await fetch(url);
    const infoCharacters = await getCharacters.json();
    const characters = infoCharacters.results;
    const charactersData = characters.map((character) => ({
        name: character.name,
        height: character.height,
        birth_year: character.birth_year,
        skin_color: character.skin_color
    }));
    return charactersData; 
}

export default getData