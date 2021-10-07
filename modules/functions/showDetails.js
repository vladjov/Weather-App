let showDetails = (e) => {
    switch (true) {
        case e.target.className === "essentials":
            e.target.nextElementSibling.classList.toggle("show");
            break;
        case e.target.parentNode.className === "essentials":
            e.target.parentNode.nextElementSibling.classList.toggle("show");
            break;
        case e.target.parentNode.parentNode.className === "essentials":
            e.target.parentNode.parentNode.nextElementSibling.classList.toggle("show");
    }
};

export { showDetails };