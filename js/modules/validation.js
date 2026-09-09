// Expressão Regular para validação do e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarFormulario(form) {
  let eValido = true;
  const emailInput = form.querySelector('#email');
  const nomeInput = form.querySelector('#nome');

  // Validação de Nome Obrigatório
  if (!nomeInput.value.trim()) {
    exibirErro(nomeInput, 'O campo nome é obrigatório.');
    eValido = false;
  } else {
    removerErro(nomeInput);
  }

  // Validação de E-mail via RegEx
  if (!emailRegex.test(emailInput.value)) {
    exibirErro(emailInput, 'Insira um e-mail válido.');
    eValido = false;
  } else {
    removerErro(emailInput);
  }

  return eValido;
}

function exibirErro(input, mensagem) {
  input.classList.add('campo-invalido');
  input.classList.remove('campo-valido');
  
  let erroSpan = input.nextElementSibling;
  if (!erroSpan || !erroSpan.classList.contains('mensagem-erro')) {
    erroSpan = document.createElement('span');
    erroSpan.className = 'mensagem-erro';
    input.after(erroSpan);
  }
  erroSpan.textContent = mensagem;
}

function removerErro(input) {
  input.classList.remove('campo-invalido');
  input.classList.add('campo-valido');
  const erroSpan = input.nextElementSibling;
  if (erroSpan && erroSpan.classList.contains('mensagem-erro')) {
    erroSpan.remove();
  }
}