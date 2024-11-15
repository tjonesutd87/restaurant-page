import { attributionFormatter } from './attribution-formatter.js';

export function imageFormatter (parentId, source, width, height, imageId,  caption, description = '', artist = '', artistUrl = '', sourceName = '', sourceUrl = '', imageClass = '') {
    //  declare variables
    const parent = document.getElementById(parentId);
    const image = document.createElement('img');
    const imageWidth = width +'px';
    const imageHeight = height + 'px';

    //  if a caption was included, then create a figure and append the image to the figure
    //  run the attribution formatter to format the attribution and then append to figure as a figcaption
    //  if no caption the just append the image to the parent element.
    if (caption) {
    const figure = document.createElement('figure');
        //  set image source, height/width, and figure id
        figure.id = imageId;

        //  append figure to content and append image to figure, then run the attribution formatter which will append the attribution to the figure as a figcaption
        parent.appendChild(figure);
        figure.appendChild(image);
        attributionFormatter(imageId, 'figcaption', description, sourceName, sourceUrl, artist, artistUrl);
    } else {
        parent.appendChild(image);
        image.id = imageId;
    }

    //  set image source and size
    image.src = source;
    image.style.width = imageWidth;
    image.style.height = imageHeight;

    //  set image classes if there are any
    if (imageClass !== '') {
        image.classList = imageClass;
    }
}