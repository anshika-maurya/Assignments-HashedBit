let newDiv = document.createElement('div');
    newDiv.innerHTML = 'This is a new div!';
    newDiv.style.backgroundColor = 'violet';
    newDiv.style.padding = '20px';
    newDiv.style.margin = '10px';
    newDiv.style.textAlign = 'center';
    
let container = document.getElementById('container');
container.appendChild(newDiv);
