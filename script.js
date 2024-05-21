//Selecionando Elementos
const input = document.querySelector("#input");
const inputEntrada = document.querySelector("#from");
const inputSaida = document.querySelector("#to");
const resultadoInput = document.querySelector("#output");
const btnConvert = document.querySelector("#convert-btn");
const mensagem = document.querySelector("#message");

//Função para converter as unidades
function converter() {
  const inputEntradaValor = inputEntrada.value;
  const inputSaidaValor = inputSaida.value;

  // Limpar mensagem anterior
  mensagem.textContent = "";

  if (inputEntradaValor === inputSaidaValor) {
    resultadoInput.value = input.value;
    mensagem.textContent = "A unidade selecionada é a mesma";
    mensagem.classList.add("ativo");
    return;
  }

  // Verificar se a conversão entre unidades de comprimento e massa é inválida
  const unidadeMedidas = ["m", "km", "cm", "mm"];
  const massaUnidades = ["kg", "g"];

  //Includes é usado para verificar se é verdadeiro ou falso
  if (
    (unidadeMedidas.includes(inputEntradaValor) &&
      massaUnidades.includes(inputSaidaValor)) ||
    (massaUnidades.includes(inputEntradaValor) &&
      unidadeMedidas.includes(inputSaidaValor))
  ) {
    mensagem.textContent =
      "Conversão inválida entre unidades de comprimento e massa.";
    mensagem.classList.add("ativo");
    resultadoInput.value = "";

    return;
  }
  //Converter a entrada para metros
  let metros;
  let kg;
  switch (inputEntradaValor) {
    case "m":
      metros = input.value;
      break;
    case "km":
      metros = input.value * 1000;
      break;
    case "cm":
      metros = input.value / 100;
      break;
    case "mm":
      metros = input.value / 1000;
      break;
    case "kg":
      kg = input.value;
      break;
    case "g":
      kg = input.value / 1000;
      break;
  }
  //Converter metros para unidade de saída
  let resultado;
  switch (inputSaidaValor) {
    case "m":
      resultado = metros;
      break;
    case "km":
      resultado = metros / 1000;
      break;
    case "cm":
      resultado = metros / 100;
      break;
    case "mm":
      resultado = metros * 10;
      break;
    case "kg":
      resultado = kg;
      break;
    case "g":
      resultado = kg * 1000;
      break;
  }
  //Exibir resultado no input
  resultadoInput.value = resultado;
  resultadoInput.classList.toggle("ativo");

  //Exibir resultado na mensagem
  const entradaLabel = inputEntrada.options[inputEntrada.selectedIndex].text;
  const saidaLabel = inputSaida.options[inputSaida.selectedIndex].text;
  const mensagemFinal = `${input.value} ${entradaLabel} equivalem a     ${resultado} ${saidaLabel} `;
  mensagem.classList.add("ativo");
  mensagem.textContent = mensagemFinal;
  return;
}

btnConvert.addEventListener("click", converter);
