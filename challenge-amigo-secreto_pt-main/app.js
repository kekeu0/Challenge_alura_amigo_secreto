let amigos = [];
let amigo = document.getElementById('amigo');

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

function limparCampo() {
    amigo.value = '';
}

function atualizarLista() {
   let lista = document.getElementById('listaAmigos');
   lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let sorteado = Math.floor(Math.random() * amigos.length);
        document.getElementById('resultado').innerHTML = amigos[sorteado];
    }
}