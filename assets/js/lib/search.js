async function searchPosts(query) {
    const apiEndpoint = window.yurikoSearchEndpoint + "/api/article/search?"
    const queryString = "q="
    const pageString = "&page="
    let page = 1

    var data = await fetch(apiEndpoint + queryString + query + pageString + page)
    var search = await data.json();
    var result = search.result.map(x => {
        return `
        <div class="menu__search-result">
            <a href="${x.url}"><h2 class="menu__search-title">${x.title}</h2></a>
            <p class="menu__search-desc">${x.excerpt}</p>
        </div>
        `;
    }).join("");

    document.getElementById("search-results").innerHTML = result;
}


if (window.yurikoSearchEndpoint != undefined) {
    var el = document.getElementById("search-query");
    el.addEventListener("input", function (e) {
        var val = el.value;
        if (val !== "") {
            document.getElementById("nav-menu").classList.add("menu__item--hidden")
            searchPosts(val);
        } else {
            document.getElementById("nav-menu").classList.remove("menu__item--hidden")

            document.getElementById("search-results").innerHTML = ``;
        }
    });
}
