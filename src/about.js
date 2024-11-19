import { imageFormatter } from "./image-formatter";
import { attributionFormatter } from "./attribution-formatter";

export function aboutPageLoad() {
    
   //  create container and content div
   const content = document.createElement('div');
   const container = document.createElement('div')
   container.id = 'container';
   document.body.appendChild(container);


   //  declare variables
   const titleDiv = document.createElement('div');
   const titleText = document.createElement('h1');
   const aboutDiv = document.createElement('div');
   const aboutTitle = document.createElement('h2');

   //  append site title
   container.appendChild(titleDiv);
   titleDiv.id = 'title';
   titleDiv.appendChild(titleText);
   titleText.textContent = 'Don Gabagool\'s Italian Ristorante';

   //  append maint content div
   container.appendChild(content);
   content.id = 'menu-content';

    //  append about section and title
    content.appendChild(aboutDiv);
    aboutDiv.appendChild(aboutTitle);
    aboutDiv.id = 'about-div';
    aboutTitle.textContent = 'About';
}