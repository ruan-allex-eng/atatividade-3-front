const CHAVE_STORAGE = 'spa_dados_usuario';

// Salva a lista de dados atualizada no localStorage
export function salvarDados(dados) {
  try {
    const dadosEmString = JSON.stringify(dados);
    localStorage.setItem(CHAVE_STORAGE, dadosEmString);
  } catch (erro) {
    console.error('Erro ao salvar no localStorage:', erro);
  }
}

// Carrega os dados salvos e restaura na inicialização da aplicação
export function carregarDados() {
  try {
    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  } catch (erro) {
    console.error('Erro ao ler do localStorage:', erro);
    return [];
  }
}