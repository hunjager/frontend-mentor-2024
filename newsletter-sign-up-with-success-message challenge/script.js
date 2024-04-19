const subscribe = document.getElementById("subscribe");
const dismiss = document.getElementById("dismiss");
const errorMessage = document.getElementById("error");
const email = document.getElementById("email");
const first  = document.querySelector(".one");
const second = document.querySelector(".two");
const address = document.getElementById("address")


subscribe.addEventListener("click",()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        first.classList.add("hidden");
        second.classList.remove("hidden");
        address.textContent = email.value;
    }
      errorMessage.textContent = "Valid emain required"
      email.classList.add("error")
      return (false)
})
dismiss.addEventListener("click",()=>{
   window.location.reload();
})