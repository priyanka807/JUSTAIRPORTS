
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













document.getElementById("contact_form").addEventListener('submit',(event)=>{
    event.preventDefault();

    const formData = new FormData(event.target)
  
    const formObject = Object.fromEntries(formData.entries())
 
    let allInputData = true 
    for(const values of Object.values(formObject)){
if(values.trim()===""){
    allInputData = false
    break;
}

    }

    if(!allInputData){
        alert("Please Fill  Out All Input Fields ")
    }else{
        alert("Form Submitted Successfully ")
        localStorage.setItem("contactData",JSON.stringify(formObject))
        const contactData =  JSON.parse(localStorage.getItem("contactData")) 
    }


event.target.reset()
})

/* login javascript  start */

login_form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())
    window.location  = "./contact.html"

  
   
});


      /* login javascript  end */