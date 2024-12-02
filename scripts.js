// Cotação de moedas do dia

const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

//obtendo os elementos de formulario
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result")

// Manipulando o input para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

//captando o evento de submit(enviar) do formulario
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      converterCurrency(amount.value, USD, "US$");
      break;

    case "EUR":
      converterCurrency(amount.value, EUR, "€");
      break;

    case "GBP":
      converterCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda
function converterCurrency(amount, price, symbol) {
  try {
    //exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //calcula o total
    let total = amount * price
    if(isNaN(total)){
      return alert("Por favor digite o valor corretamente")
    }
    
    total = formatCurrencyBRL(total).replace("R$", "")
    //exibe o total
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result");
    alert("Não foi possivel converter");
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
