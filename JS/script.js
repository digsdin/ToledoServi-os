/* script.js - Otimizado para integração com páginas HTML do projeto ToledoServiços */

// Objeto para armazenar dados do serviço
const servicos = [
    { id: 1, nome: "Limpeza", preco: 100 },
    { id: 2, nome: "Manutenção", preco: 150 },
    { id: 3, nome: "Consultoria", preco: 200 }
];

// Função para exibir serviços na página
function exibirServicos() {
    const lista = document.getElementById('lista-servicos');
    if (!lista) return;
    lista.innerHTML = '';
    servicos.forEach(servico => {
        const item = document.createElement('li');
        item.textContent = `${servico.nome} - R$ ${servico.preco}`;
        item.onclick = () => selecionarServico(servico.id);
        lista.appendChild(item);
    });
}

// Função para selecionar um serviço
function selecionarServico(id) {
    const servico = servicos.find(s => s.id === id);
    if (servico) {
        alert(`Você selecionou: ${servico.nome}`);
        document.getElementById('servico-selecionado').textContent = servico.nome;
    }
}

// Função para processar formulário de contato
function processarContato(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Preencha todos os campos!');
        return;
    }

    // Simulação de envio de dados
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    document.getElementById('form-contato').reset();
}

// Inicialização das interações ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    exibirServicos();

    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', processarContato);
    }
});