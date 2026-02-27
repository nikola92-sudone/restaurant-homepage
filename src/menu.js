// menu.js

const loadMenu = () => {
    const content = document.querySelector('#content');

    // Create the main wrapper for the menu
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    menuDiv.appendChild(heading);

    // Helper function to build menu items quickly
    const createMenuItem = (name, description, price) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = name;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = description;

        const itemPrice = document.createElement('strong');
        itemPrice.textContent = price;

        itemDiv.append(itemName, itemDesc, itemPrice);
        return itemDiv;
    };

    // Create a couple of pizzas
    const margherita = createMenuItem(
        'Classic Margherita', 
        'San Marzano tomato sauce, fresh mozzarella, and basil.', 
        '$14.99'
    );
    const garlicPrawn = createMenuItem(
        'Garlic Prawn Pizza', 
        'A garlic and olive oil base topped with fresh prawns, chilli, and rocket.', 
        '$18.99'
    );

    // Append items to the menu wrapper
    menuDiv.append(margherita, garlicPrawn);

    // Append the whole menu to the DOM
    content.appendChild(menuDiv);
};

export default loadMenu;