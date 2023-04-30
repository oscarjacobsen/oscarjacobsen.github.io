
///////////////////////
// Setup static html //
///////////////////////

document.title = "HELLOOO"

// Setting favicon
function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('../static/images/favicon.png');

// Select the div element with 'app' id
const app = document.getElementById('app');

// Adding input field
var input = document.createElement("input")
input.type = "file"
input.accept = ".ifc"
input.className = "css-class-name"; //Set css class
app.appendChild(input); //

// Create a new H1 element
const header = document.createElement('h1');

// Create a new text node for the H1 element
const headerContent = document.createTextNode(
  'Develop. Preview. Ship. 🚀',
);

// Append the text to the H1 element
header.appendChild(headerContent);

// Place the H1 element inside the div
app.appendChild(header);


import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
// viewer.grid.setGrid();
// viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("./");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('Bolig-Røyksundvegen.ifc');

window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
viewer.clipper.active = true;

window.onkeydown = (event) => {
    if(event.code === 'KeyP') {
        viewer.clipper.createPlane();
    }
    else if(event.code === 'KeyO') {
        viewer.clipper.deletePlane();
    }
}
