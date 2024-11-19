import { imageFormatter } from "./image-formatter.js";

export function generateMenuSection (containerId, sectionName) {
    const container = document.getElementById(containerId);
    const menuSection = document.createElement('div');
    const titleDiv = document.createElement('div');
    const title = document.createElement('h3');
    const section = document.createElement('div');
    menuSection.className = 'menu-section';
    titleDiv.className = 'section-title';
    section.className = 'section';
    section.id = sectionName + '-section';
    const titleName = sectionName[0].toUpperCase() + sectionName.slice(1);
    title.textContent = titleName;
    container.appendChild(menuSection);
    menuSection.appendChild(titleDiv);
    titleDiv.appendChild(title);
    menuSection.appendChild(section);
}

export function generateMenuItem (sectionId, itemName, itemDesc, imgSource, imgCaption, imgDescription = '', imgArtist = '', imgArtistUrl = '', imgSourceName = '', imgSourceUrl = '', imgClass = '') {
    sectionId = sectionId + '-section';
    const section = document.getElementById(sectionId);
    const itemDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const name = document.createElement('h4');
    const description = document.createElement('p');
    const imgId = itemName + '-image';
    const itemId = itemName + '-item';
    console.log(itemName);
    itemDiv.className = 'menu-item';
    itemDiv.id = itemId;
    section.appendChild(itemDiv);
    imageFormatter(itemDiv.id, imgSource, 250, 250, imgId, imgCaption, imgDescription, imgArtist, imgArtistUrl, imgSourceName, imgSourceUrl, imgClass);
    descriptionDiv.className = 'description';
    itemDiv.appendChild(descriptionDiv);
    name.textContent = itemName;
    description.textContent = itemDesc;
    descriptionDiv.appendChild(name);
    descriptionDiv.appendChild(description);
}