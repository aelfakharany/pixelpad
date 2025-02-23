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

function getNewSize() {
    let newSize;
    while (true) {
        const input = prompt("Enter new grid dimension (1 to 100)");
        if (input === null) {
            // User cancelled the prompt
            return null;
        }
        newSize = parseInt(input, 10);
        if (newSize >= 1 && newSize <= 100) {
            break;
        } else {
            alert("Grid dimension must be between 1 and 100, inclusive");
        }
    }
    return newSize;
}

function newGrid() {
    size  = getNewSize();
    if (size == null) {
        return size;
    }
    gridContainer.innerHTML = '';
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = `${50 / size}vw`;
        div.style.height = `${50 / size}vw`;
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
}

document.getElementById("size-button").addEventListener("click", newGrid);