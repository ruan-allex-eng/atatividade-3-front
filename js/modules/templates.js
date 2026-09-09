export const templates = {
  home: `
    <div class="card">
      <h2>Página Inicial</h2>
      <p>Bem-vindo à nossa aplicação SPA!</p>
    </div>
  `,
  sobre: `
    <div class="card">
      <h2>Sobre Nós</h2>
      <p>Esta é uma aplicação SPA desenvolvida em JavaScript Vanilla nativo com suporte a módulos ES6.</p>
    </div>
  `,
  contato: `
    <div class="card">
      <h2>Contato</h2>
      <p>Preencha o formulário para falar conosco.</p>
      <form id="form-contato">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome">
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail">
        </div>
        <div class="form-group">
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  `
};