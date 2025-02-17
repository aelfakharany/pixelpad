const gridContainer = document.getElementById("grid-container");
let isMouseDown = false;

document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

for (let i = 0; i < (16*16); i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    gridContainer.appendChild(div);
    div.addEventListener("click", () => {
        div.style.backgroundColor = "black";
    })
    div.addEventListener("mouseover", () => {
        if (isMouseDown) {
            div.style.backgroundColor = "black";
        }
    })
}