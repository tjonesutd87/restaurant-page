import { attributionFormatter } from "./attribution-formatter";
import { imageFormatter } from "./image-formatter";
import phone from './images/phone.jpg'

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
   const contactInfo = document.createElement('div');
   const info = [{infoType: 'Phone', infoValue: '867-5309',}, {infoType: 'Email', infoValue: 'test@test.test',}];
   const infoVerbiage = 'You can use the below information to contact us, or you can submit a message below.';
   const infoP = document.createElement('p');
   const form = document.createElement('form');
   const formDiv = document.createElement('div');
   const formUl = document.createElement('ul');
   const formId = 'contact-form';
   let isValid = false;
   const formCompletion = document.createElement('p');
   const formCompletionDiv = document.createElement('div');
   const formInputs = [
        { 
            name: 'first-name',
            elementType: 'input',
            inputType: 'text',
            id: 'first-name',
            placeholder: 'John',
            label: 'First Name',
            rows: 0,
            cols: 0,
            minLength: 0,
            required: true,
        },
        { 
            name: 'last-name',
            elementType: 'input',
            inputType: 'text',
            id: 'last-name',
            placeholder: 'Doe',
            label: 'Last Name',
            rows: 0,
            cols: 0,
            minLength: 0,
            required: true,
        },
        { 
            name: 'email',
            elementType: 'input',
            inputType: 'email',
            id: 'email',
            placeholder: 'test@test.test',
            label: 'Email',
            rows: 0,
            cols: 0,
            minLength: 5,
            required: true,
        },
        { 
            name: 'message',
            elementType: 'textarea',
            inputType: 'none',
            id: 'message',
            placeholder: 'Type your message here...',
            label: 'Message',
            rows: 4,
            cols: 25,
            minLength: 0,
            required: true,
        },
        { 
            name: 'none',
            elementType: 'button',
            inputType: 'submit',
            id: 'contact-submit',
            placeholder: 'Submit',
            label: 'none',
            rows: 0,
            cols: 0,
            minLength: 0,
            required: false,
        },
    ];

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

    //  append contact info section
    contactInfo.id = 'contact-info';
    contactDiv.appendChild(contactInfo);
    imageFormatter('contact-info', phone, 500, 350, 'phone-img', true, 'Photo by ', 'Louis Hansel', 'https://unsplash.com/@louishansel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash', 'Unsplash', 'https://unsplash.com/photos/white-and-brown-rotary-telephone-on-brown-wooden-table-OgDrj7Q8EAw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
    infoP.textContent = infoVerbiage;
    contactInfo.appendChild(infoP);
    for (const object in info) {
        const p = document.createElement('p');
        p.textContent = info[object].infoType + ': ' + info[object].infoValue;
        contactInfo.appendChild(p);
    };
    
    //  append contact form section
    contactDiv.appendChild(form);
    form.id = formId;
    form.action = 'javascript:void(0);';
    form.setAttribute('novalidate', '');
    form.appendChild(formDiv);
    formDiv.id = 'form-div';
    formDiv.appendChild(formUl);

    //  create form inputs
    for (const object in formInputs) {
        let input;
        const inputDiv = document.createElement('div');
        const inputLi = document.createElement('li');
        const label = document.createElement('label');
        const error = document.createElement('span');
        switch(formInputs[object].elementType) {
            case 'textarea':
                input = document.createElement('textarea');
                break;
            case 'input':
                input = document.createElement('input');
                break;
            case 'button':
                input = document.createElement('button');
                break;
            default:
                console.log('error');
                break;
        }
        if (formInputs[object].elementType !== 'button') {
            formUl.appendChild(inputLi);
            inputDiv.className = 'form-item';
            inputLi.appendChild(inputDiv);
            inputDiv.appendChild(label);
            inputDiv.appendChild(input);
            inputDiv.appendChild(error);
            label.for = formInputs[object].name;
            label.textContent = formInputs[object].message;
            if (formInputs[object].inputType !== 'none') {
                input.type = formInputs[object].inputType;
            };
            input.name = formInputs[object].name;
            input.id = formInputs[object].id;
            input.placeholder = formInputs[object].placeholder;
            input.required = formInputs[object].required;
            if (formInputs[object].elementType == 'textarea'){
                input.rows = formInputs[object].rows;
                input.cols = formInputs[object].cols;
            };
            error.className = 'error';
            error.id = formInputs[object].id + '-error';
            error.ariaLive = 'polite';
            if (formInputs[object].minLength !== 0) {
                input.minLength = formInputs[object].minLength;
            }
        } else{
            input.value = formInputs[object].inputType;
            input.id = formInputs[object].id;
            input.textContent = formInputs[object].placeholder;
            formUl.appendChild(inputLi);
            inputLi.appendChild(input);
        }
    ;}

    const inputArr = Array.from(document.querySelectorAll('input'));
    const textAreaArr = Array.from(document.querySelectorAll('textarea'));
    const submitBtn = document.getElementById('contact-submit');

    inputArr.forEach(input => {
        input.addEventListener('input', () =>{
            for (const object in inputArr) {
                if (inputArr[object].validity.valid) {
                    const error = document.getElementById(inputArr[object].id + '-error');

                    error.textContent ='';
                    error.className = 'error';
                } else {
                    inputValidator();
                }
            };
        });
    });

    textAreaArr.forEach(textArea => {
        textArea.addEventListener('input', () =>{
            for (const object in textAreaArr) {
                if (textAreaArr[object].validity.valid) {
                    const error = document.getElementById(textAreaArr[object].id + '-error');
                    error.textContent ='';
                    error.className = 'error';
                } else {
                    inputValidator();

                }
            };
        });
    });
    
    submitBtn.addEventListener('click', () =>{
            inputValidator();
            if (formValidator()) {
                contactDiv.removeChild(form);
                contactDiv.appendChild(formCompletionDiv);
                formCompletionDiv.appendChild(formCompletion);
                formCompletion.textContent = 'Thanks for your submission!'
                formCompletionDiv.id = 'completion-div';
            }
    });
    
    function inputValidator () {
        for (const object in inputArr) {
            const error = document.getElementById(inputArr[object].id + '-error');
            switch(inputArr[object].id){
                case 'email':
                    if (inputArr[object].validity.typeMismatch) {
                        error.textContent = "Email address not valid!";
                    } else if (inputArr[object].validity.valueMissing) {
                        error.textContent = "Please enter an email.";
                    } else if (inputArr[object].validity.tooShort) {
                        error.textContent = `Email address should be at least ${inputArr[object].minLength} characters.`;
                    }
                    break;
                case 'first-name':
                    if (inputArr[object].validity.valueMissing) {
                        error.textContent = "Please enter your first name.";
                    }
                    break;
                case 'last-name':
                    if (inputArr[object].validity.valueMissing) {
                        error.textContent = "Please enter your last name.";
                    }
                    break;
                };
            for (const object in textAreaArr){
                if (textAreaArr[object].validity.valueMissing) {
                    const messageError = document.getElementById(textAreaArr[object].id+'-error');
                    messageError.textContent = "Please enter a message";
                }
            };
        };
    };

    function formValidator() {
        let isValid = true;
      
        const formElements = document.forms["contact-form"].elements;

        for (let i = 0; i < formElements.length; i++) {
          const element = formElements[i];
          console.log(element);
          if (!element.checkValidity) continue;
      
          if (!element.checkValidity()) {
            isValid = false;
          }
      }
      return isValid;
    }

}