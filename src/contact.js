import { attributionFormatter } from "./attribution-formatter";
import { imageFormatter } from "./image-formatter";

export function contactPageLoad() {
    
   //  create container and content div
   const content = document.createElement('div');
   const container = document.createElement('div')
   container.id = 'container';
   document.body.appendChild(container);


   //  declare variables
   const titleDiv = document.createElement('div');
   const titleText = document.createElement('h1');
   const contactDiv = document.createElement('div');
   const contactTitle = document.createElement('h2');

   //  append site title
   container.appendChild(titleDiv);
   titleDiv.id = 'title';
   titleDiv.appendChild(titleText);
   titleText.textContent = 'Don Gabagool\'s Italian Ristorante';

   //  append maint content div
   container.appendChild(content);
   content.id = 'menu-content';

    //  append contact section and title
    content.appendChild(contactDiv);
    contactDiv.appendChild(contactTitle);
    contactDiv.id = 'contact-div';
    contactTitle.textContent = 'Contact';
}