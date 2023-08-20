const characterName = document.getElementById('characterName');
const btn = document.getElementById('btn');
const content = document.getElementById('content');
const img = document.getElementById('img');

const fetchApi = async (value) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
    const data = await response.json();
    return data.results[0];
}

btn.addEventListener('click', async (Event) => {
    Event.preventDefault();
    const characterNameValue = characterName.value;
    const result = await fetchApi(characterNameValue);

    if (result) {
        content.textContent = `Name: ${result.name}\nStatus: ${result.status}\nSpecies: ${result.species}\nGender: ${result.gender}`;
        img.src = result.image;
    } else {
        content.textContent = "Not found.";
        img.src = "";
    }
});