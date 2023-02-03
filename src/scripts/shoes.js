const shoes_Suggestions = document.querySelector('#shoesSuggestions')
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

    {
        "title": "Nike Sport black - SMBA32",
        "image": "/assets/images/Screenshot_2022-10-17_185742-removebg-preview.png",
        "price": "210$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Nike Sport Black & White",
        "image": "/assets/images/Screenshot_2022-10-17_184323-removebg-preview.png",
        "price": "49$",
        "star": 4,
        "seal": true
    },

    {
        "title": "Rebook Sport Black",
        "image": "/assets/images/Screenshot_2022-10-17_184557-removebg-preview.png",
        "price": "65$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Adidas short - Blue & White",
        "image": "/assets/images/Screenshot_2022-10-17_184427-removebg-preview.png",
        "price": "70$",
        "star": 4,
        "seal": false
    },

    {
        "title": "Nike short - Black & White",
        "image": "/assets/images/Screenshot_2022-10-17_185817-removebg-preview.png",
        "price": "200$",
        "star": 4,
        "seal": false
    },
    {
        "title": "Rebook Air Black",
        "image": "/assets/images/Screenshot_2022-10-17_184748-removebg-preview.png",
        "price": "23$",
        "star": 3,
        "seal": false
    },

    {
        "title": "Nike Jordan-model short Red & Black",
        "image": "/assets/images/Screenshot_2022-10-17_185447-removebg-preview.png",
        "price": "125$",
        "star": 5,
        "seal": false
    },

    {
        "title": "Under mora black ",
        "image": "/assets/images/Screenshot_2022-10-17_184653-removebg-preview.png",
        "price": "80$",
        "star": 4.5,
        "seal": false
    },

    {
        "title": "Nike sport - SA35 Black & White",
        "image": "/assets/images/Screenshot_2022-10-17_184507-removebg-preview.png",
        "price": "25$",
        "star": 3,
        "seal": true
    },

    {
        "title": "Adidas short - Gray & Black",
        "image": "/assets/images/Screenshot_2022-10-17_185300-removebg-preview (2).png",
        "price": "30$",
        "star": 2.8,
        "seal": false
    }
]

var scards = ''

shoesCards.forEach(sc => {
    if (sc.seal == true) {
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
    }
})

shoes_Suggestions.insertAdjacentHTML('beforeend', scards)