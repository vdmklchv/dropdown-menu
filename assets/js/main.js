const dropdown = document.querySelector('.dropdown');
const menuList = document.querySelector('.menulist');

dropdown.addEventListener('mouseover', () => {
    menuList.style.display = 'block';
})

dropdown.addEventListener('mouseout', () => {
    menuList.style.display = 'none';
})