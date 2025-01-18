const input = document.getElementById("input-box");
const listbox = document.getElementById("list-container");

function addTask() {
    if (input.value === '') {
        alert("you must write something !");
    }
    else {
        let li = document.createElement("li");
        li.innerText = input.value;
        listbox.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

listbox.addEventListener("click", function (check) {
    if (check.target.tagName === "LI") {
        check.target.classList.toggle("checked");
        saveData();
    }
    else if (check.target.tagName === "SPAN") {
        check.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data",listbox.innerHTML)
}
function showTask(){
    listbox.innerHTML = localStorage.getItem("data");
}
showTask();