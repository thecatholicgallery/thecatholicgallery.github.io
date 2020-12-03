// Main Function: Will read json file and call the GetImage function.
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
showPictures = (type) => {
	// Control the ID's that will be displayed in that page.
	const lowerID = page * imagesPerPage - imagesPerPage
	const higherID = lowerID + imagesPerPage
	// Getting images by the JSON file
	fetch('/data/' + type + '.json')
		.then((response) => response.json())
		.then((pictures) => {
			var displayImages = 0
			pictures.forEach((picture) => {
				displayImages++
				if (picture.id > lowerID && picture.id <= higherID) {
					image = GetImage(picture, pictures.indexOf(picture))
					document
						.querySelectorAll('section')[1]
						.querySelector('div')
						.appendChild(image)
				}
			})
			lastPage = displayImages / imagesPerPage
			if (!Number.isInteger(lastPage)) lastPage = Math.floor(lastPage) + 1
			if (!(page == lastPage)) createButton('next', -1)
			if (page > 1) createButton('previous', 1)
		})
}
// Create images by the ID
GetImage = (obj, index) => {
	// Create Images
	const box = document.createElement('div')
	const link = document.createElement('a')
	const image = document.createElement('img')
	const weightlessUrl = obj.compressed
	box.setAttribute('class', 'box col-12 col-md-4 col-lg-3')
	image.setAttribute('src', weightlessUrl)
	link.setAttribute('href', obj.url)
	link.appendChild(image)
	box.appendChild(link)

	// Information Card
	const infos = document.createElement('div')
	infos.setAttribute('class', 'infos')
	infos.setAttribute('id', `${index}ID`)
	const name = document.createElement('h1')
	const author = document.createElement('p')
	const year = document.createElement('p')
	const tags = document.createElement('p')
	const license = document.createElement('p')
	name.innerHTML = `${obj.name}`
	author.innerHTML = `<b>Author:</b> ${obj.author}`
	year.innerHTML = `<b>Year:</b> ${obj.year}`
	tags.innerHTML = `<b>Tags:</b> <i>${obj.tags}.</i>`
	license.innerHTML = `<b>License:</b> ${obj.license}`
	infos.appendChild(name)
	infos.appendChild(author)
	infos.appendChild(year)
	/* REMOVED FOR BETTER DISPLAY
  infos.appendChild(tags) */
	infos.appendChild(license)
	box.appendChild(infos)
	// Show and hide
	box.setAttribute('onmouseenter', `displayInfo('${index}ID', 'block')`)
	box.setAttribute('onmouseleave', `displayInfo('${index}ID', 'none')`)

	return box
}

// SHOW or HIDE info card on image hover
displayInfo = (infos, status) => {
	document.getElementById(infos).style.display = status
}

// Create Previous/Next buttons on page
createButton = (type, x) => {
	// Create the element and append to the specific DIV
	const createButton = document.createElement('button')
	createButton.innerHTML = `${type}`
	createButton.setAttribute('class', 'btn btn-warning bg-yellow')
	createButton.setAttribute('type', 'submit')
	createButton.setAttribute('form', type + '-page')
	const divButton = document.getElementById(type + '-button')
	divButton.appendChild(createButton)

	/* Set the value of the button
	x = 1, page increase 1;
	x = -1, page decrease 1;    */
	const Button = document.getElementById(type + '-page-input')
	Button.setAttribute('value', parseInt(page) - x * 1)
}

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>> JS CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
// CONTROL HOW MANY IMAGES ARE DISPLAYED BY PAGE
const imagesPerPage = 8

// CONTROL PAGE BY URL PARAMS
const getPageNumber = window.location.search
const urlParams = new URLSearchParams(getPageNumber)
var page = urlParams.get('page')
if (!page) page = 1 // if there is not param in URL

// CREATE PREVIOUS/NEXT BUTTONS
//createButton('next', -1)
//if (page > 1) createButton('previous', 1)
