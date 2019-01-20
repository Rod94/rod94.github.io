const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, indexSelected) {
  /*percorrendo cada item (variáveis) */
  $star.addEventListener("click", starSelected);
  /*adicionando um evento de click referenciando uma função */
  function starSelected() {
    $stars.forEach(function($star, index) {
      /*mesma coisa do forEach de cima */
      if (indexSelected >= index) {
        $star.classList.add("-active");
      } else {
        $star.classList.remove("-active");
      }
    });
  }
});

function handleClick() {
  this.classList.toggle("-active");
}
