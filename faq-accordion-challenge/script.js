let paragraphOne = document.getElementById("one");
let paragraphTwo = document.getElementById("two");
let paragraphThree = document.getElementById("three");
let paragraphFour = document.getElementById("four");
let sectionOne = document.getElementById("first");
let sectionTwo = document.getElementById("second");
let sectionThree = document.getElementById("third");
let sectionFour = document.getElementById("fourth");
let FirstIcon = document.getElementById("icon-one");
let SecondIcon = document.getElementById("icon-two");
let ThirdIcon = document.getElementById("icon-three");
let FourthIcon = document.getElementById("icon-four");

function display(a,b,c){
        a.addEventListener("click",()=> {
            b.classList.toggle("paragraph")
            c.classList.toggle("minus")
            
})
}
display(sectionOne,paragraphOne,FirstIcon);
display(sectionTwo,paragraphTwo,SecondIcon);
display(sectionThree,paragraphThree,ThirdIcon);
display(sectionFour,paragraphFour,FourthIcon);


