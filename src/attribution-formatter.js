export function attributionFormatter(parentId, outerElement, description, artist = '', artistUrl = '', source, sourceUrl) {
    const parent = document.getElementById(parentId);
    const attribution = document.createElement(outerElement);
    const descriptionText = description + ' ';
    const attributionDesc = document.createTextNode(descriptionText);
    const onText = document.createTextNode(' on ');
    const sourceLink  = document.createElement('a');
    sourceLink.href = sourceUrl;
    sourceLink.textContent = source;
    parent.appendChild(attribution);
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