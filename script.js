document.addEventListener("click", (event) => {
    const box = document.createElement("div");
    box.classList.add("click_box");

    box.style.left = `${event.clientX}px`;
    box.style.top = `${event.clientY}px`;

    document.body.appendChild(box);

    box.addEventListener("animationend", () => {
        box.remove();
    });
});