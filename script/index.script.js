function aumentar() {
  let atual = Number(document.getElementById("counter").innerHTML);

  let result = atual + 1;

  document.getElementById("counter").innerHTML = result;
}

function sub() {
  let atual = Number(document.getElementById("counter").innerHTML);

  let result = atual - 1;

  document.getElementById("counter").innerHTML = result;
}

function reset() {
  let atual = Number(document.getElementById("counter").innerHTML);

  let result = atual = 0;

  document.getElementById("counter").innerHTML = result;


}
