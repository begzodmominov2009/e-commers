let catalogText = document.getElementById("catalog-text")


function showCatalog(content, data) {
    content.innerHTML = ""
    data.map((el) => {
        content.innerHTML += `
             <a href="./category.html?cetegoryName=${el.name}">
             <p>${el.name}</p>
             </a>
             <hr class="border-gray-200">
        `
    })
}

showCatalog(catalogText, categoriesData)