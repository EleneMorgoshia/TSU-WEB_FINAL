//having the access to the html elements
const motherContainer = document.getElementById('motherContainer')
const signInContainer = document.getElementById("signInContainer")
const registrationContainer = document.getElementById("registrationContainer")
const signedInUserDiv = document.getElementById("signedInUserDiv")


const signInClose = document.getElementById("signInClose")
const regClose = document.getElementById("regClose")
const signedInClose = document.getElementById("signedInClose")

const openCta = document.getElementById("openCta") // user Icon

const regBtnInSignPage = document.getElementById("regBtnInSignPage")
const backToSignInBtn = document.getElementById("backToSignInBtn")

const userNameDisplay = document.getElementById("userNameDisplay")
const userPasswordDisplay = document.getElementById("userPasswordDisplay")

let isSigned = JSON.parse(localStorage.getItem('isSigned')) || false;

signInClose.addEventListener("click", () => {
  motherContainer.style.display = 'none'
  signedInUserDiv.style.display = 'none'
})

regClose.addEventListener('click', () => {
  motherContainer.style.display = 'none'
  signedInUserDiv.style.display = 'none'
})


signedInClose.addEventListener('click', () => {
  motherContainer.style.display = 'none'
  signedInUserDiv.style.display = 'none'
})

openCta.addEventListener('click', () => {
  let isSigned = JSON.parse(localStorage.getItem('isSigned')) 
  if(isSigned){
    signedInUserDiv.style.display = 'flex'
    signInContainer.style.display= 'none';
    registrationContainer.style.display = 'none'
    motherContainer.style.display = 'flex';
    motherContainer.style.justifyContent = 'center';
    motherContainer.style.alignItems = 'center';
  }else if(!isSigned) {
     registrationContainer.style.display = 'none'
    signedInUserDiv.style.display = 'none'
    signInContainer.style.display= 'flex';
    motherContainer.style.display = 'flex';
    motherContainer.style.justifyContent = 'center';
    motherContainer.style.alignItems = 'center'
  }
})

regBtnInSignPage.addEventListener("click",() => {
  registrationContainer.style.display = 'flex'
  signInContainer.style.display = 'none'
  motherContainer.style.display = 'flex'
  motherContainer.style.justifyContent = 'center'
  motherContainer.style.alignItems = 'center'
})


backToSignInBtn.addEventListener("click" , () => {
  registrationContainer.style.display = 'none'
  signInContainer.style.display = 'flex'
  motherContainer.style.display = 'flex'
  motherContainer.style.justifyContent = 'center'
  motherContainer.style.alignItems = 'center'
})


//REGISTRATION
const registrationName = document.getElementById("registrationName")
const registrationPassword = document.getElementById("registrationPassword")
const regitrationButton = document.getElementById("regitrationButton")

//inputs
const registrationLastname = document.getElementById("registrationLastname")
const registrationEmail = document.getElementById('registrationEmail')

//icons
const userIcon = document.getElementById("userIcon")


// let registeredUsers = JSON.parse(localStorage.getItem('user'))
let registeredUsers = JSON.parse(localStorage.getItem('user')) || [];
regitrationButton.addEventListener('click', (e) => {
  e.preventDefault()

  const userName = registrationName.value
  const userPassword = registrationPassword.value
  const userLastName = registrationLastname.value
  const userEmail = registrationEmail.value
  // if user does not enter the input value
  if (!userName || !userPassword || !userLastName || !userEmail) {
    alert('Please enter all values')
  }else{
    //creating object where user's info will be saved
      const userInfo = {
        name:userName,
        password: userPassword
      }  

      registeredUsers.push(userInfo);
      localStorage.setItem('user',JSON.stringify(registeredUsers))
      
      alert('You registered successfully')
  }

  registrationLastname.value = ''
  registrationName.value = ""
  registrationEmail.value = ''
  registrationPassword.value = ""

  // console.log(registeredUsers)
})

  console.log(registeredUsers)
//SIGN IN
const signInBtn = document.getElementById("signInBtn")

const userInputName = document.getElementById("userInputName")
const userInputPassoword = document.getElementById("userInputPassoword")


let userFound = false
let passwordFound = false;
let nameFound = false
signInBtn.addEventListener("click", (e) => {
  e.preventDefault()

  userInputName.style.border = "";
  userInputPassoword.style.border = "";

  userFound = false;
  passwordFound = false;
  nameFound = false;

  for(let i = 0 ; i < registeredUsers.length; i++){
    if(userInputName.value == registeredUsers[i].name && userInputPassoword.value == registeredUsers[i].password ){
      userFound = true
      passwordFound = true
      nameFound = true

      localStorage.setItem('isSigned', JSON.stringify(true));

      userIcon.style.display = 'none'
      let firstNameLetter = document.createElement('p')
      firstNameLetter.textContent = userInputName.value[0]

      // styling
      firstNameLetter.style.fontWeight ='bold'
      firstNameLetter.style.fontSize = '20' + 'px' 
      openCta.style.display = 'flex'
      openCta.style.justifyContent = 'center'
      openCta.style.alignItems = 'center'
      openCta.appendChild(firstNameLetter)

      userNameDisplay.innerHTML = userInputName.value
      userPasswordDisplay.innerHTML = userInputPassoword.value
    }
  }

  if(!passwordFound){
    userInputPassoword.style.border = "1px solid red";
  }else if(!nameFound){
    userInputName.style.border = "1px solid red";
  }

  userInputName.value = ""
  userInputPassoword.value = ""

})

// SIGN OUT FUNCTION
const signOutBtn = document.getElementById("signOutBtn")

signOutBtn.addEventListener("click" , () => {
  localStorage.setItem('isSigned', JSON.stringify(false));

  signedInUserDiv.style.display = 'none';
  motherContainer.style.display = 'none';

  openCta.innerHTML = ''; 
  userIcon.style.display = 'flex'; 
openCta.appendChild( userIcon)
})