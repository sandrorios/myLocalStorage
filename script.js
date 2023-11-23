let para = document.getElementById('demo');


function populateStorage(){
    localStorage.setItem('name', 'John Doe');

    const name = localStorage.getItem('name');
    para.appendChild(document.createTextNode(name));
    console.log(name);
}

populateStorage();