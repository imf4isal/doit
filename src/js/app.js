const itemInput = document.querySelector(".todo-item-input");
const itemSubmit = document.querySelector(".todo-item-submit");

const itemLists = document.querySelector(".todo-item-lists");

const item = document.querySelector(".todo-item");

itemSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const itemValue = itemInput.value;

  const itemm = `
    <li class="todo-item">
    <span class="todo-item-title">${itemValue}</span>
    <span class="todo-item-delete todo-item-btn">delete</span>
    </li>`;

  itemLists.insertAdjacentHTML("afterbegin", itemm);

  const itemDelete = document.querySelector(".todo-item-delete");

  itemDelete.addEventListener("click", deleteItem);

  setDefault();
  //   activeDelete();

  //   itemDelete.addEventListener("click", function () {
  //     console.log("delete");
  //   });
});

// const activeDelete = function () {
//   itemDelete.addEventListener("click", function (e) {
//     console.log("delete item");
//     // e.target.closest(".todo-item").remove();
//   });
// };

const deleteItem = function (e) {
  const element = e.target.closest(".todo-item");
  element.remove();
};

const setDefault = function () {
  itemInput.value = "";
};
