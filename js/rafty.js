let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .container .navbar");
let topScroll = document.querySelector(".top");
function navClip(){
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
}

// Scroll to Top 
window.onscroll = function dthjsn(){
  if(this.scrollY >= 800){
    topScroll.classList.add("show")
  }else{
    topScroll.classList.remove("show")
  }
}
topScroll.onclick = function sfhs(){
  window.scrollTo({
      top : 0,
      behavior:"smooth"
  })
}
