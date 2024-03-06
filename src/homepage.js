
function homePage(){
    const Content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const restName = document.createElement('h1');
    restName.innerHTML='Karibu Customer';
    const restImage = document.createElement('img');
    restImage.src ='./dist/tacos_delicioso_1000x667.png';
    restImage.height = '300';
    const restContent = document.createElement('p');
    restContent.innerHTML='chakula kitamu aisee!'
    
    pageContent.appendChild(restName);
    pageContent.appendChild(restImage);
    pageContent.appendChild(restContent);
    Content.appendChild(pageContent);
};

export default homePage;