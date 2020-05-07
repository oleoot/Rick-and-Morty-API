const api_url = 'https://rickandmortyapi.com/api/character/';
async function getCharacters() {
    const response = await fetch(api_url);
    const data = await response.json();
    const data_result = data.results
    data_result.forEach((character) => {
        const { name, species, image, status, location } = character;
        let wrapper = document.querySelector('#wrapper');
        let container = document.createElement('div');
        let nameElement = document.createElement('p');
        let speciesElement = document.createElement('p');
        let imgElement = document.createElement('img');
        let statusElement = document.createElement('p');
        let locationElement = document.createElement('p');
        nameElement.innerText = name;
        speciesElement.innerText = species;
        statusElement.innerText = status;
        locationElement.innerText = location.name
        imgElement.src = image;
        container.append(imgElement, nameElement, speciesElement, locationElement, statusElement)
        wrapper.append(container)
    });

}
getCharacters()
