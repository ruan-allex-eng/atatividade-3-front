export function inicializarEventos() {
  const appContainer = document.getElementById('app');

  // Delegação de eventos de clique no contêiner principal
  if (appContainer) {
    appContainer.addEventListener('click', (event) => {
      if (event.target.matches('.btn-acao')) {
        event.target.classList.toggle('ativo');
      }
    });
  }

  // Interceptação e validação do formulário de contato
  document.addEventListener('submit', (event) => {
    if (event.target.matches('#form-contato')) {
      event.preventDefault();

      const nome = document.getElementById('nome')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const mensagem = document.getElementById('mensagem')?.value.trim();

      // Validação dos campos
      if (!nome || !email || !mensagem) {
        Swal.fire({
          icon: 'warning',
          title: 'Atenção!',
          text: 'Por favor, preencha todos os campos antes de enviar.'
        });
        return;
      }

      // Alerta de Sucesso
      Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada!',
        text: 'Obrigado pelo contato, responderemos em breve.'
      });

      event.target.reset();
    }
  });
}