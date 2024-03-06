
function createAbout(){
    const Content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const h1 = document.createElement('h1');
    h1.innerHTML='About Us'
    const about = document.createElement('p');
    about.innerHTML='sisi tunapenda kupika kuku na ugali. Watu wanaotoka katika sehemu hii ya nchi wanakipenda chakula hiki.'
    pageContent.appendChild(about);
    pageContent.appendChild(h1);
    Content.appendChild(pageContent)
};

export default createAbout;