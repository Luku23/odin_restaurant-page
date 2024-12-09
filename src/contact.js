function loadContact() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123-456-7890';

    const email = document.createElement('p');
    email.textContent = 'Email: info@restaurant.com';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Culinary Lane';

    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(address);
}

export default loadContact;
