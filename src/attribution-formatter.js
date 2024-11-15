//  this function takes various arguments to create a formatted attribute and append it to a parent element.
export function attributionFormatter(parentId, outerElement, description, source, sourceUrl, artist = '', artistUrl = '') {
    //  declare variables, creating/getting dom elements
    const parent = document.getElementById(parentId);
    const attribution = document.createElement(outerElement);
    const descriptionText = description + ' ';
    const attributionDesc = document.createTextNode(descriptionText);
    const onText = document.createTextNode(' on ');
    const sourceLink  = document.createElement('a');

    //  set source link hyper reference to source url and set the text
    //  content to source name then append the attribution to the parent dom element
    sourceLink.href = sourceUrl;
    sourceLink.textContent = source;
    parent.appendChild(attribution);

    //  if the artist is not passed in arguments, then just format the attribution with the description followed by the source link
    //  otherwise format attribution with description followed by artist link followed by the text ' on ' then the source link.
    //  The attribution elements are appeneded to the attribution depending on how it is formatted.
    if (artist == ''){
        attribution.appendChild(attributionDesc);
        attribution.appendChild(sourceLink);
    } else {
        const artistLink = document.createElement('a');
        artistLink.href = artistUrl;
        artistLink.textContent = artist;
        attribution.appendChild(attributionDesc);
        attribution.appendChild(artistLink);
        attribution.appendChild(onText);
        attribution.appendChild(sourceLink);
    }
}