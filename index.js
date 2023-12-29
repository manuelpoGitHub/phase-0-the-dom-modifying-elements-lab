// Write your code here!
// Remove the <main> element with id 'main'
const main = document.querySelector('main#main');
main.remove();

//create new element <h1>
var newHeader = document.createElement('h1');

// Set the id attribute of the new <h1> element to 'victory'
newHeader.id = "victory";

// Set the text content of the new <h1> element to "YOUR-NAME is the champion"

newHeader.textContent = "Manuel is the champion";

// Append the new <h1> element to the <body>
document.body.appendChild(newHeader);