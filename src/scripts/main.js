import "../common/index.css"
// import shoesProducts from "json/shoes.json"
// import backpackProducts from "json/shoes.json"
// import clothProducts from "json/shoes.json"
// import watchProducts from "json/shoes.json"

 const OfferBoxWatch = querySelector("offerbywatchSect");
 const addOffer = (title, image , price, star, seal) => {
    OfferBoxWatch.InnerHTML += ``;
 }

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

