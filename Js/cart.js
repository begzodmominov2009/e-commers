let cartProducts = document.querySelector(".cart-products")
let carts = JSON.parse(localStorage.getItem("carts") || "[]")
let cartSum = document.getElementById("cart-sum")
let cartNumber = document.getElementById("cart-number")
let discountInput = document.getElementById("discount-input")
let badge = document.querySelector(".badge")
let badge1 = document.querySelector(".badge-1")
let allCheckedDalet = document.getElementById("all-checked-dalet")
let allInput = document.getElementById("all-input")
let inputCheck = document.getElementsByClassName("input-check")
let allCheckedProdcuts = []
let sumPrice = 0;
let cartNumbers = 0;
let sumPrices = 0;
badge.textContent = carts.length
badge1.textContent = carts.length
sumPrice.textContent = cartSum;
cartNumbers.textContentc = cartNumbers;


carts.forEach(el => {
    sumPrices += el.price * el.number;
});


discountInput.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase();
    let discountedPrice = 0;

    carts.forEach(el => {
        if (inputValue === "begzod") {
            discountedPrice += (el.price * 0.8) * el.number;
        } else {
            discountedPrice += el.price * el.number;
        }
    });

    cartSum.textContent = discountedPrice.toFixed(2)
});

function showCart(content, data) {
    content.innerHTML = ""
    data.map((el) => {
        content.innerHTML += `
                          <div class='py-[10px] sm:py-[20px] grid grid-cols-1 sm:flex items-center justify-between gap-[20px] md:gap-[30px] xl:gap-[60px]'>
                            <div class='flex items-center gap-[15px] xl:gap-[20px]'>
                                <input onClick="checkedInput(this, ${el.id})" class='input-check w-[20px] cursor-pointer h-[20px]' type="checkbox" name="" id="" />
                                <img class="w-[60px] h-[60px]" src=${el.image[0]} alt="img" />
                                <div class='flex flex-col gap-[5px]'>
                                    <p class="font-bold">${el.name}</p>
                                    <p class='w-full line-clamp-1 xl:line-clamp-0'>${el.description}</p>
                                    <p class='text-[12px] sm:text-[16px] text-[#55556D] whitespace-nowrap'>Артикул: ${el.article}</p>
                                </div>
                            </div>
                            <div class='flex mt-[-30px] items-center gap-[20px] md:gap-[30px] xl:gap-[55px]'>
                                <p class='whitespace-nowrap'>5 дней</p>
                                <div class='flex flex-col items-center gap-[5px] mt-[30px]'>
                                    <div
                                        class='bg-[#F1F2F4] rounded-[58px] flex px-[2.5px] sm:px-[5px] items-center justify-between w-[120px] h-[40px]'>
                                        <button
                                        onClick="decraese(${el.id})"
                                            class='bg-[white] inline-block pl-[5px] cursor-pointer w-[30px] h-[30px] rounded-[24px]'>
                                            <img src="../assets/cart/Minus, Add.svg" alt="" />
                                        </button>
                                        <span class='flex items-center gap-[10px]'>
                                            ${el.number}
                                        </span>
                                        <button
                                        onClick="increase(${el.id})"
                                            class='bg-[white] inline-block pl-[5px] cursor-pointer w-[30px] h-[30px] rounded-[24px]'>
                                            <img src="../assets/cart/Plus, Add.svg" alt="" />
                                        </button>
                                    </div>
                                    <p class='text-[#7A7680] text-[12px]'>${el.number} шт = ${Math.round(el.price * el.number)} ₽ </p>
                                </div>
                                <div class="w-[30px]">
                                <p class='font-bold text-[18px] md:text-[18px] whitespace-nowrap'>${Math.round(el.price * el.number)} ₽</p>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.74857 5.41668C5.74857 5.00247 5.41278 4.66668 4.99857 4.66668C4.58436 4.66668 4.24857 5.00247 4.24857 5.41668H5.74857ZM15.7527 5.00002C15.7527 4.5858 15.4169 4.25002 15.0027 4.25002C14.5885 4.25002 14.2527 4.5858 14.2527 5.00002H15.7527ZM12.418 8.33265C12.418 7.91844 12.0822 7.58265 11.668 7.58265C11.2538 7.58265 10.918 7.91844 10.918 8.33265H12.418ZM10.918 14.1684C10.918 14.5826 11.2538 14.9184 11.668 14.9184C12.0822 14.9184 12.418 14.5826 12.418 14.1684H10.918ZM9.08329 8.33265C9.08329 7.91844 8.7475 7.58265 8.33329 7.58265C7.91908 7.58265 7.58329 7.91844 7.58329 8.33265H9.08329ZM7.58329 14.1684C7.58329 14.5826 7.91908 14.9184 8.33329 14.9184C8.7475 14.9184 9.08329 14.5826 9.08329 14.1684H7.58329ZM3.74805 4.24793C3.33383 4.24793 2.99805 4.58372 2.99805 4.99793C2.99805 5.41215 3.33383 5.74793 3.74805 5.74793V4.24793ZM16.2533 5.74793C16.6675 5.74793 17.0033 5.41215 17.0033 4.99793C17.0033 4.58372 16.6675 4.24793 16.2533 4.24793V5.74793ZM5.95442 4.76076C5.82343 5.15372 6.0358 5.57846 6.42876 5.70944C6.82171 5.84043 7.24645 5.62806 7.37744 5.2351L5.95442 4.76076ZM7.11945 3.63736L7.83096 3.87454L7.83102 3.87436L7.11945 3.63736ZM8.70178 2.49689L8.7016 3.24689H8.70178V2.49689ZM11.2995 2.49689V3.24689L11.3005 3.24689L11.2995 2.49689ZM12.8835 3.63736L13.5953 3.40098L13.5951 3.40037L12.8835 3.63736ZM12.6236 5.23432C12.7541 5.62742 13.1787 5.84026 13.5718 5.7097C13.9649 5.57915 14.1777 5.15465 14.0471 4.76154L12.6236 5.23432ZM4.24857 5.41668V15.8358H5.74857V5.41668H4.24857ZM4.24857 15.8358C4.24857 17.1708 5.33086 18.2531 6.66593 18.2531V16.7531C6.15929 16.7531 5.74857 16.3424 5.74857 15.8358H4.24857ZM6.66593 18.2531H13.3354V16.7531H6.66593V18.2531ZM13.3354 18.2531C14.6704 18.2531 15.7527 17.1708 15.7527 15.8358H14.2527C14.2527 16.3424 13.842 16.7531 13.3354 16.7531V18.2531ZM15.7527 15.8358V5.00002H14.2527V15.8358H15.7527ZM10.918 8.33265V14.1684H12.418V8.33265H10.918ZM7.58329 8.33265V14.1684H9.08329V8.33265H7.58329ZM3.74805 5.74793H16.2533V4.24793H3.74805V5.74793ZM7.37744 5.2351L7.83096 3.87454L6.40794 3.40019L5.95442 4.76076L7.37744 5.2351ZM7.83102 3.87436C7.95585 3.49958 8.30657 3.24679 8.7016 3.24689L8.70195 1.74689C7.66102 1.74664 6.73682 2.41277 6.40788 3.40036L7.83102 3.87436ZM8.70178 3.24689H11.2995V1.74689H8.70178V3.24689ZM11.3005 3.24689C11.6958 3.2464 12.047 3.49926 12.1719 3.87436L13.5951 3.40037C13.2659 2.41192 12.3404 1.7456 11.2986 1.74689L11.3005 3.24689ZM12.1717 3.87375L12.6236 5.23432L14.0471 4.76154L13.5953 3.40098L12.1717 3.87375Z"
                                        fill="#92979E " />
                                </svg>
                            </div>

                        </div>
                        <hr class='text-[#E3E3E8]' />
        `
    })
}
showCart(cartProducts, carts)

