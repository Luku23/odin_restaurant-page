import restaurantImage from './restaurant.jpg';

function loadHome() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';

    const description = document.createElement('p');
    description.textContent = 'The best food you’ll ever taste! Experience culinary magic.';

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Restaurant';

    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(image);
}

export default loadHome;
