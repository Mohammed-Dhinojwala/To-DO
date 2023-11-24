
const inputElem = document.querySelector('.js-input');
const listContainerElem = document.querySelector('.js-printvalue');

function addTask(){

    if(inputElem.value ===''){
        alert('you must write something');

    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputElem.value;
        listContainerElem.appendChild(li);

        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }

    inputElem.value ='';
}

listContainerElem.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});