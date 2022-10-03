let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
};

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
})

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
};

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
};

const btnLogin = document.getElementById("btn-double");
    btnLogin.addEventListener("dblclick", function(){
      alert("You Haven't Save Anythings!");
    });
