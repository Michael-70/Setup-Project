const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  // "li" = chooses list element
  const item = document.createElement("li");
  item.textContent = taskText;
  list.appendChild(item);

  input.value = "";
  input.focus();
});