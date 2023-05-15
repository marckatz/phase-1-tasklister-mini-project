document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask = document.createElement("li");
    newTask.textContent = e.target.new_task_description.value;
    newTask.className = e.target.priority.value;

    let deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.className = "delete"
    deleteButton.value = "X";
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener("click", (e) =>{
        newTask.remove();
    });

    document.getElementById("tasks").appendChild(newTask);
   });     
});