let path = new URLSearchParams(location.search);
let categoryName = path.get("cetegoryName")
console.log(path);

let categoryProdcuts = document.getElementById("category-products")
let filteredCards = products.filter((el) => el.category === categoryName)

let carts = JSON.parse(localStorage.getItem("carts") || "[]")
let title = document.getElementById("title")
title.textContent = categoryName

function showCategories(content, data) {
    content.innerHTML = ""
    data.map((el) => {
        content.innerHTML += `
                         <div
                            class="hover:shadow-xl cursor-pointer  bg-[white] max-w-[420px] w-full border-[1px] rounded-[6px] overflow-hidden p-[7px] sm:p-[12px]  border-[#E3E3E8]">
                            <div class="flex items-center justify-center w-full">
                                <img class="h-[110px] w-[100px] sm:w-[140px]  object-contain sm:h-[160px]" src=${el.image[0]} alt="Img" />
                            </div>
                            <div class='flex items-center justify-between gap-[10px] pt-[14px]'>
                                <p class='text-[#7A7680] text-[9px] sm:text-[12px] xl:text-[13px] whitespace-nowrap'>
                                    Артикул: ${el.article}</p>
                                ${el.rating === 5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                            </div>
                                `: el.rating === 4.5 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                            </div>
                                `: el.rating === 4 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                            
                                `: el.rating === 3.5 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: el.rating === 3 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: el.rating === 2.5 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: el.rating === 2 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: el.rating === 1.5 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: el.rating === 1 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/to'liq.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: el.rating === 0.5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/yarm.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: el.rating === 0 ? `
                                <div class="flex gap-[4px] px-[8px] pt-[4px]">
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                                <img class="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]" src="../assets/images/stars/bo'sh.svg" alt="star" />
                            </div>
                                `: ""
            }
                            </div>
                            <div>
                            <h2 class="pt-[2.5px] sm:pt-[5px] font-bold text-[14px] sm:text-[16px]">${el.name}</h2>
                            </div>
                            <div class='pt-[1px] sm:pt-[2px] line-clamp-2 text-[12px] sm:text-[14px]'>
                                <h3>${el.description}</h3>
                            </div>
                            <div class='flex items-center justify-between gap-[10px] pt-[6px] sm:pt-[16px]'>
                                <div class='flex items-start gap-[10px]'>
                                    <p class='text-[16px] sm:text-[18px] sm:text-[21px] whitespace-nowrap xl:text-[30px] '>
                                        ${el.price} ₽</p>
                                    <strike
                                        class="text-[#7A7680] whitespace-nowrap text-[10px] sm:text-[14px] xl:text-[16px]">${el.discount}
                                        ₽</strike>
                                </div>
                               
                            ${carts.find((cart) => cart.id === el.id) ?
                `<div class="flex items-center gap-[5px] w-[100px]">
                                <button
                                onClick="decraese(${el.id})"
                                    class="border-[2px] w-full group cursor-pointer group border-[#5946D7] p-[2.5px] sm:p-[5px]  rounded-[10px] bg-[#5946D7] hover:border-[#5946D7] duration-200 inline-flex items-center justify-center">
                                    <svg class="fill-white h-[20px] sm:h-[20px] w-[20px] sm:w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5946D7"><path d="M240-440v-80h480v80H240Z"/></svg>
                                </button>
                                 <span
                                    class="font-bold">
                                 ${carts.find((cart) => cart.id === el.id).number}
                                </span>
                                 <button
                                 onClick="increase(${el.id})"
                                    class="border-[2px] group w-full cursor-pointer group border-[#5946D7] p-[2.5px] sm:p-[5px]  rounded-[10px] bg-[#5946D7] hover:border-[#5946D7] duration-200 inline-flex items-center justify-center">
                                    <svg class="fill-white h-[20px] sm:h-[20px] w-[20px] sm:w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5946D7"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>

                                </div>
                            </div>` : `<button
                                  onClick="addToCart(${el.id})"
                                    class="border-[2px] cursor-pointer group border-[#5946D7] p-[5px] rounded-[8px] bg-transparent hover:bg-[#5946D7] hover:border-[#5946D7] duration-200 inline-flex items-center justify-center">
                                    <svg class="w-[16px] sm:w-[20px] xl:w-[24px] h-[16px] sm:h-[20px] xl:h-[24px] fill-[#5946D7] group-hover:fill-white duration-200"
                                        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px">
                                        <path
                                            d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                                    </svg>
                                </button>`
            }
                        </div>             
        `
    })
}
showCategories(categoryProdcuts, filteredCards)

function addToCart(id,) {
    let item = products.find((el) => el.id === id);
    item.number = 1;
    carts.push(item)
    localStorage.setItem("carts", JSON.stringify(carts))
    showCategories(categoryProdcuts, filteredCards)
}
function increase(id) {
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number += 1
        }
        return el
    })

    localStorage.setItem("carts", JSON.stringify(carts));
    showCategories(categoryProdcuts, filteredCards)
}
function decraese(id) {
    let item = carts.find((el) => el.id === id)
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number -= 1
        }
        return el
    })
    if (item.number < 1) {
        carts = carts.filter((el) => el.id !== id)
    }
    localStorage.setItem("carts", JSON.stringify(carts));
    showCategories(categoryProdcuts, filteredCards)
}