function checkedInput(obj, id) {
    let item = carts.find((el) => el.id === id)
    if (obj.checked === true) {
        allCheckedProdcuts.push(id)
    } else {
        allCheckedProdcuts = allCheckedProdcuts.filter((el) => el.id !== id)
    }
}

allCheckedDalet.addEventListener("click", () => {
    carts = carts.filter((el) => !allCheckedProdcuts.includes(el.id))
    allCheckedProdcuts = []
    badge.textContent = carts.length
    badge1.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    countPrice()
    showCart(cartProducts, carts)
})

allInput.addEventListener("click", () => {
    if (allCheckedProdcuts.length === carts.length) {
        allCheckedProdcuts = []
        for (let el of inputCheck) {
            el.checked = false;
        }
    } else {
        allCheckedProdcuts = []
        for (let el of inputCheck) {
            el.checked = true;
        }
        carts.map((el) => {
            allCheckedProdcuts.push(el.id)
        })
    }
})


function increase(id) {
    carts = carts.map((el) => {
        if (el.id === id) {
            el.number += 1
        }
        return el
    })
    countPrice()
    badge.textContent = carts.length
    badge1.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    showCart(cartProducts, carts)

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
    countPrice()
    badge.textContent = carts.length
    badge1.textContent = carts.length
    localStorage.setItem("carts", JSON.stringify(carts));
    showCart(cartProducts, carts)

}
function countPrice() {
    sumPrice = 0;
    cartNumbers = 0;
    carts.map((el) => {
        sumPrice += el.price * el.number;
        cartNumbers += el.number
    })
    localStorage.setItem("carts", JSON.stringify(carts));
    cartSum.textContent = Math.round(sumPrice)
    cartNumber.textContent = cartNumbers;
    showCart(cartProducts, carts)
}

countPrice()