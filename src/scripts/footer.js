const footer = document.querySelector('#footer')
var footerApiContant = [{
    'FLClothTXT': 'Cloth shop',
    'FLClothLNK': '/Cloth.html',
    'FLshoesTXT': 'shoes shop',
    'FLshoesLNK': '/shoes.html',
    'FLwatchTXT': 'watch shop',
    'FLwatchLNK': '/watch.html',
    'FLbackpacktTXT': 'backpack shop',
    'FLbackpackLNK': '/backpack.html',
  }]

  var footerContent = ''

  footerApiContant.forEach(na =>{
    let  footertemplate =`
    <div class="pt-20 pb-5 px-10 w-full container mx-auto max-w-9xl">
            <div class="flex flex-col md:flex-row text-center md:text-start  md:justify-between pb-10">
                <!-- About Us -->
                <div class="text-lite md:w-72 w-full">
                    <h1 class="text-lg mb-4">About Us</h1>
                    <p class="text-sm md:py-1 py-3">
                        We started with a small store in Stuttgart in 2018 and after 1 year we launched a small website
                        and in 2020
                        we
                        launched a large clothing boutique in Berlin . Most of our work is summarized through the
                        website and
                        virtual
                        space because we supply clothes all over Europe
                    </p>
                </div>
                <!-- Helpful Links -->
                <div class="hidden xl:block text-lite w-72 px-16">
                    <h1 class="text-lg mb-4">Helpful Links</h1>
                    <ul>
                        <li class="flex gap-x-2 items-center py-2">
                            <span>⚪</span>
                            <a href="${na.FLClothLNK}"><span>${na.FLClothTXT}</span></a>
                        </li>
                        <li class="flex gap-x-2 items-center py-2">
                            <span>⚪</span>
                            <a href="${na.FLshoesLNK}"><span><${na.FLshoesTXT}/span></a>
                        </li>
                        <li class="flex gap-x-2 items-center py-2">
                            <span>⚪</span>
                            <a href="${na.FLwatchLNK}"><span></span>${na.FLwatchTXT}</a>
                        </li>
                        <li class="flex gap-x-2 items-center py-2">
                            <span>⚪</span>
                            <a href="${na.FLbackpackLNK}"><span>${na.FLbackpacktTXT}</span></a>
                        </li>
                    </ul>
                </div>
                <!-- Social Media -->
                <div class="text-lite md:w-72 pl-2 w-full">
                    <h1 class="text-lg mb-4">Social Media</h1>
                    <div class="flex items-center bg-lite">
                        <input type="text" placeholder="Enter your E-mail Address ..."
                            class="bg-dark border border-lite px-3 py-1 placeholder:text-lite placeholder:text-xs focus:outline-0 w-[85%]">
                        <button class="bg-lite text-dark py-1 px-6 text-xl">Join</button>
                    </div>
                    <div class="flex my-4 items-center gap-x-2 justify-center md:justify-start">
                        <div class="p-1 bg-lite cursor-pointer"><img src="assets/images/instagram.png" class="w-8">
                        </div>
                        <div class="p-1 bg-lite cursor-pointer"><img src="assets/images/facebook.png" class="w-8"></div>
                        <div class="p-1 bg-lite cursor-pointer"><img src="assets/images/twitter.png" class="w-8"></div>
                    </div>
                </div>
            </div>
            <!-- footer button -->
            <hr class="border-lite pt-2 pb-5">
            <p class="text-sm text-lite text-center">produced by ❤ <a href="https://mehrganakbari.com">Mehrgan
                    Akbari</a></p>
        </div>
    `
    footerContent += footertemplate
  })

  footer.insertAdjacentHTML('beforeend', footerContent)