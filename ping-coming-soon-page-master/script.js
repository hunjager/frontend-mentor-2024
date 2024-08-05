const notify  = document.querySelector("button");
const input = document.querySelector("input");
const error = document.querySelector("#error");
notify.addEventListener("click",()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
    {
        error.textContent = ""
        input.style.outline = "1px solid hsl(223, 100%, 88%)"
      return (true)
    }
      error.textContent = "Please provide a valid email address"
      input.style.outline = "1px solid hsl(354, 100%, 66%)"
      return (false)
})