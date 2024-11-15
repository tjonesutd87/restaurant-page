import { imageFormatter } from './image-formatter.js';
import { attributionFormatter } from './attribution-formatter.js';
import italianStreet from './images/italian-street.jpg';
import facebookIcon from './images/facebook.png';
import googleIcon from './images/google.png';
import yelpIcon from './images/yelp.png';
import xIcon from './images/twitter.png';

//  create images and text for socials
function createSocialItem (parentId, socialItemId, image, imageId, text) {
    const socialItem = document.createElement('li');
    const socialItemText = document.createTextNode(text);
    const parent = document.getElementById(parentId);
    const width = 36;
    const height = 36;
    parent.appendChild(socialItem);
    socialItem.id = socialItemId;
    imageFormatter(socialItemId, image, width, height, imageId, false);
    socialItem.appendChild(socialItemText);
}

export function initialPageLoad() {
    //  variable declarations
    const content = document.getElementById('content');
    const titleDiv = document.createElement('div');
    const titleText = document.createElement('h1');
    const splashVerbiage = 'At Don Gabagool\'s, our motto is "aayyyy fugettaboutit". We treat our customers like family, because we share the bond of good food, and in life that is most important. With a deep, rich, northern Italian history, we know how to make food, and that history comes through in the flavor. Quality and customer service are our utmost priorities, so you will always leave full and happy. Come enjoy our authentic homestyle italian food, from pasta to pizza and everything in between. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const splashDiv = document.createElement('div');
    const splashP = document.createElement('p');
    const hoursDiv = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    const hoursUl = document.createElement('ul');
    const socialsDiv = document.createElement('div');
    const socialsTitle = document.createElement('h2');
    const socialsUl = document.createElement('ul');
    const footer = document.createElement('footer');
    const hours = ['Mon: 4pm - 9pm', 'Tues: 12pm - 9pm', 'Wed: 12pm - 9pm', 'Thur: 12pm - 9pm', 'Fri: 12pm - 12am', 'Sat: 12pm - 12am', 'Sun: 2pm - 7am'];
    const socialItems = [
        {
            'id': 'google-social',
            'image': googleIcon,
            'imageId': 'google-icon',
            'text': 'Review us on Google',

        },
        {
            'id': 'facebook-social',
            'image': facebookIcon,
            'imageId': 'facebook-icon',
            'text': 'Like us on Facebook',

        },
        {
            'id': 'yelp-social',
            'image': yelpIcon,
            'imageId': 'yelp-icon',
            'text': 'Rate us on Yelp',

        },
        {
            'id': 'x-social',
            'image': xIcon,
            'imageId': 'x-icon',
            'text': 'Follow us on X',

        },
    ];
    
    //  append title to content container and set title text
    content.appendChild(titleDiv);
    titleDiv.id = 'title';
    titleDiv.appendChild(titleText);
    titleText.textContent = 'Don Gabagool\'s Italian Ristorante';

    //  append splash info div
    content.appendChild(splashDiv);
    splashDiv.id = 'splash';

    //  run image formatter to append image to splash div
    imageFormatter('splash', italianStreet, 300, 450, 'splash-image', true, 'Photo by', 'Oscar Nord', 'https://unsplash.com/@oscnord?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash', 'Unsplash', 'https://unsplash.com/photos/narrow-pathway-surrounded-by-concrete-of-buildings-db2MwXX-0CQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');

    //  append splash verbiage element to splash div and set the text content equal to the verbiage variable
    splashDiv.appendChild(splashP);
    splashP.textContent = splashVerbiage;

    //  append hours div
    content.appendChild(hoursDiv);
    hoursDiv.id = 'hours';

    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(hoursUl);
    hoursTitle.textContent = 'Hours';

    for (const hour in hours) {
        const hoursItem = document.createElement('li');
        const dayText = document.createElement('b');
        const timeText = document.createTextNode(hours[hour].substring(hours[hour].indexOf(' ') + 1));
        dayText.textContent = hours[hour].substring(0, (hours[hour].indexOf(' ') + 1));
        hoursUl.appendChild(hoursItem);
        hoursItem.appendChild(dayText);
        hoursItem.appendChild(timeText);
    };

    //  append socials div
    content.appendChild(socialsDiv);
    socialsDiv.id = 'socials';
    socialsDiv.appendChild(socialsTitle);
    socialsTitle.textContent = 'Socials';
    socialsDiv.appendChild(socialsUl);
    socialsUl.id = 'socials-list';

    //  iterate through the social item objects and call create social item to append the social item to the socials ul
    for (const item in socialItems) {
        createSocialItem('socials-list', socialItems[item].id, socialItems[item].image, socialItems[item].imageId, socialItems[item].text);
    }

    //  append footer and run any remaining attributions through the attribution formatter
    content.appendChild(footer);
    footer.id = 'attributions';
    attributionFormatter('attributions', 'p', 'Background Photo by ', 'Unsplash', 'https://unsplash.com/photos/village-under-clear-sky-fJWYwHWYQpY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash', 'Giuseppe Mondì', 'https://unsplash.com/@masinutoscana?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',);
    attributionFormatter('attributions', 'p', 'Facebook icons created by ', 'Enamo Studios - Flaticon', 'https://www.flaticon.com/free-icons/facebook');
    attributionFormatter('attributions', 'p', 'Google icons created by ', 'pocike - Flaticon', 'https://www.flaticon.com/free-icons/brands');
    attributionFormatter('attributions', 'p', 'X logo icons created by ', 'khulqi Rosyid - Flaticon', 'https://www.flaticon.com/free-icons/twitter-logo');
    attributionFormatter('attributions', 'p', 'Yelp icons created by ', 'Xinh Studio - Flaticon', 'https://www.flaticon.com/free-icons/yelp');
}