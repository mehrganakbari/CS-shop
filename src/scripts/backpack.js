// shoes suggestions => shop page
const backpack_Suggestions = document.querySelector('#backpackSuggestions')
var backpackCards = [{
        "title": "Adidas Rani",
        "image": "/assets/images/Screenshot_2022-10-17_190207-removebg-preview.png",
        "price": "350$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Under mora - Black",
        "image": "/assets/images/Screenshot_2022-10-17_190317-removebg-preview.png",
        "price": "350$",
        "star": 4,
        "seal": true
    },

    {
        "title": "Jordan - sport black",
        "image": "/assets/images/Screenshot_2022-10-17_190459-removebg-preview.png",
        "price": "900$",
        "star": 5,
        "seal": true
    },

    {
        "title": "Nike Sport - woman",
        "image": "/assets/images/Screenshot_2022-10-17_190820-removebg-preview.png",
        "price": "100$",
        "star": 4.5,
        "seal": false
    },
    {
        "title": "Jordan Sport - Grey",
        "image": "/assets/images/Screenshot_2022-10-17_191037-removebg-preview.png",
        "price": "210$",
        "star": 4,
        "seal": true
    },

    {
        "title": "Nike Modern - blue",
        "image": "/assets/images/Screenshot_2022-10-17_191109-removebg-preview.png",
        "price": "310$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Nike Modern - black",
        "image": "/assets/images/Screenshot_2022-10-17_191148-removebg-preview.png",
        "price": "120$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Nike Modern - black-USA",
        "image": "/assets/images/Screenshot_2022-10-17_191247-removebg-preview.png",
        "price": "430$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Jack jons - red & black",
        "image": "/assets/images/Screenshot_2022-10-17_191319-removebg-preview.png",
        "price": "500$",
        "star": 4,
        "seal": true
    }
]
var bCards = ''


backpackCards.forEach(bc => {
    if (bc.seal == true) {
        let backpackemplate = `
            <div class="w-full flex justify-center">
              <div class="w-72 m-2">
                <div class="bg-lite-blue border border-lite-gray flex justify-center relative w-72 h-72 items-center">
                  <div class="flex justify-center"><img src="${bc.image}"
                      class="w-48"></div>
                  <div class="flex justify-between flex-col absolute bottom-0 left-2">
                    <img src="/assets/images/like.png" class="py-1 cursor-pointer w-5 h-7">
                    <img src="/assets/images/favorite.png" class="py-1 cursor-pointer w-5 h-7">
                    <img src="/assets/images/shoppingcart.png" class="py-1 cursor-pointer w-5 h-7">
                  </div>
                  <sapn class="bg-dark text-lite text-xs px-2 py-1 rounded-full absolute top-1 right-1">SALE</span>
                </div>
                <div class="text-center bg-dark text-lite py-4">
                  <p class="py-2 text-xl">${bc.title}</p>
                  <p class="py-1 text-xl">${bc.price}</p>
                    <div class="flex justify-center py-2">
                      <span class="pr-1">${bc.star}</span>
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
        bCards += backpackemplate
    }
})

backpack_Suggestions.insertAdjacentHTML('beforeend', bCards)