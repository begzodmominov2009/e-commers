let input = document.getElementById("input")
let searchCards = document.getElementById("search-cards")

input.addEventListener("input", (e) => {
    let inputValues = e.target.value;
    let searchProducts = products.filter((el) => el.name.toUpperCase().includes(inputValues.toUpperCase()));
    if (inputValues) {
        searchCards.classList.remove("hidden")
    } else {
        searchCards.classList.add("hidden")
        searchCards.innerHTML = ""
    }
    searchProducts.length > 0 ?
    searchProducts.map((el) => {
        searchCards.innerHTML += `
                            <div
                                class="flex items-center justify-between gap-[12px] bg-[white] w-full rounded-[4px] p-[7px] border-[1px] border-[#DEDEE2]">
                                <div class="flex items-center gap-[12px]">
                                    <img class="w-[40px] h-[40px]" src=${el.image[0]} alt="">
                                    <div class="flex flex-col justify-between">
                                        <p class="">${el.name}</p>
                                        <p class="text-[14px]">${el.description}</p>
                                    </div>
                                </div>
                                <a href="./Pages/single.html" class="cursor-pointer">
                                    <img class="w-[24px] h-[24px]" src="./assets/header/visibility_24dp_5946D7_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                                </a>
                            </div>
        `
    }) : searchCards.innerHTML =  `<div class="text-center">Bunday maxulot mavjud emas</div>`

})