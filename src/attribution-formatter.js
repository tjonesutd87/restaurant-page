export function attributionFormatter(parentId, outerElement, description, artist = '', artistUrl = '', source, sourceUrl) {
    const parent = document.getElementById(parentId);
    const attribution = document.createElement(outerElement);
    const sourceLink = '<a href="' + sourceUrl + '">' + source + '</a>';
    sourceLink.textContent = source;
    if (artist == ''){
        outer.innerHtml = description + sourceLink;
    } else {
        const artistLink = '<a href="' + artistUrl + '">' + artist + '</a>';
        outer.innerHtml = description + artistLink + ' on ' + sourceLink;
    }
    document.parent.appendChild(attribution);
}