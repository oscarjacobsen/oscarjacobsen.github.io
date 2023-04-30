// Set title
document.title = "HELLOOO";

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
var input = document.createElement("input");
input.type = "file";
input.accept = ".ifc";
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
