
let selected
function targetNavbarItems(target){
if(selected){
    console.log('it will run in the first time')
    selected.classList.remove('high')
}
selected = target
selected.classList.add('high')


}
const navbarItems = document.getElementById('navbarItems')
navbarItems.addEventListener('click',(event)=>{
event.preventDefault()
targetNavbarItems(event.target)
})

const login_form = document.getElementById('login_form');
const loginsubmit = document.getElementById('loginsubmit');
const Phonenumber = document.getElementById('Phonenumber');
const password = document.getElementById('password');

login_form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())
    console.log( formObject  ,'formObject')
    localStorage.setItem("LOGIN_DATA",JSON.stringify(formObject))
   const data =  JSON.parse(localStorage.getItem("LOGIN_DATA"))
 
    // const phoneValue = Phonenumber.value;
    // const passwordValue = password.value;
    //  const data = {phoneValue:phoneValue,passwordValue:`${passwordValue}`}
    //  console.log(data,'data')
    // console.log('Phone Number111:', phoneValue);
    // console.log('Password:1111', passwordValue);
    // Add your login logic here
});

