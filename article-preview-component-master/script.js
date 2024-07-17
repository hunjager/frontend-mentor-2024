const bottom = document.querySelector(".bottom");
const share = document.querySelector(".share");
const socials = document.querySelector(".socials");
const info = document.querySelector(".info")

share.addEventListener("click",()=>{
    bottom.classList.toggle("clicked");
    socials.classList.toggle("hide");
    info.classList.toggle("hide");
    share.classList.toggle("share-clicked");
})
