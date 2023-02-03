// shoes suggestions => shop page
const shoes_Suggestions = document.querySelector('#abc')
var shoesCards = [{
    "title": "Nike Air white",
    "image": "/assets/images/Screenshot_2022-10-17_185526-removebg-preview.png",
    "price": "40$",
    "star": 4.5,
    "seal": false
  },

  {
    "title": "Nike Air Black & White",
    "image": "/assets/images/Screenshot_2022-10-17_185639-removebg-preview.png",
    "price": "45$",
    "star": 4,
    "seal": true
  },

  {
    "title": "Nike Sport black - SMA32",
    "image": "/assets/images/Screenshot_2022-10-17_185712-removebg-preview.png",
    "price": "145$",
    "star": 5,
    "seal": false
  },

  {
    "title": "Nike Jordan-model long White",
    "image": "/assets/images/Screenshot_2022-10-17_185408-removebg-preview.png",
    "price": "58$",
    "star": 3.5,
    "seal": true
  },
]

var scards = ''

shoesCards.forEach(sc => {
  let shoestemplate = `
  <div class="w-full flex justify-center">
    <div class="w-72 m-2">
      <div class="bg-lite-blue border border-lite-gray flex justify-center relative w-72 h-56 items-center">
        <div class="flex justify-center"><img src="${sc.image}"
            class="w-52"></div>
        <div class="flex justify-between flex-col absolute transform-y-1/2 left-2">
          <img src="/assets/images/like.png" class="py-1 cursor-pointer w-5 h-7">
          <img src="/assets/images/favorite.png" class="py-1 cursor-pointer w-5 h-7">
          <img src="/assets/images/shoppingcart.png" class="py-1 cursor-pointer w-5 h-7">
        </div>
      </div>
      <div class="text-center bg-dark text-lite py-4">
        <p class="py-2 text-xl">${sc.title}</p>
        <p class="py-1 text-xl">${sc.price}</p>
          <div class="flex justify-center py-2">
            <span class="pr-1">${sc.star}</span>
            <img src="assets/images/star.png">
          </div>
          <button class="flex justify-center py-2 px-5 text-dark bg-lite-blue mx-auto rounded-full transition-all duration-300 hover:w-4/5 hover:justify-between gap-2">
            <span>read more</span>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </span>
          </button>
      </div>
    </div>
  </div>
  `
  scards += shoestemplate
})

shoes_Suggestions.insertAdjacentHTML('beforeend', scards)