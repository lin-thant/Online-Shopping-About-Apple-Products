      // enable hidden navbar
        const nav= document.querySelector(".nav")
        let lastScrollY = window.scrollY;
        
        window.addEventListener("scroll", () => {
           if (lastScrollY < window.scrollY){
            console.log("we are going down");
            nav.classList.add("nav--hidden");
           } else {
            console.log("we are going up");
            nav.classList.remove("nav--hidden");
           }
        
           lastScrollY = window.scrollY;
        });
        
              // enable hidden navbar for mobile view
         const nav2= document.querySelector(".nav2")
         let LastScrollY = window.scrollY;
         
         window.addEventListener("scroll", () => {
            if (LastScrollY < window.scrollY){
             console.log("we are going down");
             nav2.classList.add("nav---hidden");
            } else {
             console.log("we are going up");
             nav2.classList.remove("nav---hidden");
            }
         
            LastScrollY = window.scrollY;
         });
         
// add to cart
let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");


iconCart.addEventListener("click", () => {
   body.classList.toggle("showCart")
})

closeCart.addEventListener("click", () => {
   body.classList.toggle("showCart")
})