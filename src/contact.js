// contact.js

const loadContact = () => {
    const content = document.querySelector('#content');

    // Create the main wrapper for contact info
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = '📞 (555) 123-4567';

    const address = document.createElement('p');
    address.textContent = '🏠 123 Pizza Lane, Foodtown, CA 90210';

    const hours = document.createElement('p');
    hours.textContent = '🕒 Mon–Fri: 11am–10pm | Sat–Sun: 12pm–11pm';

    // Append elements to the contact wrapper
    contactDiv.append(heading, phone, address, hours);

    // Append the whole contact section to the DOM
    content.appendChild(contactDiv);
};

export default loadContact;