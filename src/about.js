import { imageFormatter } from "./image-formatter";
import { attributionFormatter } from "./attribution-formatter";
import chefPicture from './images/chef.jpg';

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
   const descriptionDiv = document.createElement('div');
   const descriptionVerbiage = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   ]

   //  append site title
   container.appendChild(titleDiv);
   titleDiv.id = 'title';
   titleDiv.appendChild(titleText);
   titleText.textContent = 'Don Gabagool\'s Italian Ristorante';

   //  append maint content div
   container.appendChild(content);
   content.id = 'about-content';

    //  append about section and title
    content.appendChild(aboutDiv);
    aboutDiv.appendChild(aboutTitle);
    aboutDiv.id = 'about-div';
    aboutTitle.textContent = 'About';

    //append description div
    aboutDiv.appendChild(descriptionDiv);
    descriptionDiv.id = 'about-description';
    imageFormatter('about-description', chefPicture, 400, 280, 'chef-picture', true, 'Photo by ', 'Stefan C. Asafti', 'https://unsplash.com/@stefanasafti?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash', 'Unsplash', 'https://unsplash.com/photos/white-and-brown-rotary-telephone-on-brown-wooden-table-OgDrj7Q8EAw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
    for (let i = 0; i < descriptionVerbiage.length; i++) {
        const descriptionP = document.createElement('p');
        descriptionP.textContent = descriptionVerbiage[i];
        descriptionDiv.appendChild(descriptionP);
    }
}