# The Catholic Gallery

This repository is dedicated to help Catholics and not Catholics _(well-intentined)_ to find good images for any purpose.
The actual idea is to congregate Sacred Art images, photos of catholic places and the community art.

### Access the site by [clicking here](https://thecatholicgallery.github.io).

# Contribute

You can contribute many ways to this project. If you want to contribute by submiting an image, go to [submit a image](#submit-an-image).

For design or structure changes, It would be a good idea open an Issue first, to discuss the idea and make sure if it follows the interest of the project.

## Submit an image

There are two ways to submit a new image to the project:

**(1)** Send and email to _gustavobecelli@gmail.com_ containing these infos:

required:

- The image or a link to it;
- Type of content - artwork, photography or yours creation-;
- License (Public Domain, Creative Commons, ...)

optional:

- Publishing year;
- Author name;
- Suggested tags;

**(2)** Create a Pull Request fulfilling **ALL** the requirements mentioned above, on the _/data/pictures.json_ file.

_**For this option, you will have to add an compressed image, with the maximium of 450 pixels on the largest dimension of it.**_

### Important:

The compressed image should be performing these requirements:

- 450 pixels on height if it is a portrait image;
- 450 pixels on width if it is a landscape image;
- The another measure should keep the picture
  proportion.
- WEBP format with 45% - 75% of quality.

Example of how to fulfill the json file:

```json
    {
        "id": "123",
        "compressed": "/public/img/photography/compressed/picture.webp",
        "url": "https://site.com/picture.jpg",
        "name": "The Rosary Meditation",
        "author": "Gustavo Becelli",
        "year": "1674",
        "tags": ["Rosary", "Mysteries"],
        "license": "Public Domain"
    },
```

Explaining the fields:

| field      | description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| type       | artwork, photography or community                                                      |
| compressed | the compressed image should be placed in the json used bin                             |
| url        | The high resolution photo url ![#FFD900](https://placehold.it/15/FFD900/000000?text=+) |
| name       | The art name (artworks) or a tiny description (if isn't named)                         |
| author     | Author name                                                                            |
| year       | First publication date                                                                 |
| tags       | Maximum of 5 tags                                                                      |
| license    | License of the content. Make a good search about it if it's not yours                  |

![FFD900](https://placehold.it/15/FFD900/000000?text=+) _IMPORTANT: Add an external link to the image. Only add to the /public/img/**category/original/** if the content is not located on the internet._

# Considerations

Feel free to contribute if you are or aren't a Catholic. The project is open and made to help everyone.

**Do you detain some picture copyright and does not want to see it being used here? Contact us by: gustavobecelli@gmail.com**

## License

This project follows the [MIT License](LICENSE)

All the images contained in this project are not included in this license. To see which license the image follows, put your mouse over the image, and a infocard will appear.
