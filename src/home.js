const loadHome = () => {
    // 1. Grab the container we want to append everything to
    const content = document.getElementById('content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');

    const heroImg = document.createElement('img');
    heroImg.classList.add('hero-img');
    heroImg.src = 'https://picsum.photos/1200/400';
    heroImg.alt = '';
    heroImg.setAttribute('aria-hidden', 'true');

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to Tony's Authentic Pizzas";

    const blurb = document.createElement('p');
    blurb.classList.add('blurb');
    blurb.textContent = "Fresh ingredients, hand-tossed dough, and a recipe perfected over generations.";

    heroSection.append(heroImg, h1, blurb);

    const infoSection = document.createElement('section');
    infoSection.classList.add('info-cta-section');
    infoSection.setAttribute('aria-label', 'Restaurant info');

    const hoursRow = document.createElement('div');
    hoursRow.classList.add('info-row');
    const hoursStrong = document.createElement('strong');
    hoursStrong.textContent = 'Hours: ';
    hoursRow.append(hoursStrong, 'Mon–Fri 11–10, Sat–Sun 12–11');

    const locationRow = document.createElement('div');
    locationRow.classList.add('info-row');
    const locationStrong = document.createElement('strong');
    locationStrong.textContent = 'Location: ';
    locationRow.append(locationStrong, '123 Pizza Lane, Foodtown, CA 90210');

    const ctaBtn = document.createElement('button');
    ctaBtn.classList.add('cta');
    ctaBtn.type = 'button';
    ctaBtn.textContent = 'Order Now';

    infoSection.append(hoursRow, locationRow, ctaBtn);

    homeDiv.append(heroSection, infoSection);

    content.appendChild(homeDiv);
};

export default loadHome;