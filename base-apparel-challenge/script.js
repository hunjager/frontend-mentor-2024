const email  = document.getElementById('email');
const submit  = document.getElementById('submit');
const error = document.querySelector(".error");
submit.addEventListener("click",()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {

      error.textContent = "Thank you for subscribing!"
      error.style.color = "hsl(0, 6%, 24%)";
    email.style.border = "2px solid hsl(0, 20%, 77%)"
      email.style.backgroundImage = "none"
      return (true)
    }
    error.classList.remove("hidden")
    email.style.backgroundImage = "url(images/icon-error.svg)"
    email.style.backgroundRepeat = "no-repeat"
    email.style.backgroundPosition = "85% 50%"
    email.style.border = "2px solid hsl(0, 93%, 68%)"
      return (false)
})