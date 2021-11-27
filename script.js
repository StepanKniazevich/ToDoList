const addTask = document.querySelector(".addTask__button");
const crossOutItem = document.querySelectorAll(".crossOut__item")
const deleteTasks = document.querySelectorAll(".delete__item");
const inputTaks = document.querySelector(".text__input");
const tickItems = document.querySelectorAll(".tick__item");
const textTask = document.querySelector(".text__item");
const allTaskList = document.querySelector(".toDo__list");
const listContent = document.querySelector(".list__content");



function showRemoveTick(condition, event) {


}



//crossOutItem.forEach(el => {

allTaskList.addEventListener("mouseover", (event) => {
    checkElement = ["text__item", "tick__item", "crossOut__item"].includes(event.target.className) ?
        event.target.previousElementSibling.style.visibility = "visible" : "";
});

allTaskList.addEventListener("mousemove", (event) => {

    console.log(event.target);
    checkElement = ["text__item", "tick__item", "crossOut__item"].includes(event.relatedTarget.className) ?
        event.target.previousElementSibling.style.visibility = "hidden" : "";

});





allTaskList.addEventListener("click", (event) => event.target.closest(".list__item").remove());


