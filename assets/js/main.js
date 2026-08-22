const menuButton =
document.getElementById("menuButton");


const menu =
document.querySelector(".nav-links");


if(menuButton){

menuButton.addEventListener(
"click",
()=>{

menu.style.display =
menu.style.display==="flex"
?
"none"
:
"flex";

});

}