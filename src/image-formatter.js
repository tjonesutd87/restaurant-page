import { attributionFormatter } from './attribution-formatter.js';

export function imageFormatter (parentId, source, width, height, description, artist = '', artistUrl = '', sourceName, sourceUrl, imageId, imageClass = '') {
    const parent = document.getElementById(parentId);
    const image = document.createElement('img');
    const imageWidth = width +'px';
    const imageHeight = height + 'px';
    const figure = document.createElement('figure');
    image.src = source;
    image.style.width = imageWidth;
    image.style.height = imageHeight;
    figure.id = imageId;
    if (imageClass !== '') {
        image.classList = imageClass;
    }
    parent.appendChild(figure);
    figure.appendChild(image);
    attributionFormatter(imageId, 'figcaption', description, artist, artistUrl, sourceName, sourceUrl);
    return attributionFormatter;
}