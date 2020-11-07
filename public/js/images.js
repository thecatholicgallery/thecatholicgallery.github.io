const totalImages = 4;
const actualImage = 0;


function showPictures(){
    fetch('./data/pictures.json')
    .then((response) => response.json())
    .then((pictures) => {
        pictures.forEach((picture) => {
            image = GetImage(picture, pictures.indexOf(picture))
            document.querySelectorAll("section")[1].querySelector("div").appendChild(image);
        })
    }) 
}

function GetImage(obj, index) {
    const box = document.createElement("div")
    box.setAttribute("class", "box col-12 col-md-4 col-lg-3")
    const image = document.createElement("img")
    const url = obj.url
    image.setAttribute("src", url)
    box.appendChild(image)


    const infos = document.createElement("div")
    infos.setAttribute("class", "infos")
    infos.setAttribute("id", `${index}ID`)
    const name = document.createElement("h1")
    const author = document.createElement("p")
    const year = document.createElement("p")
    const tags = document.createElement("p")
    const license = document.createElement("p")
    name.innerHTML = `${obj.name}`
    author.innerHTML = `Author: ${obj.author}`
    year.innerHTML = `Year: ${obj.year}<br><br>`
    tags.innerHTML = `Tags: <em>${obj.tags}.</em>`
    license.innerHTML = `License: ${obj.license}`
    infos.appendChild(name)
    infos.appendChild(author)
    infos.appendChild(year)
    infos.appendChild(tags)
    infos.appendChild(license)
    box.appendChild(infos)

    box.setAttribute("onmouseenter", `showInformations("${index}ID")`)
    box.setAttribute("onmouseleave", `hideInformations("${index}ID")`)
    
    return box;
}

function showInformations(infos) {
    document.getElementById(infos).style.display = 'block';
}
function hideInformations(infos) {
    document.getElementById(infos).style.display = 'none';
}