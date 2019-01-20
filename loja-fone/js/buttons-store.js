let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $actLast = document.querySelector(".-last");

  $actLast.textContent = `Carrinho(${++valorInicial})`;
}
