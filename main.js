// let $place_list = document.querySelectorAll("aside ul.places li"),
//   $article_list = document.querySelectorAll("article");

// let prev_visible_item = 0;

// for (let i = 0; i < $place_list.length; i++) {
//       $place_list[i].addEventListener('click', ()=> {
//         console.log('click')
//     })

// }

// let $button = document.querySelector('form>button')
// let $input = document.querySelector('form>input')
// let $a = document.querySelector('a')
// $button.addEventListener('click', (event)=>{
//     if($input.value.trim() == ''){
//         event.preventDefault()
//     }
//     else {
//         alert('Send Data')
//     }
// })
// $a.addEventListener('click', (event)=>{
//     event.preventDefault()
// })

// let $small = document.querySelector('.small')
// let $big = document.querySelector('.big')
// let $medium = document.querySelector('.medium')
// $small.addEventListener('click', (event)=>{
//     event.stopPropagation()
//     console.log('small')
// })
// $big.addEventListener('click', (event)=>{
//     console.log('big')
// })
// $medium.addEventListener('click', (event)=>{
//     console.log('medium')
//     event.stopPropagation()
// })

let $nav_li = document.querySelectorAll(".nav>li"),
  $subnav = document.querySelectorAll(".subnav"),
  $subnav_li = document.querySelectorAll(".subnav>li"),
  $overlay = document.querySelector(".overlay"),
  $article = document.querySelectorAll("article"),
  $close = document.querySelectorAll(".close");
  $chevron = document.querySelectorAll('.chevron')
index = -1;
let ind = -1;
for (let i = 0; i < $nav_li.length; i++) {
  $nav_li[i].addEventListener("click", (event) => {
    // $subnav[i].style.display = 'block'
    // if (index >= 0){
    //      $subnav[index].style.display = 'none'
    // }
    // if ($subnav[i].style.display = 'block' == 'none'){

    // }
    // index = i

    $subnav[i].classList.toggle("display");
  });
  $chevron[i].addEventListener('mousemove', ()=>{
      $chevron[i].style.transformOrigin = 'center'
      $chevron[i].style.transform = 'rotate(180deg)'
      $chevron[i].style.transition = '1s'
  })
  $chevron[i].addEventListener('mouseout', ()=>{
    $chevron[i].style.transform = 'rotate(0deg)'
})
}
for (let i = 0; i < $subnav_li.length; i++) {
  $subnav_li[i].addEventListener("mousemove", (event) => {
    $subnav_li[i].classList.add("hovered");
  });
  $subnav_li[i].addEventListener("mouseout", (event) => {
    $subnav_li[i].classList.remove("hovered");
  });
  $subnav_li[i].addEventListener("click", (event) => {
    event.stopPropagation();
    $overlay.classList.add("d-flex");
    if ($subnav_li[i].hasAttribute("data-message-id")) {
      ind = +$subnav_li[i].getAttribute("data-message-id");
      $article[ind].classList.add("display");
    }
  });
}
for (let i = 0; i < $article.length; i++) {
  $close[i].addEventListener("click", (event) => {
    $overlay.classList.remove("d-flex");
    $article[ind].classList.remove("display");
  });
}
