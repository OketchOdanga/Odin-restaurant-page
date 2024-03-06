//changing tabs
import homepage from "./homepage";
import createMenu from "./menu";
import createAbout from "./about";

function changeTabs(){
    const homeButton = document.getElementById('home-btn');
    const menuButton = document.getElementById('menu-btn');
    const aboutButton = document.getElementById('about-btn');

    homeButton.addEventListener('click',()=>{
        clearContent();
        homepage();
        
    })
    menuButton.addEventListener('click',()=>{
        clearContent();
       createMenu();

    })
    aboutButton.addEventListener('click',()=>{
        clearContent();
        createAbout();

    })
    
}

function clearContent(){
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default changeTabs;