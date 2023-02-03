// shoes suggestions => shop page
const cloth_Suggestions = document.querySelector('#clothingSuggestions')
var clothCards = [{
        "title": "Jacket - gray",
        "image": "/assets/images/Screenshot_2022-10-17_183315-removebg-preview.png",
        "price": "60$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Jacket - black",
        "image": "/assets/images/Screenshot_2022-10-17_183428-removebg-preview.png",
        "price": "100$",
        "star": 4,
        "seal": true
    },

    {
        "title": "Hoodie Nice Air - Gray",
        "image": "/assets/images/Screenshot_2022-10-18_171114-removebg-preview.png",
        "price": "90$",
        "star": 5,
        "seal": false
    },

    {
        "title": "Hoodie FOMO - darck gary",
        "image": "/assets/images/Screenshot_2022-10-18_171159-removebg-preview.png",
        "price": "100$",
        "star": 4.5,
        "seal": false
    },

    {
        "title": "Hoodie FOMO - black",
        "image": "/assets/images/Screenshot_2022-10-18_171253-removebg-preview.png",
        "price": "210$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Hoodie FOMO - fun",
        "image": "/assets/images/Screenshot_2022-10-18_170941-removebg-preview.png",
        "price": "110$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Hoodie FOMO - mari j ",
        "image": "/assets/images/Screenshot_2022-10-18_171038-removebg-preview.png",
        "price": "120$",
        "star": 4,
        "seal": true
    },

    {
        "title": "t-shirt army - black",
        "image": "/assets/images/Screenshot_2022-10-17_183905-removebg-preview.png",
        "price": "30$",
        "star": 4,
        "seal": false
    },

    {
        "title": "t-shirt Buffalo - gray",
        "image": "/assets/images/Screenshot_2022-10-17_183940-removebg-preview.png",
        "price": "50$",
        "star": 4,
        "seal": false
    },

    {
        "title": "t-shirt - Under mora - sport - black",
        "image": "/assets/images/Screenshot_2022-10-17_184013-removebg-preview.png",
        "price": "15$",
        "star": 5,
        "seal": false
    },

    {
        "title": " t-shirt Adidas - gray & white",
        "image": "/assets/images/Screenshot_2022-10-17_184053-removebg-preview.png",
        "price": "20$",
        "star": 5,
        "seal": false
    },

    {
        "title": "t-shirt FOMO - Gray",
        "image": "/assets/images/Screenshot_2022-10-17_184125-removebg-preview.png",
        "price": "40$",
        "star": 5,
        "seal": false
    },

    {
        "title": "t-shirt FOMO - white & brown",
        "image": "/assets/images/Screenshot_2022-10-18_171448-removebg-preview.png",
        "price": "7$",
        "star": 5,
        "seal": true
    },

    {
        "title": "t-shirt FOMO - fun - picture",
        "image": "/assets/images/Screenshot_2022-10-18_171530-removebg-preview.png",
        "price": "50$",
        "star": 5,
        "seal": false
    },

    {
        "title": "t-shirt FOMO - fun -pic orange & black",
        "image": "/assets/images/Screenshot_2022-10-18_171552-removebg-preview.png",
        "price": "4300$",
        "star": 5,
        "seal": false
    },

    {
        "title": "t-shirt TheNorth - blacK",
        "image": "/assets/images/Screenshot_2022-10-18_171632-removebg-preview.png",
        "price": "43$",
        "star": 5,
        "seal": true
    },

    {
        "title": "Pants Lee - gray",
        "image": "/assets/images/Screenshot_2022-10-17_183349-removebg-preview.png",
        "price": "30$",
        "star": 5,
        "seal": false
    },

    {
        "title": "Pants Lee - black",
        "image": "/assets/images/Screenshot_2022-10-18_171743-removebg-preview.png",
        "price": "40$",
        "star": 5,
        "seal": false
    }
]

var cCards = ''


clothCards.forEach(cC => {
    if (cC.seal == true) {
        let clothtemplate = `
            <div class="w-full flex justify-center">
              <div class="w-72 m-2">
                <div class="bg-lite-blue border border-lite-gray flex justify-center relative w-72 h-72 items-center">
                  <div class="flex justify-center"><img src="${cC.image}"
                      class="w-52"></div>
                  <div class="flex justify-between flex-col absolute bottom-0 left-2">
                    <img src="/assets/images/like.png" class="py-1 cursor-pointer w-5 h-7">
                    <img src="/assets/images/favorite.png" class="py-1 cursor-pointer w-5 h-7">
                    <img src="/assets/images/shoppingcart.png" class="py-1 cursor-pointer w-5 h-7">
                  </div>
                  <sapn class="bg-dark text-lite text-xs px-2 py-1 rounded-full absolute top-1 right-1">SALE</span>
                </div>
                <div class="text-center bg-dark text-lite py-4">
                  <p class="py-2 text-xl">${cC.title}</p>
                  <p class="py-1 text-xl">${cC.price}</p>
                    <div class="flex justify-center py-2">
                      <span class="pr-1">${cC.star}</span>
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
        cCards += clothtemplate
    }
})

cloth_Suggestions.insertAdjacentHTML('beforeend', cCards)