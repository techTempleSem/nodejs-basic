window.onload = function () {
    let text = document.getElementById("text");

    text.innerText = "loaded";
};

// const aElement = document.querySelector("a");
// aElement.addEventListener("click", () => {
//     alert("a click");
// });

const buttonElement = document.querySelector(".btn2");

buttonElement.addEventListener("click", (event) => {
    let val;
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;
    val = event.type;
    val = event.clientY;
    val = event.offsetY;
    console.log(val);
    console.log(event);
});
