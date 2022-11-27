import "../common/index.css"

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const OfferBoxWatch = document.querySelector("#offerbywatchSect");

const addwatch = (WatchProduct) => {
  OfferBoxWatch.InnerHTML += `
  <div class="w-72 m-3">
  <div class="bg-lite-blue border border-lite-gray flex justify-center relative w-72 h-72 items-center">
    <div class="flex justify-center"><img src="${WatchProduct.image}"
        class="w-52"></div>
    <div class="flex justify-between flex-col absolute bottom-0 left-2">
      <img src="assets/images/like.png" class="py-1 cursor-pointer">
      <img src="assets/images/favorite.png" class="py-1 cursor-pointer">
      <img src="assets/images/shoppingcart.png" class="py-1 cursor-pointer">
    </div>
  </div>
  <div class="text-center text-lite">
    <p class="py-2 text-3xl">${WatchProduct.title}</p>
    <p class="py-1 text-xl">${WatchProduct.price}</p>
      <button class="py-2 px-5 text-dark bg-lite-blue rounded-full">read more >></button>
      <div class="flex justify-center py-2">
        <span class="pr-1">${WatchProduct.star}</span>
        <img src="assets/images/star.png">
      </div>
  </div>
</div>
  `;
};

fetch("./watch.json")
  .then((res) => res.json() )
  .then((data) => {
    console.log(data);
    data.map((WatchProduct) => {
      addwatch(WatchProduct);
    });
});