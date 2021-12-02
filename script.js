const addTask = document.querySelector(".addTask__button");
const crossOutItem = document.querySelectorAll(".crossOut__item")
const deleteTasks = document.querySelectorAll(".delete__item");
const checkItems = document.getElementsByClassName("check__item");
const textTask = document.querySelector(".text__item");
const allTaskList = document.querySelector(".toDo__list");
const listContent = document.querySelector(".list__content");
const deleteCheked = $(".clearChecked__button");
const addNewTask = $(".addTask__button");
const taskItem = document.querySelector(".list__item");
const valueTask = document.getElementById("text__input");
const clearAll = document.querySelector(".clear__button");




addNewTask.click(() => {


    if (valueTask.value === "") {
        alert("Please, enter the new task ");

    }
    else {

        let newTask = document.createElement("li");
        newTask.classList.add("list__item");

        newTask.innerHTML = `<span class="crossOut__item"> <input type="checkbox" class="check__item">
        <span class="text__item">${valueTask.value}</span> </span>
    <a href="#" class="delete__item"> </a> `



        allTaskList.append(newTask);
        valueTask.value = "";
    }

});

clearAll.addEventListener("click", () => {

    allTaskList.innerHTML = "";

});


deleteCheked.click(() => {

    let allTaskClone = document.createElement("ul");
    let doneTask = false;


    for (let el of checkItems) {

        if (el.checked) {
            doneTask = true;
            el.nextElementSibling.style.textDecoration = "line-through";
        }

        if (!el.checked) {

            allTaskClone.append(el.parentElement.parentElement.cloneNode(true));
            //console.log(allTaskClone);
        }
    }

    if (doneTask) {
        setTimeout(() => {
            allTaskList.innerHTML = allTaskClone.innerHTML;
        }, 2000);
    }
});


allTaskList.addEventListener("click", (event) => event.target.className === "delete__item" ?
    event.target.closest(".list__item").remove() : "");


