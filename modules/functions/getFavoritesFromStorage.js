let getFavoritesFromStorage = () => {
    if (!localStorage.favorites) return;
    return JSON.parse(localStorage.getItem("favorites"));
};

export { getFavoritesFromStorage };