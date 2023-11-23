let para = document.getElementById('demo');
let inputField = document.getElementById('input-field');
let btn = document.querySelector('.btn');
let listItem = document.getElementById('ul');


function populateStorage(e){
    e.preventDefault();

    localStorage.setItem('name', 'John Doe');

    let name = localStorage.getItem('name');
    
    para.appendChild(document.createTextNode(name));



    console.log(name);
}

btn.addEventListener('click', populateStorage);
// listItem.addEventListener()
// populateStorage();