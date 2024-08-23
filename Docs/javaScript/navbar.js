// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const navbarTemplate = `
        <div class="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
            <div class="relative flex h-20 space-x-10 w-full">
                <div class="flex justify-start">
                    <a class="flex flex-shrink-0 items-center" href="./index.html">
                        <img class="block h-[4.5rem] w-auto" src="./Docs/Assets/logo.png">
                    </a>
                </div>
                <ul class="hidden md:flex justify-center items-center gap-8 font-medium">
                    <li><a class="hover:text-[#dd572d] transition-all navUnderLine" href="./proBanks.html">Banques Pro</a></li>
                    <li><a class="hover:text-[#dd572d] transition-all navUnderLine" href="./assurance.html">Assurances</a></li>
                    <li><a class="hover:text-[#dd572d] transition-all navUnderLine" href="./story.html">Notre histoire</a></li>
                    <li><a class="hover:text-[#dd572d] transition-all navUnderLine" href="./blog.html">Blog</a></li>
                </ul>
                <div class="flex-shrink-0 hidden md:flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end">
                    <a href="./index.html#NosComparaisons">
                        <button class="ring-offset-background hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-5 py-6 transition-all border-0 rounded-lg font-medium text-white bg-gradient-to-l from-[#fe8a39] to-[#fd3838] shadow-lg hover:shadow-xl focus:outline-none">
                            Nos comparaisons
                        </button>
                    </a>
                </div>
                <div id="openNav" class="flex-shrink-0 cursor-pointer flex md:hidden px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end">
                    <i class="fa-solid fa-bars text-2xl text-[#dd572d]"></i>
                </div>
            </div>
        </div>
        <div class="responsive overflow-hidden relative transition-all">
            <div id="resNav" class="w-[0rem] overflow-hidden bg-gradient-to-b from-[#fe8a39] to-[#fd3838] transition-all h-screen fixed top-0 left-0 z-50">
                <h1 id="closenNav" class="absolute cursor-pointer right-10 top-8 text-2xl font-bold"><i class="fa-solid fa-xmark"></i></h1>
                <div class="p-5 ">
                    <img src="./Docs/Assets/logo.png" class="h-16" alt="">
                    <ul class="flex flex-col gap-2 mt-10">
                        <li class="text-white text-xl hover:bg-[#fe5239] transition-all rounded-lg hover:shadow-md p-3"><a href="./proBanks.html">Banques Pro</a></li>
                        <li class="text-white text-xl hover:bg-[#fe5239] transition-all rounded-lg hover:shadow-md p-3"><a href="./assurance.html">Assurances</a></li>
                        <li class="text-white text-xl hover:bg-[#fe5239] transition-all rounded-lg hover:shadow-md p-3"><a href="./story.html">Notre histoire</a></li>
                        <li class="text-white text-xl hover:bg-[#fe5239] transition-all rounded-lg hover:shadow-md p-3"><a href="./blog.html">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Inject the navbar into the HTML
    document.getElementById("navbar").innerHTML = navbarTemplate;

    const openNav = document.getElementById(`openNav`)
    const closenNav = document.getElementById(`closenNav`)
    const resNav = document.getElementById(`resNav`)

    openNav.addEventListener('click', () => {
        resNav.style.width = "22rem"
    })
    closenNav.addEventListener('click', () => {
        resNav.style.width = "0rem"
    })

});



