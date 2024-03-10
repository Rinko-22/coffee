let navbar = document.querySelector('.navbar');
document.querySelector("#menu-btn").onckick =() =>{
    navbar.classList.toggle('active');

}
let searchform  = document.querySelector('search-form');


document.querySelector("#search-btn").onckick =() =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');


}
let cartitem = document.querySelector('cart-items-container');

document.querySelector("#menu-btn").onckick =() =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');


}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');



}

