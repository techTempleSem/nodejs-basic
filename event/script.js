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

const submitBtn = document.querySelector(".submit-btn");
const title = document.querySelector("h2");

// submitBtn.addEventListener("click", handleEvent);
// submitBtn.addEventListener("dblclick", handleEvent);
// submitBtn.addEventListener("mousedown", handleEvent);
// submitBtn.addEventListener("mouseup", handleEvent);
// submitBtn.addEventListener("mouseenter", handleEvent);
// submitBtn.addEventListener("mouseleave", handleEvent);
// submitBtn.addEventListener("mousemove", handleEvent);

const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
form.addEventListener("submit", handleEvent);
emailInput.addEventListener("keyup", handleEvent);
emailInput.addEventListener("keydown", handleEvent);
emailInput.addEventListener("keypress", handleEvent);
emailInput.addEventListener("focus", handleEvent); // 활성화
emailInput.addEventListener("blur", handleEvent); // 비활성화
emailInput.addEventListener("cut", handleEvent); // 잘라내기
emailInput.addEventListener("paste", handleEvent); // 붙여넣기
emailInput.addEventListener("input", handleEvent); // 요소 값이 달라질 때

function handleEvent(e) {
    if (e.type == "submit") {
        e.preventDefault();
    }
    console.log(e.type);
    // title.textContent = `MouseX: ${e.offsetX}  MouseY: ${e.offsetY}`;
    title.textContent = e.target.value;
}
