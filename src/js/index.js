
document.querySelector("#dark-toggle").addEventListener("change" , (e)=>{
    if(e.target.checked){
        console.log("Dark Mood");
        document.querySelector("html").classList.add("dark")
    }else{
        console.log("Light Mood");
        document.querySelector("html").classList.remove("dark")
    }
})
const setup = () => {
            return {
            isSidebarOpen: false,
            currentSidebarTab: null,
            isSettingsPanelOpen: false,
            isSubHeaderOpen: false,
            watchScreen() {
                if (window.innerWidth <= 1024) {
                this.isSidebarOpen = false
                }
            },
        }
    }
const home = document.querySelector(".home")
$(()=>{
    $(".loader").fadeOut(1000 , ()=>{
        home.classList.remove("hidden")
    })
})
const data = document.getElementById("data");
const search = document.querySelector(".search");
let submitBtn;
let submitBtn2;

async function getMeals(trem){
        data.innerHTML = ""
        search.innerHTML = ""
        home.classList.add("hidden")
        $(".loading-screen .loader").fadeIn(300)
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${trem}`)
        const res = await api.json()
        displayMeals(res.meals.slice(0, 20) , "0")
        $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
        })
}
getMeals("")

function displayMeals(x , t){
    let back = ""
    switch (t) {
        case "0":
            back=""
            break;
        case "1":
            back=`
            <button
                onclick="getCategories()"
                type="button"
                class="bg-white text-center w-24 rounded-2xl h-8  font-sans text-black  group absolute top-[-10px] right-2"
                >
                <div
                    class="bg-red-400 dark:bg-black rounded-xl h-6 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[90px] z-10 duration-500"
                >
                    <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    
                    >
                    <path
                        fill="#fff"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                        fill="#fff"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                    </svg>
                </div>
                <p class="translate-x-2 text-sm">Go Back</p>
            </button>
            `
            break
        case"2":
            back=`
            <button
                onclick="getArea()"
                type="button"
                class="bg-white text-center w-24 rounded-2xl h-8  font-sans text-black  group absolute top-[-10px] right-2"
                >
                <div
                    class="bg-red-400 dark:bg-black rounded-xl h-6 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[90px] z-10 duration-500"
                >
                    <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    
                    >
                    <path
                        fill="#fff"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                        fill="#fff"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                    </svg>
                </div>
                <p class="translate-x-2 text-sm">Go Back</p>
            </button>
            `
            break
        case"3":
            back=`
            <button
                onclick="getIngredients()"
                type="button"
                class="bg-white text-center w-24 rounded-2xl h-8  font-sans text-black  group absolute top-[-10px] right-2"
                >
                <div
                    class="bg-red-400 dark:bg-black rounded-xl h-6 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[90px] z-10 duration-500"
                >
                    <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    
                    >
                    <path
                        fill="#fff"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                        fill="#fff"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                    </svg>
                </div>
                <p class="translate-x-2 text-sm">Go Back</p>
            </button>
            `
        default:
            break;
    }
    let cartoone = ""
    
    for(let i=0 ; i < x.length ; i++){
        cartoone += `
            <div class="w-full md:w-1/2 lg:w-1/3 p-3 rounded-lg group mt-4">
                                        <div class="inner rounded-lg relative overflow-hidden" onclick="getMealDetails('${x[i].idMeal}')">
                                            <img src="${x[i].strMealThumb}" alt="" class="w-full rounded-lg">
                                            <div class="layer absolute inset-0  z-10 dark:text-black text-red-500 bg-[#ffffffb9] top-[150%] group-hover:top-0 transition-all  flex  items-center text-3xl md:text-2xl lg:text-xl font-medium px-4">
                                                ${x[i].strMeal}
                                            </div>
                                        </div>
                                    </div>
                                    ${back}
        `
        
    }
    data.innerHTML = cartoone
}


async function getCategories(){
    search.innerHTML = ""
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const res = await api.json()
    displayCategories(res.categories.slice(0, 20))
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
    
}
async function getCategoriesMeals(x){
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
    const res = await api.json()
    displayMeals(res.meals.slice(0, 20) , "1")
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
}
function displayCategories(x){
    data.innerHTML=""
    let cartoone = ""
    for(let i=0 ; i < x.length ; i++){
        cartoone += `
        <div class="w-full md:w-1/2 lg:w-1/3 p-3 rounded-lg group ">
                                        <div class="inner rounded-lg relative overflow-hidden cursor-pointer" onclick="getCategoriesMeals('${x[i].strCategory}')">
                                            <img src="${x[i].strCategoryThumb}" alt="" class="w-full rounded-lg">
                                            <div class="layer absolute inset-0  z-10 bg-[#ffffffa4] top-[150%] group-hover:top-0 transition-all  flex  flex-col justify-center items-center   px-4 text-center">
                                                <h3 class="text-3xl md:text-2xl lg:text-xl font-bold mb-5 dark:text-black text-red-600">${x[i].strCategory}</h3>
                                                <p class="text-xl md:text-lg lg:text-base font-medium dark:text-slate-700 text-red-500">${x[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                                            </div>
                                        </div>
                                    </div>
        `
    }
    data.innerHTML = cartoone
}

async function getArea(){
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    search.innerHTML = ""
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    const res = await api.json()
    displayArea(res.meals.slice(0, 20))
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
}
async function getAreaMeals(x){
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`)
    const res = await api.json()
    displayMeals(res.meals.slice(0, 20) , "2")
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
}

function displayArea(x){
    data.innerHTML = ""
    let cartoone = ""
    for(let i=0 ; i < x.length ; i++){
        cartoone += `
        <div class="w-full md:w-1/2 lg:w-1/3 p-3 rounded-lg group ">
                                        <div class="inner rounded-lg  cursor-pointer flex flex-wrap flex-col justify-center items-center" onclick="getAreaMeals('${x[i].strArea}')">
                                                <i class="fa-solid fa-house-laptop fa-4x dark:text-white text-red-500"></i>
                                                <h3 class="text-xl md:text-lg lg:text-base font-medium dark:text-white text-red-600">${x[i].strArea}</h3>
                                            </div>
                                        </div>
                                    </div>
        `
    }
    data.innerHTML = cartoone
}
async function getIngredients(){
    search.innerHTML = ""
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    const res = await api.json()
    displayIngredients(res.meals.slice(0, 20))
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
}
async function getIngredientsMeals(x){
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`)
    const res = await api.json()
    displayMeals(res.meals.slice(0, 20) , "3")
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
}
function displayIngredients(x){
    data.innerHTML=""
    let cartoone = ""
    for(let i=0 ; i < x.length ; i++){
        cartoone += `
        <div class="w-full md:w-1/2 lg:w-1/3 p-3 rounded-lg group ">
                                        <div class="inner rounded-lg relative overflow-hidden cursor-pointer" onclick="getIngredientsMeals('${x[i].strIngredient}')">
                                            <img src="https://www.themealdb.com/images/ingredients/${x[i].strIngredient}.png" alt="" class="w-full rounded-lg">
                                            <div class="layer absolute inset-0  z-10 bg-[#ffffffa9] top-[150%] group-hover:top-0 transition-all  flex  flex-col justify-center items-center   px-4 text-center">
                                                <h3 class="text-3xl md:text-2xl lg:text-xl font-bold mb-5 dark:text-black text-red-600">${x[i].strIngredient}</h3>
                                            </div>
                                        </div>
                                    </div>
        `
    }
    data.innerHTML = cartoone
}


async function getMealDetails(x){
    search.innerHTML = ""
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`)
    const res = await api.json()
    console.log(res.meals[0]);
    displayMealDetails(res.meals[0])
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
}
function displayMealDetails(x){
    data.innerHTML = ""
    let ingredients = ``

    for (let i = 1; i <= 20; i++) {
        if (x[`strIngredient${i}`]) {
            ingredients += `
            <li class="rounded-lg bg-sky-400 text-white p-2 mt-3 mr-2">${x[`strMeasure${i}`]} ${x[`strIngredient${i}`]}</li>
            `
        }
    }
    let tags = x.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="rounded-lg bg-red-400 text-white p-2 mt-3 mr-2">${tags[i]}</li>
        `
    }
    let cartoone = `
    <div class="w-full md:w-1/3 p-3 relative">
                                            <div class="inner ">
                                                <img src="${x.strMealThumb}" alt="" class="w-full rounded-lg">
                                                <h2 class="font-semibold text-3xl mt-4 dark:text-white">${x.strMeal}</h2>
                                            </div>
                                        </div>
                                        <div class="w-full md:w-2/3">
                                            <div class="inner p-3 dark:text-white">
                                                <h2 class="text-3xl font-semibold">Instructions</h2>
                                                <p class="mt-3">${x.strInstructions}</p>
                                                <h3 class="text-3xl mt-3"><span class="font-semibold ">Area : </span>${x.strArea}</h3>
                                                <h3 class="text-3xl mt-3"><span class="font-semibold ">Category : </span>${x.strCategory}</h3>
                                                <h3 class="text-3xl mt-3 font-semibold">Recipes :</h3>
                                                <ul class="flex flex-wrap">
                                                    ${ingredients}
                                                </ul>
                                                <h3 class="text-3xl mt-3 font-semibold">Tags :</h3>
                                                <ul class="flex flex-wrap">
                                                    ${tagsStr}
                                                </ul>
                                                <div class="mt-5 flex">
                                                    <div class="flex items-center gap-4">
                                                        <div class="w-full h-40 flex items-center justify-center cursor-pointer">
                                                            <a
                                                                href="${x.strSource}" target="_blank" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-white dark:text-black transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 dark:bg-white bg-black  dark:hover:text-gray-200 dark:shadow-none group "
                                                            >
                                                                <span
                                                                class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-400 group-hover:h-full"
                                                                ></span>
                                                                <span
                                                                class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                                                                >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    class="w-5 h-5 text-white dark:text-black"
                                                                >
                                                                    <path
                                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                                    stroke-width="2"
                                                                    stroke-linejoin="round"
                                                                    stroke-linecap="round"
                                                                    ></path>
                                                                </svg>
                                                                </span>
                                                                <span
                                                                class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                                                                >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    class="w-5 h-5 text-white"
                                                                >
                                                                    <path
                                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                                    stroke-width="2"
                                                                    stroke-linejoin="round"
                                                                    stroke-linecap="round"
                                                                    ></path>
                                                                </svg>
                                                                </span>
                                                                <span
                                                                class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                                                                >Source</span
                                                                >
                                                            </a>
                                                            </div>
                                                        <div class="social-button">
                                                            <a href="${x.strYoutube}" target="_blank" class="relative w-12 h-12 rounded-full group block">
                                                            <div
                                                                class="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                                                            ></div>
                                                            <div
                                                                class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
                                                            >
                                                                <svg
                                                                fill="none"
                                                                viewBox="0 0 30 22"
                                                                height="22"
                                                                width="30"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                <path
                                                                    d="M18.9945 9.70081L12.5775 6.18974C12.2085 5.98783 11.7724 5.99538 11.4108 6.20965C11.0489 6.42415 10.833 6.80311 10.833 7.22372V14.1857C10.833 14.6043 11.0476 14.9826 11.407 15.1973C11.5947 15.3094 11.8028 15.3657 12.0113 15.3657C12.2064 15.3654 12.3984 15.3166 12.57 15.2237L18.9872 11.7731C19.1742 11.6726 19.3305 11.5235 19.4397 11.3415C19.5489 11.1596 19.6069 10.9515 19.6077 10.7393C19.6086 10.527 19.552 10.3184 19.4441 10.1356C19.3362 9.95283 19.1808 9.80259 18.9945 9.70081ZM12.5352 13.3099V8.10662L17.3312 10.7308L12.5352 13.3099Z"
                                                                    class="group-hover:fill-[#171543] fill-white duration-300"
                                                                ></path>
                                                                <path
                                                                    d="M28.8325 5.19239L28.8312 5.17912C28.8065 4.94533 28.5617 2.86581 27.5508 1.80806C26.3822 0.56396 25.0574 0.412829 24.4203 0.340384C24.3722 0.335071 24.3241 0.329304 24.276 0.323081L24.2253 0.317805C20.3854 0.0385769 14.5862 0.000453846 14.5282 0.000226923L14.5231 0L14.518 0.000226923C14.4599 0.000453846 8.66074 0.0385769 4.7862 0.317805L4.73503 0.323081C4.69379 0.328641 4.64834 0.333747 4.59893 0.339533C3.96916 0.412149 2.65857 0.563563 1.48674 1.8526C0.523851 2.89905 0.245531 4.93404 0.216938 5.16272L0.213648 5.19239C0.204968 5.28969 0 7.60572 0 9.93077V12.1042C0 14.4293 0.204968 16.7453 0.213648 16.8428L0.21518 16.8574C0.239801 17.0875 0.484424 19.1289 1.49071 20.1871C2.58947 21.3895 3.97869 21.5486 4.72595 21.6341C4.84407 21.6476 4.94578 21.6592 5.01511 21.6714L5.08228 21.6807C7.29943 21.8916 14.2509 21.9955 14.5456 21.9998L14.5545 22L14.5634 21.9998C14.6214 21.9995 20.4204 21.9614 24.2604 21.6822L24.3111 21.6769C24.3597 21.6705 24.4142 21.6647 24.474 21.6585C25.1003 21.592 26.4037 21.454 27.5594 20.1823C28.5223 19.1358 28.8008 17.1007 28.8292 16.8723L28.8325 16.8426C28.8412 16.7451 29.0464 14.4293 29.0464 12.1042V9.93077C29.0461 7.60566 28.8412 5.28991 28.8325 5.19239ZM27.344 12.1042C27.344 14.2563 27.1561 16.4725 27.1383 16.6759C27.0661 17.2364 26.7724 18.5239 26.3033 19.0338C25.58 19.8296 24.837 19.9085 24.2945 19.9659C24.234 19.9721 24.1736 19.9789 24.1132 19.9863C20.3991 20.2549 14.8189 20.296 14.5619 20.2976C14.2736 20.2934 7.42372 20.1886 5.2742 19.989C5.16403 19.971 5.04501 19.9572 4.91963 19.9431C4.2834 19.8702 3.41247 19.7704 2.74282 19.0338L2.72705 19.017C2.26611 18.5368 1.98092 17.3328 1.90842 16.6826C1.89492 16.5288 1.70215 14.2864 1.70215 12.1042V9.93077C1.70215 7.78124 1.88964 5.56738 1.9078 5.35975C1.99403 4.69957 2.29317 3.49007 2.74282 3.00117C3.48826 2.18124 4.27432 2.09041 4.7942 2.03034C4.84384 2.02455 4.89013 2.01927 4.93291 2.01371C8.70107 1.74379 14.3214 1.70368 14.5231 1.70215C14.7247 1.70345 20.3431 1.74379 24.0778 2.01371C24.1236 2.0195 24.1737 2.02523 24.2275 2.03147C24.7623 2.0924 25.5705 2.18459 26.3122 2.9757L26.319 2.98301C26.78 3.46324 27.0652 4.68828 27.1376 5.35152C27.1505 5.4967 27.344 7.74397 27.344 9.93077V12.1042Z"
                                                                    class="group-hover:fill-[#171543] fill-white duration-300"
                                                                ></path>
                                                                </svg>
                                                            </div>
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class=" absolute top-3 right-3 cursor-pointer" onclick="getMeals('')">
                                            <i class="fa-regular fa-circle-xmark text-2xl dark:text-white text-red-400"></i>
                                        </div>
    `
    data.innerHTML =cartoone
}

function showSearch(){
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(1000)
    data.innerHTML = ""
    search.innerHTML = `
    <div class="flex flex-wrap justify-between w-full">
                                            <div class="flex flex-col-reverse w-1/2">
                                                <input
                                                    placeholder="Search by Name"
                                                    class="peer outline-none border rounded-lg w-10/12 dark:bg-slate-200 dark:border-white dark:placeholder:text-black bg-red-100 pl-2 py-1 duration-500 border-red-600 focus:border-dashed relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
                                                    type="text"
                                                    oninput="searchByName(this.value)"
                                                />
                                                <span
                                                    class="pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0 dark:text-white text-red-400 mb-2"
                                                    >Search by Name</span
                                                >
                                            </div>
                                            <div class="flex flex-col-reverse w-1/2">
                                                <input
                                                    placeholder="Search by First Letter"
                                                    class="peer outline-none border rounded-lg w-11/12 bg-red-100 pl-2 py-1 duration-500 dark:bg-slate-200 dark:border-white dark:placeholder:text-black border-red-600 focus:border-dashed relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
                                                    type="text"
                                                    oninput="searchByFirstLetter(this.value)"
                                                    maxlength="1"
                                                />
                                                <span
                                                    class="pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0 dark:text-white text-red-400 mb-2"
                                                    >Search by First Letter</span
                                                >
                                            </div>
                                        </div>
    `
    $(".loading-screen .loader").fadeOut(500 , ()=>{
        home.classList.remove("hidden")
    })
}
async function searchByName(trem){
        data.innerHTML = ""
        home.classList.add("hidden")
        $(".loading-screen .loader").fadeIn(300)
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${trem}`)
        const res = await api.json()
        displayMeals(res.meals.slice(0, 20) , "0")
        $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
        })
}
async function searchByFirstLetter(trem){
        home.classList.add("hidden")
        $(".loading-screen .loader").fadeIn(300)
        trem == "" ? trem = "a" : "";
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${trem}`)
        const res = await api.json()
        displayMeals(res.meals , "0")
        $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
}

function showForm(){
    home.classList.add("hidden")
    $(".loading-screen .loader").fadeIn(300)
    data.innerHTML = ""
    search.innerHTML = ""
    data.innerHTML = `
    <div class="flex flex-wrap items-center justify-center w-full flex-col mt-12">
                                            <div class="flex flex-wrap justify-between w-1/2">
                                                <div class="w-full lg:w-[48%] mt-6">
                                                    <input
                                                    placeholder="Enter Your Name"
                                                    class=" w-full  bg-[#fff]  border-2 rounded-lg text-black px-6 py-3 text-base  hover:border-[#fff] cursor-pointer transition"
                                                    type="text"
                                                    id="nameInput"
                                                    onkeyup="inputsValidation()"
                                                    />
                                                    <div id="nameAlert" class=" text-center dark:bg-slate-400  bg-red-500 mt-2 rounded-lg text-white h-28  text-sm  justify-center items-center hidden">
                                                        Special characters and numbers not allowed
                                                    </div>
                                                </div>
                                                <div class="w-full lg:w-[48%] mt-6">
                                                    <input
                                                    placeholder="Enter Your Email"
                                                    class=" w-full  bg-[#fff]  border-2  rounded-lg text-black px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                                                    type="email"
                                                    id="emailInput"
                                                    onkeyup="inputsValidation()"
                                                    />
                                                    <div id="emailAlert" class=" text-center dark:bg-slate-400  bg-red-500 mt-2 rounded-lg text-white h-28  justify-center items-center hidden">
                                                        Email not valid *exemple@yyy.zzz
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-wrap justify-between w-1/2 mt-2">
                                                <div class="w-full lg:w-[48%] mt-6">
                                                    <input
                                                    placeholder="Enter Your Phone"
                                                    class=" w-full bg-[#fff]  border-2  rounded-lg text-black px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                                                    type="tel"
                                                    id="phoneInput"
                                                    onkeyup="inputsValidation()"
                                                    />
                                                    <div id="phoneAlert" class=" text-center dark:bg-slate-400  bg-red-500 mt-2 rounded-lg text-white h-28  justify-center items-center hidden">
                                                        Enter valid Phone Number
                                                    </div>
                                                </div>
                                                <div class="w-full lg:w-[48%] mt-6">
                                                    <input
                                                    placeholder="Enter Your Age"
                                                    class=" w-full bg-[#fff]  border-2  rounded-lg text-black px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                                                    type="number"
                                                    id="ageInput"
                                                    onkeyup="inputsValidation()"
                                                    />
                                                    <div id="ageAlert" class=" text-center dark:bg-slate-400  bg-red-500 mt-2 rounded-lg text-white h-28  justify-center items-center hidden">
                                                        Enter valid age
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-wrap justify-between w-1/2 mt-2">
                                                <div class="w-full lg:w-[48%] mt-6">
                                                    <input
                                                    placeholder="Enter Your Password"
                                                    class=" w-full bg-[#fff]  border-2  rounded-lg text-black px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                                                    type="password"
                                                    id="passwordInput"
                                                    onkeyup="inputsValidation()"
                                                    />
                                                    <div id="passwordAlert" class=" text-center dark:bg-slate-400  bg-red-500 mt-2 rounded-lg text-white h-36  justify-center items-center hidden">
                                                        Enter valid password *Minimum eight characters, at least one letter uppercase , one lowercase letter , one special character (such as !, #, $, %, &, or ?) and one number:*
                                                    </div>
                                                </div>
                                                <div class="w-full lg:w-[48%] mt-6">
                                                    <input
                                                    placeholder="Repassword"
                                                    class=" w-full  bg-[#fff]  border-2  rounded-lg text-black px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                                                    type="password"
                                                    id="repasswordInput"
                                                    onkeyup="inputsValidation()"
                                                    />
                                                    <div id="repasswordAlert" class=" text-center dark:bg-slate-400  bg-red-500 mt-2 rounded-lg text-white h-28  justify-center items-center hidden">
                                                        Enter valid repassword 
                                                    </div>
                                                </div>
                                            </div>
                                            <button 
                                            id="submitBtn"
                                            class="bg-[#292929] hidden  mt-6 rounded-lg text-white px-6 py-3 text-base  cursor-pointer transition"
                                            >
                                            Submit
                                            </button>
                                            <button 
                                            id="submitBtn2"
                                            class="bg-white   mt-6 rounded-lg text-black px-6 py-3 text-base  cursor-pointer transition"
                                            >
                                            Submit
                                            </button>
                                        </div>
    `
    $(".loading-screen .loader").fadeOut(300 , ()=>{
        home.classList.remove("hidden")
    })
    submitBtn = document.getElementById("submitBtn")
    submitBtn2 = document.getElementById("submitBtn2")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^01[0-2]\d{1,8}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}

function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("flex", "hidden")

        } else {
            document.getElementById("nameAlert").classList.replace("hidden", "flex")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("flex", "hidden")
        } else {
            document.getElementById("emailAlert").classList.replace("hidden", "flex")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("flex", "hidden")
        } else {
            document.getElementById("phoneAlert").classList.replace("hidden", "flex")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("flex", "hidden")
        } else {
            document.getElementById("ageAlert").classList.replace("hidden", "flex")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("flex", "hidden")
        } else {
            document.getElementById("passwordAlert").classList.replace("hidden", "flex")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("flex", "hidden")
        } else {
            document.getElementById("repasswordAlert").classList.replace("hidden", "flex")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.classList.remove("hidden")
        submitBtn2.classList.add("hidden")
    } else {
        submitBtn.classList.add("hidden")
        submitBtn2.classList.remove("hidden")
    }
}





