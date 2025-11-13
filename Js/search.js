let input = document.getElementById("input")
let searchCard = document.querySelector(".search-card")

input.addEventListener("input", (e) => {
    let inputValues = e.target.value.trim();
    let searchProducts = products.filter((el) => el.name.toUpperCase().includes(inputValues.toUpperCase()));
    console.log(searchCard);
    
    if (inputValues) {
        searchCard.classList.remove("hidden")
        searchCard.innerHTML = ""
    } else {
        searchCard.classList.add("hidden")
        searchCard.innerHTML = ""
    }
    searchProducts.length > 0 ?
    searchProducts.map((el) => {
        searchCard.innerHTML += `
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
    }) : searchCard.innerHTML =  `<div class="text-center">Такого товара нет ✅</div>`

})