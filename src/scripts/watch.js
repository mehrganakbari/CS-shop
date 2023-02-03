const watch_Suggestions = document.querySelector('#watchingSuggestions')
var watchingCards = [{
        "title": "Apple Watch 4",
        "image": "/assets/images/Screenshot_2022-10-18_172735-removebg-preview.png",
        "price": "120$",
        "star": 5,
        "seal": false
    },

    {
        "title": "Galaxy Watch 3",
        "image": "/assets/images/Screenshot_2022-10-18_172826-removebg-preview.png",
        "price": "350$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Apple Watch 7",
        "image": "/assets/images/Screenshot_2022-10-18_172902-removebg-preview.png",
        "price": "900$",
        "star": 5,
        "seal": false
    },

    {
        "title": "Apple Watch 3",
        "image": "/assets/images/Screenshot_2022-10-18_173120-removebg-preview.png",
        "price": "100$",
        "star": 4.5,
        "seal": false
    },

    {
        "title": "Galaxy Watch 4",
        "image": "/assets/images/Screenshot_2022-10-18_173312-removebg-preview.png",
        "price": "210$",
        "star": 4,
        "seal": false
    },

    {
        "title": "MARQ",
        "image": "/assets/images/Screenshot_2022-10-18_173247-removebg-preview.png",
        "price": "1120$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Dorrati",
        "image": "/assets/images/Screenshot_2022-10-18_173054-removebg-preview.png",
        "price": "120$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Omax silver - rose gold",
        "image": "/assets/images/Screenshot_2022-10-18_173346-removebg-preview.png",
        "price": "430$",
        "star": 4,
        "seal": true
    },

    {
        "title": "Rolex",
        "image": "/assets/images/Screenshot_2022-10-18_173540-removebg-preview.png",
        "price": "500$",
        "star": 4,
        "seal": true
    },

    {
        "title": "G-shake",
        "image": "/assets/images/Screenshot_2022-10-18_172955-removebg-preview.png",
        "price": "700$",
        "star": 5,
        "seal": true
    },

    {
        "title": "Rolex woman",
        "image": "/assets/images/Screenshot_2022-10-18_173447-removebg-preview.png",
        "price": "5420$",
        "star": 5,
        "seal": true
    },

    {
        "title": "Bugatti",
        "image": "/assets/images/Screenshot_2022-10-18_173625-removebg-preview.png",
        "price": "4300$",
        "star": 5,
        "seal": false
    }
]

var wcards = ''

watchingCards.forEach(wc => {
    if (wc.seal == true) {
        let watchtemplate = `
        <div class="w-full flex justify-center">
          <div class="w-72 m-2">
            <div class="bg-lite-blue border border-lite-gray flex justify-center relative w-72 h-72 items-center">
              <div class="flex justify-center"><img src="${wc.image}"
                  class="w-52"></div>
              <div class="flex justify-between flex-col absolute bottom-0 left-2">
                <img src="/assets/images/like.png" class="py-1 cursor-pointer w-5 h-7">
                <img src="/assets/images/favorite.png" class="py-1 cursor-pointer w-5 h-7">
                <img src="/assets/images/shoppingcart.png" class="py-1 cursor-pointer w-5 h-7">
              </div>
            </div>
            <div class="text-center bg-dark text-lite py-4">
              <p class="py-2 text-xl">${wc.title}</p>
              <p class="py-1 text-xl">${wc.price}</p>
                <div class="flex justify-center py-2">
                  <span class="pr-1">${wc.star}</span>
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
        wcards += watchtemplate
    }
})

watch_Suggestions.insertAdjacentHTML('beforeend', wcards)