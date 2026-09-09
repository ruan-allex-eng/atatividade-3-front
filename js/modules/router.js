const routes = {
  home: '<h1>Página Inicial</h1><p>Bem-vindo à nossa aplicação SPA!</p>',
  sobre: '<h1>Sobre Nós</h1><p>Esta aplicação foi construída em JavaScript modular.</p>',
  contato: `
    <h1>Contato</h1>
    <p>Preencha o formulário para falar conosco.</p>
    <form id="form-contato">
      <div style="margin-bottom: 10px;">
        <label for="nome" style="display:block;">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" style="width:100%; padding:8px;">
      </div>
      <div style="margin-bottom: 10px;">
        <label for="email" style="display:block;">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" style="width:100%; padding:8px;">
      </div>
      <div style="margin-bottom: 10px;">
        <label for="mensagem" style="display:block;">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem" style="width:100%; padding:8px;"></textarea>
      </div>
      <button type="submit" style="padding:10px 20px; background:#2563eb; color:white; border:none; border-radius:4px; cursor:pointer;">Enviar</button>
    </form>
  `
};

// Função responsável por renderizar o conteúdo dinâmico no DOM
export function renderPage() {
  const appContainer = document.getElementById('app');
  // Obtém a rota do Hash da URL (padrão: 'home')
  const hash = window.location.hash.replace('#', '') || 'home';

  // Seleciona o template correspondente ou exibe erro 404
  const content = routes[hash] || '<h1>404</h1><p>Página não encontrada.</p>';

  // Limpa o contêiner alvo e injeta o novo fragmento HTML
  appContainer.innerHTML = content;
}

// Escutadores de eventos para interceptar a navegação
window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);