let showDetails = (event) => {
    switch (true) {
        case event.target.className === "essentials":
            event.target.nextElementSibling.classList.toggle("show");
            break;
        case event.target.parentNode.className === "essentials":
            event.target.parentNode.nextElementSibling.classList.toggle("show");
            break;
        case event.target.parentNode.parentNode.className === "essentials":
            event.target.parentNode.parentNode.nextElementSibling.classList.toggle("show");
    }
};

export { showDetails };