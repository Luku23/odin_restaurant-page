function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');

    const menuItems = [
        { name: 'Pizza', description: 'Cheesy goodness with a crispy crust.' },
        { name: 'Burger', description: 'Juicy, grilled to perfection.' },
        { name: 'Pasta', description: 'Rich and creamy with a hint of garlic.' },
        { name: 'Salad', description: 'Fresh and healthy with a delicious dressing.' },
    ];

    menuItems.forEach((item) => {
        const menuItem = document.createElement('li');
        menuItem.textContent = `${item.name} - ${item.description}`;
        menuList.appendChild(menuItem);
    });

    content.appendChild(heading);
    content.appendChild(menuList);
}

export default loadMenu;
