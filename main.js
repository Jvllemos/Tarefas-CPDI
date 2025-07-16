// --- Lógica do Verificador de Palíndromo ---

const botaoPalindromo = document.querySelector('#palindromo-btn');
const inputPalindromo = document.querySelector('#palindromo-input');
const resultadoPalindromo = document.querySelector('#resultado-palindromo');

function verificaPalindromo() {
  const textoOriginal = inputPalindromo.value.trim();

  if (!textoOriginal) {
    resultadoPalindromo.innerHTML = '';
    return;
  }

  const textoNormalizado = textoOriginal
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '');

  const textoInvertido = textoNormalizado.split('').reverse().join('');

  if (textoNormalizado === textoInvertido) {
    resultadoPalindromo.innerHTML = `<span class="sucesso">'${textoOriginal}' é um palíndromo!</span>`;
  } else {
    resultadoPalindromo.innerHTML = `<span class="erro">'${textoOriginal}' não é um palíndromo.</span>`;
  }

  inputPalindromo.value = '';
  inputPalindromo.focus();
}

botaoPalindromo.addEventListener('click', verificaPalindromo);

inputPalindromo.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    verificaPalindromo();
  }
});


// --- Lógica da Calculadora de IMC ---

const botaoIMC = document.querySelector('#imc-btn');
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const resultadoIMC = document.querySelector('#resultado-imc');

function calcularIMC() {
  const peso = pesoInput.value;
  const altura = alturaInput.value;

  if (peso && altura > 0) {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'com peso ideal. Parabéns! 🎉';
    } else if (imc < 30) {
      classificacao = 'levemente acima do peso';
    } else if (imc < 35) {
      classificacao = 'com obesidade grau I';
    } else if (imc < 40) {
      classificacao = 'com obesidade grau II';
    } else {
      classificacao = 'com obesidade grau III';
    }
    
    resultadoIMC.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> e você está ${classificacao}.</p>`;

    pesoInput.value = '';
    alturaInput.value = '';
    pesoInput.focus();
  } else {
    resultadoIMC.innerHTML = `<p>Por favor, preencha todos os campos corretamente.</p>`;
  }
}

botaoIMC.addEventListener('click', calcularIMC);

// Adiciona evento 'Enter' para os campos de IMC
pesoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    calcularIMC();
  }
});

alturaInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    calcularIMC();
  }
});