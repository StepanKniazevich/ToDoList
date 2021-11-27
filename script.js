const addTask = document.querySelector(".addTask__button");
const crossOutItem = document.querySelectorAll(".crossOut__item")
const deleteTasks = document.querySelectorAll(".delete__item");
const inputTaks = document.querySelector(".text__input");
const tickItems = document.querySelectorAll(".tick__item");
const textTask = document.querySelector(".text__item");
const allTaskList = document.querySelector(".toDo__list");
const listContent = document.querySelector(".list__content");


/*
function showTick(event){
}
*/


for (let el of crossOutItem) {

    el.addEventListener("mouseover", (event) => {

        console.log(event.target);
        // event.target.previousElementSibling.innerHTML = "&#x2714";


    });
}
/*
 
allTaskList.addEventListener("mouseout", (event) =>{ 
    if (event.target.parentElement.className === "crossOut__item"){
         event.target.previousElementSibling.innerHTML = "&#x2714";   
}});
*/



allTaskList.addEventListener("click", (event) => event.target.closest(".list__item").remove());


