/*alert*/

//select variables

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('#the-input');
const items = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
const data = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [] ;


//create li and append to ul
const createLi = (text) => {
    var li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    // li value
    var btns = document.createElement('button');
    btns.innerHTML = "remove";
    btns.className = "btnsSt";
    btns.style.float= "right";
    
    //clear button
    li.appendChild(btns);

    //add event to remove li
    btns.addEventListener('click', function(e){
        
        //remove from ul 
       e.target.parentElement.remove();
       
       //remove from local storage
       
       localStorage.removeItem('tasks');
        });
    
};

//loop through data
data.map( (item) => {
    createLi(item);
});

//submit form event
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    //check the input value
    inputValue = document.getElementById("the-input").value;
    if (inputValue === '') {
        alert ( "This can't be empty");
        li.className("hidden");
    }
    
    //add to local storage
    items.push(input.value);
    localStorage.setItem('tasks', JSON.stringify(items));
    //add to ul
    createLi(input.value);
    input.value = '';
    
});
  



    