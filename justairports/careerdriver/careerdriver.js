

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
document.getElementById('apply_driver_form').addEventListener('submit',(event)=>{
    event.preventDefault();
   let formData = new FormData(event.target)
   let formObject = Object.fromEntries(formData.entries())

   let allFields = true 
   for(const values of Object.values(formObject)){
   if(values.trim()===""){
    allFields = false
break;
   }

   }

   if(!allFields){
    alert("Please Fill  Out All Input FIelds")

   }else{
   

    alert("Form Submitted Successfully")
    localStorage.setItem("Career_Driver_Data",JSON.stringify(formObject))
    const Career_Driver_Data =    JSON.parse(localStorage.getItem("Career_Driver_Data"))
 
    
   }

   event.target.reset();
})


/* login javascript  start */



login_form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())
    localStorage.setItem("LOGIN_DATA",JSON.stringify(formObject))
   const data =  JSON.parse(localStorage.getItem("LOGIN_DATA"))
   window.location  = "./careerdriver.html"

   
});


      /* login javascript  end */