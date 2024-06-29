

// <!-- JAVASCRIPT LOGIC FOR NAVBAR SECTION -->


let selected 
function  activeClass(targetElement){
 
  if(selected){
      selected.classList.remove('high')
    }
  
 
    selected = targetElement
   

    selected.classList.add('high')
  
}


document.getElementById('navbarItems').addEventListener("click",function(event){
  const targetElement = event.target
     activeClass(targetElement)

})






menu_brand.addEventListener('click', function (event) {

  menu_brand.style.color = '#fff';
});


menu_item.addEventListener('click',function(event){
 
borderWhite.classList.toggle('border_white')

})


document.querySelectorAll('.document-item').forEach((item)=>{
item.addEventListener('click',(event)=>{
event.preventDefault();
event.stopPropagation()
})
})

// <!-- JAVASCRIPT LOGIC FOR NAVBAR SECTION -->













// <!-- online welcome_section    javascript   start-->
const pick_up = document.getElementById("pick_up");
const drop_off = document.getElementById("drop_off");
const baby_sitting = document.getElementById("baby_sitting");
const baby_sitting_dropdown = document.getElementById(
  "baby_sitting_dropdown"
).value;

let selectedJourneryType = document.querySelector(
  'input[name="journey_type"]:checked'
).value;

let selectedPaymentType = document.querySelector(
  'input[name="payment_type"]:checked'
).value;

const get_estimate = document.getElementById("get_estimate");

const selectAirportStation = document.querySelectorAll(
  ".select_airpot_station"
);
selectAirportStation.forEach((elem) => {
  elem.addEventListener("click", function () {
    document
      .querySelector(".active_select_airpot_station")
      ?.classList.remove("active_select_airpot_station");
    elem.classList.add("active_select_airpot_station");
    if (
      elem.querySelector('input[type="radio"]').value === "to_airport"
    ) {
      selectedJourneryType = elem.querySelector(
        'input[type="radio"]'
      ).value;

      pick_up.style.display = "block";
      drop_off.style.display = "none";
    } else {
      selectedJourneryType = elem.querySelector(
        'input[type="radio"]'
      ).value;

      pick_up.style.display = "none";
      drop_off.style.display = "block";
    }
  });
});

const select_payment_oftion = document.querySelectorAll(
  ".select_payment_oftion"
);
select_payment_oftion.forEach((elem) => {
  elem.addEventListener("click", function () {
    document
      .querySelector(".active_payment_type")
      ?.classList.remove("active_payment_type");
    elem.classList.add("active_payment_type");
    selectedPaymentType = elem.querySelector('input[type="radio"]').value;
  });
});

baby_sitting.addEventListener("change", function () {
  if (baby_sitting.checked) {
    baby_sitting_dropdown.classList.remove("hidden");
  } else {
    baby_sitting_dropdown.classList.add("hidden");
  }
});

document
  .getElementById("airport_payment_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  
    const select_pick_post =
      document.getElementById("select_pick_post").value;

    const select_pick_airport = document.getElementById(
      "select_pick_airport"
    ).value;

    const select_drop_post =
      document.getElementById("select_drop_post").value;
    const select_drop_airport = document.getElementById(
      "select_drop_airport"
    ).value;
    const passengers = document.getElementById("passengers").value;
    const check_in_luggage =
      document.getElementById("check_in_luggage").value;
    const hand_luggage = document.getElementById("hand_luggage").value;
    const no_of_childs = document.getElementById("no_of_childs").value;
    console.log(select_drop_airport, select_drop_post, "select-drop");
    console.log(select_pick_airport, select_pick_post, "select-pick");
    let airport_payment_form ;

    if(selectedJourneryType==="to_airport"){
      airport_payment_form  =  {selectedJourneryType:`${selectedJourneryType}`,select_pick_airport:`${select_pick_airport}`,select_pick_post:`${select_pick_post}`,selectedPaymentType:`${selectedPaymentType} `, 
      passengers:`${passengers}`,check_in_luggage:`${check_in_luggage}`,hand_luggage:`${hand_luggage }`,no_of_childs:`${no_of_childs}`}

    }else{
      airport_payment_form  =   {selectedJourneryType:`${selectedJourneryType}`,select_drop_airport:`${select_drop_airport}`,select_drop_post:`${select_drop_post}`,selectedPaymentType:`${selectedPaymentType} `, 
      passengers:`${passengers}`,check_in_luggage:`${check_in_luggage}`,hand_luggage:`${hand_luggage }`,no_of_childs:`${no_of_childs}`}

  

    }
localStorage.setItem("airport_payment_form",JSON.stringify(airport_payment_form))
const airport_payment = JSON.parse( localStorage.getItem("airport_payment_form")
)
   
  
  });

// <!--online welcome_section     javascript   end-->


/* login javascript  start */




login_form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())
    console.log( formObject  ,'formObject')
    localStorage.setItem("LOGIN_DATA",JSON.stringify(formObject))
   const data =  JSON.parse(localStorage.getItem("LOGIN_DATA"))
   window.location  = "./onlinebookingpage.html"

   
});

      /* login javascript  end */