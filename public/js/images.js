
// Insert images
function showPictures(type){
    fetch("/data/pictures.json")
    .then((response) => response.json())
    .then((pictures) => {
        pictures.forEach((picture) => {
            // "filter" the images.
            if(picture.type == type){
                image = GetImage(picture, pictures.indexOf(picture))
                document.querySelectorAll("section")[1].querySelector("div").appendChild(image)
            }
        })
    }) 
}

function GetImage(obj, index) {
    // Create Images
    const box = document.createElement("div")
    const link = document.createElement("a")
    const image = document.createElement("img")
    const weightlessUrl = obj.compressed
    box.setAttribute("class", "box col-12 col-md-4 col-lg-3")
    image.setAttribute("src", weightlessUrl)
    link.setAttribute("href", obj.url)
    link.appendChild(image)
    box.appendChild(link)

    // Information Card
    const infos = document.createElement("div")
    infos.setAttribute("class", "infos")
    infos.setAttribute("id", `${index}ID`)
    const name = document.createElement("h1")
    const author = document.createElement("p")
    const year = document.createElement("p")
    const tags = document.createElement("p")
    const license = document.createElement("p")
    name.innerHTML = `${obj.name}`
    author.innerHTML = `<b>Author:</b> ${obj.author}`
    year.innerHTML = `<b>Year:</b> ${obj.year}<br><br>`
    tags.innerHTML = `<b>Tags:</b> <i>${obj.tags}.</i>`
    license.innerHTML = `<b>License:</b> ${obj.license}`
    infos.appendChild(name)
    infos.appendChild(author)
    infos.appendChild(year)
    infos.appendChild(tags)
    infos.appendChild(license)
    box.appendChild(infos)
    // Show and hide
    box.setAttribute("onmouseenter", `showInformations("${index}ID")`)
    box.setAttribute("onmouseleave", `hideInformations("${index}ID")`)
    
    return box;
}

// Show info card
function showInformations(infos) {
    document.getElementById(infos).style.display = 'block'
}
// Hide info card
function hideInformations(infos) {
    document.getElementById(infos).style.display = 'none'
}