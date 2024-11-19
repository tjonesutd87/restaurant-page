import { attributionFormatter } from './attribution-formatter.js';
import { imageFormatter } from './image-formatter.js';
import { generateMenuItem, generateMenuSection } from './menu-generator.js';
import { menu } from './menu.js';

export function menuPageLoad() {
        //  create container and content div
        const content = document.createElement('div');
        const container = document.createElement('div')
        container.id = 'container';
        document.body.appendChild(container);

    
        //  declare variables
        const titleDiv = document.createElement('div');
        const titleText = document.createElement('h1');
        const menuDiv = document.createElement('div');
        const menuTitle = document.createElement('h2');
    
        //  append site title
        container.appendChild(titleDiv);
        titleDiv.id = 'title';
        titleDiv.appendChild(titleText);
        titleText.textContent = 'Don Gabagool\'s Italian Ristorante';

        //  append maint content div
        container.appendChild(content);
        content.id = 'menu-content';
    
        //  append about section and title
        content.appendChild(menuDiv);
        menuDiv.appendChild(menuTitle);
        menuDiv.id = 'menu-div';
        menuTitle.textContent = 'Menu';
        for (let i = 0; i < menu.length; i++){ 
            generateMenuSection(menuDiv.id, menu[i].sectionName);
            for (let j = 0; j < menu[i].item.length; j++){
                generateMenuItem(menu[i].sectionName, menu[i].item[j].itemName, menu[i].item[j].itemDesc, menu[i].item[j].img.imgSource, true, menu[i].item[j].img.imgDesc, menu[i].item[j].img.artist, menu[i].item[j].img.artistUrl, menu[i].item[j].img.source, menu[i].item[j].img.sourceUrl)
            };
        };
}