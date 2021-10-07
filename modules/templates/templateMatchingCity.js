let templateMatchingCity = (match) => { return (`
    <li class="cityMatched">
        <h4>${match.name}, ${match.country}</h4>
        <p>${match.lat} ${match.lng}</p>
    </li>
`)};

export { templateMatchingCity };