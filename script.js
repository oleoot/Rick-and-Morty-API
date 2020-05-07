const api_url = 'https://rickandmortyapi.com/api/character/';
async function getCharacters() {
    const response = await fetch(api_url);
    const data = await response.json();
    const data_result = data.results
    data_result.forEach((character) => {
        const { name, species, image } = character;
        let wrapper = document.querySelector('#wrapper');
        let container = document.createElement('div');
        let nameElement = document.createElement('p');
        let speciesElement = document.createElement('p');
        let imgElement = document.createElement('img');
        nameElement.innerText = name;
        speciesElement.innerText = species;
        imgElement.src = image;
        container.append(imgElement, nameElement, speciesElement)
        wrapper.append(container)
    });

}
getCharacters()
