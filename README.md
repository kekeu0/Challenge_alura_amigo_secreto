# Challenge_alura_amigo_secreto

Este projeto é um challenge da Alura que sorteador de amigos feito em JavaScript. Ele permite que o usuário adicione amigos a uma lista e após precionar o botão "Sortear Amigo" sorteia um amigo aleatório.

 <h2>Como usar</h2>

Digite um nome no campo de entrada.

Clique no botão "Adicionar Amigo" para armazená-lo na lista.

Quando quiser sortear um nome, clique no botão "Sortear Amigo".

O nome sorteado será exibido na tela.

 <h2>Explicando código</h2>

<h3>1. Criei um array para armazenar os amigos:</h3>

let amigos = [];
let amigo = document.getElementById('amigo');

<h3>2. Função para adicionar um amigo:</h3>

Obtém o valor digitado no input.

Verifica se o campo está vazio.

Adiciona o nome ao array e atualiza a lista.

function adicionarAmigo() {
    let amigoNome = amigo.value;
    if (amigoNome.length == '') {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(amigoNome);
        atualizarLista();
        limparCampo()
    }
}

<h3>3. Função para limpar o campo de entrada:</h3>

function limparCampo() {
    amigo.value = '';
}

<h3>4. Função para atualizar a lista de amigos na tela:</h3>

Percorre o array e adiciona os nomes à lista.

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

<h3>5. Função para sortear um amigo:</h3>

Verifica se há pelo menos um nome na lista.

Gera um índice aleatório e exibe o nome sorteado.

function sortearAmigo() {
    if (amigos.length > 0) {
        let sorteado = Math.floor(Math.random() * amigos.length);
        document.getElementById('resultado').innerHTML = amigos[sorteado];
    }
}



