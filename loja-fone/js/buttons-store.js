let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $actLast = window.document.querySelector("a.-last");

  $actLast.textContent = `Carrinho(${++valorInicial})`;
}
