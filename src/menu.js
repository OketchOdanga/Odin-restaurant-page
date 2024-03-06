// create the menu page of our restaurant
function createMenu(){
    const Content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML='CHAKULA CHETU'
    const menu1 = document.createElement('div');
    menu1.setAttribute('id','menu1');
    menu1.innerHTML='kuku kubwa = 300bob';
    const menu2 = document.createElement('div');
    menu2.setAttribute('id','menu2');
    menu2.innerHTML='kuku + chips = 400bob';
    const menu3 = document.createElement('div');
    menu3.setAttribute('id','menu3');
    menu3.innerHTML='kuku + smokie + chips = 300bob';

    pageContent.appendChild(menuTitle);   
    pageContent.appendChild(menu1);
    pageContent.appendChild(menu2);
    pageContent.appendChild(menu3);
    Content.appendChild(pageContent);

}

export default createMenu;