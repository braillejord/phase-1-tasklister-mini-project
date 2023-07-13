document.addEventListener("DOMContentLoaded", () => {
  const taskButton = document.getElementById("create-task-button")
  taskButton.addEventListener('click', (e) => {
    e.preventDefault();
    createTask();
    document.getElementById("create-task-form").reset();
  })
});

function createTask() {
  const input = document.getElementById("new-task-description");
  const bullet = document.createElement("li")
  bullet.innerText = input.value
  document.getElementById("tasks").appendChild(bullet)
}