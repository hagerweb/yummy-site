//>>>>>>>>>>>>>>>>>>>>> Nav Section <<<<<<<<<<<<<<<<<<<<<<<<


let close = document.getElementsByClassName("m-c");

let barWidth=  $(".navSideBar").outerWidth();

$(".navSideBar ").animate({"left":`-${barWidth}`},3);
$(".menuBar ").animate({"left":"0px"},3 ,function(){
    new WOW().init();

});

$(".menu").click(function(){
    $(".navData").addClass("wow");
    $(".navData").addClass("bounceInUp");


     if($(".navSideBar").css("left") == "0px" ){
        $(".navSideBar ").animate({"left":`-${barWidth}`},800,function(){
            new WOW().init();

        });
        $(".menuBar ").animate({"left":"0px"},800);

        
        
        $(".menu").removeClass("fa-xmark");
        $(".menu").addClass("fa-bars");
        

        
       


     }else{
        $(".navSideBar ").animate({"left":"0px"},800);
        $(".menuBar ").animate({"left":`${barWidth}`},800);
        $(".menu").removeClass("fa-bars");
        $(".menu").addClass("fa-xmark");

     }
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// >>>>>>>>>>>>>>>>>>>>>>> API <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let mealsImg = document.getElementsByClassName("img-fluid");
let mealsTitle = document.getElementsByClassName("mealsTitle");



async function getData(){
    let dataResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    let mealsData =  await dataResponse.json();
    return mealsData;
    
}

function displayMealsData (data){

    var cartona=``;
    for(var i=0; i<data.meals.length ; i++){

        cartona+= `

        <div class="col-md-3">
        <div class="image-item detilMain" id="imageClick">

        <img src=`+data.meals[i].strMealThumb +` alt=`+data.meals[i].idMeal+` class="img-fluid  rounded-2 image">
    <div class="overlay text-black d-flex align-items-center  rounded-2">

        <h2 class="mealsTitle ms-3">`+data.meals[i].strMeal+`</h2>
    </div>
    </div>
            
        </div>
        `
        
    }

         document.querySelector(".mainMeals").innerHTML = cartona;
         
         $(".detilMain").click(function(eInfo){
            idDetails = eInfo.currentTarget.children[0].alt;
              console.log(idDetails)
            // window.location.href="./catList.html"
        
          
            detailsCall(eInfo.currentTarget.children[0].alt);
       
       
         
                
            
         
        })

       


}




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>> Search <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// $(".search").click(function(){
//     window.location.href = "../search.html";
// })


async function getSearchData(nameMeal){
    let dataSearchResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`);
    let searchData =  await dataSearchResponse.json();
     return searchData;
    
    
}

async  function displaySearchData (data){

    var searchCartona=``;

    for(var i=0; i<data.meals.length ; i++){
        searchCartona+= `

        <div class="col-md-3 mt-5">
        <div class="image-item searchDetails">

        <img src=`+data.meals[i].strMealThumb +` alt=`+data.meals[i].idMeal+` class="img-fluid  rounded-2">
    <div class="overlay text-black d-flex align-items-center  rounded-2">

        <h2 class="mealsTitle ms-3">`+data.meals[i].strMeal+`</h2>
    </div>
    </div>

           
        </div>
        `
    }
         document.querySelector(".searchRow").innerHTML = searchCartona;

         $(".searchDetails").click(function(eInfo){
            idDetails = eInfo.currentTarget.children[0].alt;
              console.log(idDetails)
            // window.location.href="./catList.html"
        
          
            detailsCall(eInfo.currentTarget.children[0].alt);
       
       
         
                
            
         
        })

       
       

       
       
         

}


if( window.location.href.includes("search.html") )
{
    let searchMeal = document.getElementById("searchInput");

searchMeal.addEventListener("keyup" , function(){
    let search = searchMeal.value;
    calling(search);
    // console.log(search)
   
  
    
    
})
}

// -----------------------------------------------------------------------------

// >>>>>>>>>>>>>>>>.. Char Search<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

async function getCharSearchData(char){
    let dataCharSearchResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`);
    let CharData =  await dataCharSearchResponse.json();
     return CharData;
    
    
}
if( window.location.href.includes("search.html") )
{
    let charMeal = document.getElementById("searchCharInput");

    charMeal.addEventListener("keyup" , function(){
    let char = charMeal.value;
    CharCalling(char);
    // console.log(char)
   
  
    
    
})
}
async function CharCalling(char){
   
    let CharItemData =  await getCharSearchData(char);
    
   
   if(window.location.href.includes("search.html"))
   {
       displaySearchData(CharItemData);
       console.log("inside Index")
   }
   

}
// --------------------------------------------------------------------------------------------




// >>>>>>>>>>>>>>>>>>>>>>. Catogary  Section <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let catName ="";
let idDetails ="";
async function getCatogryData(){
    let dataCatogryResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let CatogryData =  await dataCatogryResponse.json();
     return CatogryData;
    // console.log(CatogryData)
    
}

function displayCatogryData(data){

    var Chatogrycartona=``;
    
    for(var i=0; i<data.categories.length ; i++){

        Chatogrycartona+= `

        <div class="col-md-3 mt-4">
                <div class="image-item cat-item" id="Cat-item">

                    <img src=`+data.categories[i].strCategoryThumb+` alt="mm" class="img-fluid  rounded-2">
                <div class="overlay text-black d-flex align-items-center justify-content-center  rounded-2">

                    <h2 class="mealsTitle">`+data.categories[i].strCategory+`</h2>
                </div>
                </div>
            </div>
        `
        

      

    }
         document.querySelector(".catogryRow").innerHTML = Chatogrycartona;

         $(".cat-item").click(function(eInfo){
            catName = eInfo.currentTarget.innerText;
              console.log(catName)
            // window.location.href="./catList.html"
        
          
        ChatCalling(eInfo.currentTarget.innerText);
       
       
         
                
            
         
        })

        

       
        //  let catogryItems = document.getElementById("Cat-item");

}
// ------------------------------------------------------------------


// -------------------------------- Area------------------------------------------

let areaName ="";

async function getAreaData(){
    let dataAreayResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let AreaData =  await dataAreayResponse.json();
     return AreaData;
    //  console.log(AreaData)
    
}
// getAreaData()


function displayAreaData(data){

    var areaCartona=``;
    
    for(var i=0; i<data.meals.length ; i++){

        areaCartona+= `

        <div class="col-md-3 mt-4 text-white text-center">
                <div class="image-item area-item" id="Cat-item">

                    <div><i class="fa-solid fa-house fs-1"></i></div>
                

                    <h2 class="mealsTitle">`+data.meals[i].strArea+`</h2>
                
                </div>
            </div>
        `
        

      

    }
         document.querySelector(".areaRow").innerHTML = areaCartona;
        

         $(".area-item").click(function(eInfo){
            areaName = eInfo.currentTarget.innerText;
              console.log(areaName)
            // window.location.href="./catList.html"
        
          
            areaCalling(eInfo.currentTarget.innerText);
       
       
         
                
            
         
        })

        

       
        //  let catogryItems = document.getElementById("Cat-item");

}
// ------------------------------------------------------------------------------------------






// -------------------------------- Ingradiant------------------------------------------

let ingradName ="";

async function getIngradData(){
    let dataIngarResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let ingradData =  await dataIngarResponse.json();
     return ingradData;
    //  console.log(AreaData)
    
}
// getAreaData()


function displayIngradData(data){

    var ingradCartona=``;
    
    for(var i=0; i<25 ; i++){

        ingradCartona+= `

        <div class="col-md-3 mt-4 text-white text-center">
                <div class="image-item ingrad-item" id=`+data.meals[i].strIngredient+`>

                    <div><i class="fa-solid fa-drumstick-bite fs-1"></i></div>
                

                    <h2 class="mealsTitle">`+data.meals[i].strIngredient+`</h2>
                    <p class="mealsDes">`+data.meals[i].strDescription+`</p>
                
                </div>
            </div>
        `
        

      

    }
         document.querySelector(".ingrdiantRow").innerHTML = ingradCartona;
        

         $(".ingrad-item").click(function(eInfo){
            ingradName = eInfo.currentTarget.id;
              console.log(ingradName)
            // window.location.href="./catList.html"
        
          
            ingradCalling( eInfo.currentTarget.id);
       
       
         
                
            
         
        })

        

       
        //  let catogryItems = document.getElementById("Cat-item");

}
// ------------------------------------------------------------------------------------------




async function calling(nameMeal){
     let mealItemData =  await getData();
     let searcItemData =  await getSearchData(nameMeal);
     let catogryItemData =  await getCatogryData();
     let areaItemData =  await getAreaData();
     let ingradItemData =  await getIngradData();
     console.log(ingradItemData)
    
     
    

    if(window.location.href.includes("index.html") )
    {
        displayMealsData(mealItemData);

    }else if(window.location.href.includes("catogry.html"))
    {
        displayCatogryData(catogryItemData);
        console.log("inside Index")
    }
    // console.log(searcItemData)
    else if(window.location.href.includes("search.html"))
    {
        displaySearchData(searcItemData);
        console.log("inside Index")

    }else if(window.location.href.includes("area.html"))
    {
        displayAreaData(areaItemData);
        
        console.log("inside Index")

    }else if(window.location.href.includes("ingrdiant.html"))
    {
        displayIngradData(ingradItemData);
        
        console.log("inside Index")
    }
    
    

}

if(  window.location.href.includes("index.html") )
{
    console.log("inside Index")
    calling();
}else if(window.location.href.includes("details.html")){
    console.log("inside Index")
    calling();

}else if(window.location.href.includes("catogry.html")){
    console.log("inside Index")
    calling();

}else if(window.location.href.includes("area.html")){
    console.log("hiii Index")

    calling();

}else if(window.location.href.includes("ingrdiant.html")){
    console.log("hiii Index")

    calling();

}





   
//>>>>>>>>>>>>>>>>>>>>>>>>>>>> ChatList <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



async function getCatListData(catName){
    let dataCatListResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
    let ChatListData =  await dataCatListResponse.json();
    return ChatListData;
    // console.log(ChatListData)
    
    
}

function displayChatListData(data){

    var ChatogryLcartona=``;
    
    for(var i=0; i<data.meals.length ; i++){

        ChatogryLcartona+= `

        <div class="col-md-3 mt-4">
                <div class="image-item cat-item catList" id="Cat-item">

                    <img src=`+data.meals[i].strMealThumb+` alt=`+data.meals[i].idMeal+` class="img-fluid  rounded-2">
                <div class="overlay text-black d-flex align-items-center justify-content-center  rounded-2">

                    <h2 class="mealsTitle">`+data.meals[i].strMeal+`</h2>
                    
                </div>
                </div>
                
            </div>
        `
        
        

      

    }
         document.querySelector(".catogryRow").innerHTML = ChatogryLcartona;

         $(".catList").click(function(eInfo){
            idDetails = eInfo.currentTarget.children[0].alt;
              console.log(idDetails)
            // window.location.href="./catList.html"
        
          
             detailsCall(eInfo.currentTarget.children[0].alt);
       
       
         
                
            
         
        })

       
        //  let catogryItems = document.getElementById("Cat-item");

       
       
         

}

async function ChatCalling(catName){
   
    let ChatItemData =  await getCatListData(catName);
    console.log(ChatItemData);
    
   
   if(window.location.href.includes("catogry.html"))
   {
   
    displayChatListData(ChatItemData);
       console.log("inside Index")
   }
   

}
ChatCalling();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//>>>>>>>>>>>>>>>>>>>>>>>>>>>> AreatList <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



async function getAreaListData(areaName){
    let dataAreaListResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    let AreaListData =  await dataAreaListResponse.json();
    return AreaListData;
    // console.log(ChatListData)
    
    
}

function displayAreaListData(data){

    var areaLcartona=``;
    
    for(var i=0; i<data.meals.length ; i++){

        areaLcartona+= `

        <div class="col-md-3 mt-4">
                <div class="image-item cat-item areaList" id="Cat-item">

                    <img src=`+data.meals[i].strMealThumb+` alt=`+data.meals[i].idMeal+` class="img-fluid  rounded-2">
                <div class="overlay text-black d-flex align-items-center justify-content-center  rounded-2">

                    <h2 class="mealsTitle">`+data.meals[i].strMeal+`</h2>
                    
                </div>
                </div>
                
            </div>
        `
        
        

      

    }
         document.querySelector(".areaRow").innerHTML = areaLcartona;

         $(".areaList").click(function(eInfo){
            idDetails = eInfo.currentTarget.children[0].alt;
              console.log(idDetails)
            // window.location.href="./catList.html"
        
          
             detailsCall(eInfo.currentTarget.children[0].alt);
       
       
         
                
            
         
        })

       
        //  let catogryItems = document.getElementById("Cat-item");

       
       
         

}

async function areaCalling(areaName){
   
    let areaItemData =  await getAreaListData(areaName);
    console.log(areaItemData);
    
   
   if(window.location.href.includes("area.html"))
   {
   
    displayAreaListData(areaItemData);
       console.log("inside Index")
   }
   

}
areaCalling();

// --------------------------------------------------------------------------------------


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//>>>>>>>>>>>>>>>>>>>>>>>>>>>> IngradianttList <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



async function getIngradListData(ingradName){
    let dataIngradListResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingradName}`);
    let ingradListData =  await dataIngradListResponse.json();
    return ingradListData;
    // console.log(ChatListData)
    
    
}

function displayIngradListData(data){

    var ingradLcartona=``;
    
    for(var i=0; i<data.meals.length ; i++){

        ingradLcartona+= `

        <div class="col-md-3 mt-4">
                <div class="image-item cat-item ingradList" id="Cat-item">

                    <img src=`+data.meals[i].strMealThumb+` alt=`+data.meals[i].idMeal+` class="img-fluid  rounded-2">
                <div class="overlay text-black d-flex align-items-center justify-content-center  rounded-2">

                    <h2 class="mealsTitle">`+data.meals[i].strMeal+`</h2>
                    
                </div>
                </div>
                
            </div>
        `
        
        

      

    }
         document.querySelector(".ingrdiantRow").innerHTML = ingradLcartona;

         $(".ingradList").click(function(eInfo){
            idDetails = eInfo.currentTarget.children[0].alt;
              console.log(idDetails)
            // window.location.href="./catList.html"
        
          
             detailsCall(eInfo.currentTarget.children[0].alt);
       
       
         
                
            
         
        })

       
        //  let catogryItems = document.getElementById("Cat-item");

       
       
         

}

async function ingradCalling(ingradName){
   
    let ingradItemData =  await getIngradListData(ingradName);
    console.log(ingradItemData);
    
   
   if(window.location.href.includes("ingrdiant.html"))
   {
   
    displayIngradListData(ingradItemData);
       console.log("ingrad Index")
   }
   

}
ingradCalling();




async function getDetailsData(idDetails){
    let dataDetailsResponse =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDetails}`);
    let detailsData =  await dataDetailsResponse.json();
    return detailsData;
    // console.log(detailsData)
    
    
}



