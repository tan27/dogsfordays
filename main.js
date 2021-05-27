async function start() {
    try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)

    } catch (e) {
        console.log("Error")
    }
}

start()

function createBreedList(breedListChosenName) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
    <option>Select a dog breed</option>
    ${Object.keys(breedListChosenName).map(function (breedChosen) {
        return `<option>${breedChosen}</option>`
    })}
    </select>
    `
}

async function loadByBreed(breednameChosen) {
    if (breednameChosen != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breednameChosen}/images`)
        const data = await response.json()
        createSlideshow(data.message)
    }

}

function createSlideshow(dogPics) {
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${dogPics[0]}')"></div>`
}

