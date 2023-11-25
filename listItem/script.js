let formItem = document.getElementById('form-item');
let listItem = document.getElementById('list-item');
let inputField = document.getElementById('input-field');
let filterItem = document.getElementById('filter');
let clearBtn = document.getElementById('clear');


function addItem(e){
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an Item");
        return;
    }

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    listItem.appendChild(li);
    let button = createButton("remove-item");
    li.appendChild(button);
    inputField.value = '';
    inputField.focus();

    checkUI();
}

function createButton(classes) {
    let button = document.createElement('button');
    button.className = classes;
    let icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    let icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
    checkUI()
}

function clearItems(){
    while(listItem.firstChild){
        listItem.firstChild.remove(listItem.firstChild);
    }
    checkUI()
}

function checkUI(){
    let items = listItem.querySelectorAll('li');
    if(items.length === 0){
        filterItem.style.display = "none";
        clearBtn.style.display = "none";
    }else{
        filterItem.style.display = 'block';
        clearBtn.style.display = 'block';
    }
}

clearBtn.addEventListener('click', clearItems);
listItem.addEventListener('click', removeItem);
formItem.addEventListener('submit', addItem);

checkUI();