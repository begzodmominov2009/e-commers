let homeCategories = document.getElementById("home-categories")
function showCategories(content, data) {
    data.map((el) => {
        content.innerHTML += `
         <a href="./Pages/category.html?cetegoryName=${el.name}"
         class="text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px]">
         ${el.name}
         </a>
        `
    })
} 
showCategories(homeCategories, categoriesData)