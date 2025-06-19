const appointmentDiv = document.getElementById("appointmentDiv")
const appointmentCTA = document.getElementById('appointmentCTA')
const appointmentClose = document.getElementById("appointmentClose")

const appointmentButton = document.getElementById('appointmentButton')
const appointmentMessage = document.getElementById('appointmentMessage')

appointmentClose.addEventListener('click', () => {
  appointmentDiv.style.display = 'none'
})

appointmentCTA.addEventListener('click', () => {
  appointmentDiv.style.display = 'flex'
})

const appointmentsArray = []

// //APPOINTMENT MESSAGE
// appointmentButton.addEventListener('click', () => {
//   appointmentsArray.push(appointmentMessage.value)
//   alert('We have recived your appointment')
  
// })

console.log(appointmentsArray)