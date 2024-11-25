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
   const contactTitleDiv = document.createElement('div');
   const formInfo = document.createElement('div');
   const info = [{infoType: 'Phone', infoValue: '867-5309',}, {infoType: 'Email', infoValue: 'test@test.test',}];
   const infoVerbiage = 'You can use the below information to contact us, or you can submit a message below.';
   const infoP = document.createElement('p');

   //  append site title
   container.appendChild(titleDiv);
   titleDiv.id = 'title';
   titleDiv.appendChild(titleText);
   titleText.textContent = 'Don Gabagool\'s Italian Ristorante';

   //  append maint content div
   container.appendChild(content);
   content.id = 'contact-content';

    //  append contact section and title
    content.appendChild(contactDiv);
    contactDiv.appendChild(contactTitleDiv);
    contactTitleDiv.id = 'contact-title';
    contactTitleDiv.appendChild(contactTitle);
    contactDiv.id = 'contact-div';
    contactTitle.textContent = 'Contact';


}