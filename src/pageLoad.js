import createAbout from "./about";
import homepage from "./homepage";
import createMenu from "./menu";
import changeTabs from "./tab";

function pageload(){
    changeTabs();
    homepage();
/*     createMenu();
    createAbout(); */

}

export default pageload;