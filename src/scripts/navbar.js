// const btn = document.querySelector('button.mobile-menu-button')
// const menu = document.querySelector('.mobile-menu')

// btn.addEventListener('click', () => {
//   menu.classList.toggle('hidden')
// })

const nav = document.querySelector('#nav')
var navbarContant = [{
    'TNaddressTXT': 'Germany, Berlin, Lustgarten',
    'TNemailTXT': 'CSshop@gmail.com',
    'NLhomeTXT': 'Home',
    'NLhomeLNK': '/index.html',
    'NLaboutTXT': 'About',
    'NLaboutLNK': '/AboutUs.html',
    'NLshopTXT': 'shop',
    'NLshopLNK': '/shop.html',
    'NLblogTXT': 'blog',
    'NLblogLNK': '/blog.html',
    'NLcontactTXT': 'contact',
    'NLcontactLNK': '/ContactUs.html',
  }]

  var navbar = ''

  navbarContant.forEach(na =>{
    let  navbartemplate =`
    <!-- top navbar -->
    <div class="bg-dark">
      <div
        class="flex flex-col text-center xs2:flex-row xs2:justify-between px-6 py-4 w-full container z-auto mx-auto max-w-[1536px]">
        <!-- addres -->
        <div class="flex items-center gap-x-2 pb-2 xs2:pb-0 text-center justify-center">
          <img class="w-6 h-6" src="assets/images/home.png" alt="">
          <span class="text-lite">${na.TNaddressTXT}</span>
        </div>
        <!-- email -->
        <div class="flex items-center gap-x-2 justify-center">
          <img class="w-6 h-6" src="assets/images/email.png" alt="">
          <span class="text-lite">${na.TNemailTXT}</span>
        </div>
      </div>
    </div>
    <!-- button navbar -->
    <div
      class="py-8 px-6 flex flex-col xs2:flex-row justify-between items-center  container z-auto mx-auto max-w-[1536px]">
      <!-- navbar social media icons -->
      <div class="hidden md:flex justify-between gap-x-3 items-center">
        <img src="/assets/images/instagram.png" class="w-7 h-7 cursor-pointer">
        <img src="/assets/images/twitter.png" class="w-7 h-7 cursor-pointer">
        <img src="/assets/images/facebook.png" class="w-7 h-7 cursor-pointer">
      </div>
      <!-- navbar links -->
      <div class="hidden px3 xs2:flex justify-between gap-x-5">
        <a href="${na.NLhomeLNK}" class="text-dark text-xl">${na.NLhomeTXT}</a>
        <a href="${na.NLaboutLNK}" class="text-dark text-xl">${na.NLaboutTXT}</a>
        <a href="${na.NLshopLNK}" class="text-dark text-xl">${na.NLshopTXT}</a>
        <a href="${na.NLblogLNK}" class="text-dark text-xl">${na.NLblogTXT}</a>
        <a href="${na.NLcontactLNK}" class="text-dark text-xl">${na.NLcontactTXT}</a>
      </div>
      <!-- navbar user icons desktop-->
      <div class="hidden xs2:flex justify-between gap-x-3 items-center">
        <img src="/assets/images/shopping-cart.png" alt="" class="w-7 h-7 cursor-pointer">
        <img src="/assets/images/search.png" alt="" class="w-7 h-7 cursor-pointer">
        <img src="/assets/images/profile.jpg" alt="" class="w-8 h-8 cursor-pointer rounded-full -rotate-[33deg] border">
      </div>
      <!-- navbar ==> mobile -->
      <div class="sm:hidden w-full">
        <!-- Mobile menu button -->
        <div class="xs2:hidden flex justify-between w-full">
          <!-- navbar user icons mobile-->
          <div class="flex justify-between pb-2 xs2:hidden gap-x-3 items-center">
            <img src="/assets/images/shopping-cart.png" alt="" class="w-7 h-7 cursor-pointer">
            <img src="/assets/images/search.png" alt="" class="w-7 h-7 cursor-pointer">
            <img src="/assets/images/profile.jpg" alt="" class="w-8 h-8 cursor-pointer rounded-full -rotate-[33deg] border">
          </div>
          <button class="outline-none mobile-menu-button">
            <svg class="w-8 h-8 rounded-md m-5 text-white " x-show="!showMenu" fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <!-- navbar links -> mobile -->
        <div class="hidden py-4 px-3 bg-dark justify-between gap-x-5 w-full mobile-menu">
          <a href="${na.NLhomeLNK}" class="text-lite text-xl text-center">${na.NLhomeTXT}</a><br>
          <a href="${na.NLaboutLNK}" class="text-lite text-xl">${na.NLaboutTXT}</a><br>
          <a href="${na.NLshopLNK}" class="text-lite text-xl">${na.NLshopTXT}</a><br>
          <a href="${na.NLblogLNK}" class="text-lite text-xl">${na.NLblogTXT}</a><br>
          <a href="${na.NLcontactLNK}" class="text-lite text-xl">${na.NLcontactTXT}</a>
        </div>
      </div>
    </div>
    `
    navbar += navbartemplate
  })

  nav.insertAdjacentHTML('beforeend', navbar)

  