const addTask = document.querySelector(".addTask__button");
const crossOutItem = document.querySelectorAll(".crossOut__item")
const deleteTasks = document.querySelectorAll(".delete__item");
const inputTaks = document.querySelector(".text__input");
const checkItems = document.getElementsByClassName("check__item");
const textTask = document.querySelector(".text__item");
const allTaskList = document.querySelector(".toDo__list");
const listContent = document.querySelector(".list__content");
const deleteCheked = $(".clearChecked__button");





deleteCheked.click(() => {

    let allTaskClone = document.createElement("ul");
    let doneTask = false;
    const notDoneTask = '';

    for (let el of checkItems) {

        if (el.checked) {
            doneTask = true;
            el.nextElementSibling.style.textDecoration = "line-through";
        }

        if (!el.checked) {

            doneTask = el.parentElement.parentElement.cloneNode(true);
            allTaskClone.appendChild(doneTask);
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


