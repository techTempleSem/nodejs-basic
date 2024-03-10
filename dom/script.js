let val;

val = document;

val = document.baseURI;
val = document.head;

val = document.forms;
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;
val = document.scripts[1].getAttribute("src");

console.log(val);

const headerContainer = document.getElementById("header-container");

console.log(headerContainer);

// headerContainer.style.display = "none";

headerContainer.textContent = "Text Content";
headerContainer.innerHTML = "<span>Inner HTML</span>";

const items = document.getElementsByClassName("list-group-item");
console.log(items);

items[0].style.color = "blue";
items[3].textContent = "HI";

let lists = document.getElementsByTagName("li");

// lists.forEach((list) => {
//     console.log(list);
// });

lists = Array.from(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}. List`;
});

console.log(lists);

const liOdds = document.querySelectorAll("li:nth-child(odd)");

console.log(liOdds);

liOdds.forEach((list, index) => {
    list.style.background = "gray";
});
