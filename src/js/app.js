const itemInput = document.querySelector(".todo-item-input");
const itemSubmit = document.querySelector(".todo-item-submit");

const itemLists = document.querySelector(".todo-item-lists");

const item = document.querySelector(".todo-item");
const itemDelete = document.querySelector(".todo-item-delete");

itemSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const itemValue = itemInput.value;

  const itemm = `
        <li class="todo-item">
            <span class="todo-item-title">${itemValue}</span>
            <span class="todo-item-delete todo-item-btn">delete</span>
        </li>`;

  itemLists.insertAdjacentHTML("afterbegin", itemm);
  console.log(itemValue);
  console.log(itemm);
});