async  function displayDetailshData (data){

    

    var detailsCartona=``;

    for(var i=0; i<=data.meals.length ; i++){
        detailsCartona= `

        <div class="col-md-4 text-white">
    
        <img class=" rounded-3 img-fluid" src=`+data.meals[0].strMealThumb+` alt="">

            <h2 class="mt-2 fs-4 text-center">`+data.meals[0].strMeal+`</h2>
    </div>

    <div class="col-md-8 text-white">

        <h2>Instructions</h2>
        <p>`+data.meals[0].strInstructions+`</p>

        <h3 class="fs-4  "><span class="fw-bolder fs-4 text-danger">Area : </span>`+data.meals[0].strArea+`</h3>

        <h3 class="fs-5  te"><span class="fw-bolder fs-5 text-primary">Category : </span>`+data.meals[0].strCategory+`</h3>

        <h3 class="fs-4  text-info">Recipes :</h3>

        <ul class="list-unstyled d-flex g-3 flex-wrap">

            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure1+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure2+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure3+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure4+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure5+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure6+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure7+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure8+`</li>
            <li class="alert alert-info m-2 p-1">`+data.meals[0].strMeasure9+`</li>
        </ul>

        <h3>Tags :</h3>

        <ul class="list-unstyled d-flex g-3 flex-wrap">
            
<li class="alert alert-danger m-2 p-1">`+data.meals[0].strTags+`</li>
<li class="alert alert-danger m-2 p-1">`+data.meals[0].strTags+`</li>
        </ul>

        <a target="_blank" href=`+data.meals[0].strSource+` class="btn btn-success">Source</a>
        <a target="_blank" href=`+data.meals[0].strYoutube+` class="btn btn-danger">Youtube</a>
    </div></div>
        `
        
    }
    
    if(window.location.href.includes("catogry.html"))
    {
        document.querySelector(".catogryRow").innerHTML = detailsCartona;
        
    }else if(window.location.href.includes("index.html"))
    {
        document.querySelector(".mainMeals").innerHTML = detailsCartona;

    }else if(window.location.href.includes("search.html"))
    {
        document.querySelector(".searchRow").innerHTML = detailsCartona;

    }else if(window.location.href.includes("area.html"))
    {
        document.querySelector(".areaRow").innerHTML = detailsCartona;

    }else if(window.location.href.includes("ingrdiant.html"))
    {
        document.querySelector(".ingrdiantRow").innerHTML = detailsCartona;
    }





        
   
        //  console.log(data.meals[0].strMeal);

}

 async function detailsCall(idDetails){
    let detailsItemData =  await getDetailsData(idDetails);
    let mainDetails = await getDetailsData(idDetails);
    let searchDetails = await getDetailsData(idDetails);
    let areaDetails = await getDetailsData(idDetails);
    let ingradDetails = await getDetailsData(idDetails);

    console.log(detailsItemData)

    if(window.location.href.includes("catogry.html"))
    {
        displayDetailshData(detailsItemData);
        console.log("inside Index")

    }else if(window.location.href.includes("index.html"))
    {
        displayDetailshData(mainDetails);
        console.log("inside Index")
        
    }else if(window.location.href.includes("search.html"))
    {
        displayDetailshData(searchDetails);
        console.log("inside Index");

    }else if(window.location.href.includes("area.html"))
    {
        displayDetailshData(areaDetails);
        console.log("inside Index");

    }else if(window.location.href.includes("ingrdiant.html"))
    {
        displayDetailshData(ingradDetails);
        console.log("inside Index");
    }


    

}

detailsCall()
// -----------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>> Contact <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ------------------ Phone ------------------

let nameInput = document.getElementById("nameInput");

function inputNameValidation(){

    var nameRegex = /^[a-zA-Z\-]+$/;

       if (! (nameRegex.test(nameInput.value)) ) {
        document.getElementById("nameAlert").classList.replace("d-none","d-block");
            
       }else{
        document.getElementById("nameAlert").classList.replace("d-block","d-none");
        return allow;

       }
       
}


// ------------------ Phone ------------------

let phoneInput = document.getElementById("phoneInput");

function inputPhoneValidation(){

    var valid = /^(01)[0125][0-9]{8}$/
    

       if (! (valid.test(phoneInput.value)) ) {
        document.getElementById("phoneAlert").classList.replace("d-none","d-block");
            
       }else{

        document.getElementById("phoneAlert").classList.replace("d-block","d-none");
        return allow;
       }
       
}
// ------------------ Email ----------------
let emailInput = document.getElementById("emailInput");

function inputEmailValidation(){

    var valid = /^[a-zA-Z]\w+@[a-zA-Z]{3,15}\.[a-z]{2,5}$/
    

       if (! (valid.test(emailInput.value)) ) {
        document.getElementById("emailAlert").classList.replace("d-none","d-block");
            
       }else{

        document.getElementById("emailAlert").classList.replace("d-block","d-none");
       }
       
}
// ------------------ pass ----------------

let passwordInput = document.getElementById("passwordInput");


function inputsPassValidation(){

    var valid = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
    

       if (! (valid.test(passwordInput.value)) ) {
        document.getElementById("passwordAlert").classList.replace("d-none","d-block");
            
       }else{

        document.getElementById("passwordAlert").classList.replace("d-block","d-none");
        return allow;
       }
       

}

// ------------------ pass ----------------

let allow ="allow"
let rePasswordInput = document.getElementById("rePasswordInput");

function inputsRePassValidation(){

    var valid = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
    

       if (! (valid.test(rePasswordInput.value)) ) {
        document.getElementById("repasswordAlert").classList.replace("d-none","d-block");
        
            
       }else{

        document.getElementById("repasswordAlert").classList.replace("d-block","d-none");
        return allow;
       }
       
}
// ------------------ age ----------------


let ageInput = document.getElementById("ageInput");

function inputsAgeValidation(){

    var age_regex=  /^(0?[1-9]|[1-9][0-9]|[1][0-2][0-9]|130)$/;
    

       if (!(age_regex.test(ageInput.value)) ) {
        document.getElementById("ageAlert").classList.replace("d-none","d-block");
      
            
       }else{

        document.getElementById("ageAlert").classList.replace("d-block","d-none");
        return allow;
       }
       
}


if( inputsPassValidation== "allow" && inputsRePassValidation=="all" &&inputsAgeValidation=="allow" && inputEmailValidation=="allow"){
    document.getElementById("bttn").innerHTML = `<button id="submitBtn"  class="btn btn-outline-danger px-3 mt-3">Submit</button></div>
    </div>`
}




// >>>>>>>>>>>>>Loading Screen <<<<<<<<<<<<<<<<<<<
$(document).ready(function(){
    $(".loading").fadeOut(1500);
    $("body").css("overflow" , "auto")
})