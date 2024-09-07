function pesquisar() {
    let section = document.getElementById("recebendo-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

if (!campoPesquisa) {
    Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Nada foi digitado! Tente novamente.'
    })
    return;
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let nome = "";
let descricao = "";
let imagem = "";

for (let dado of dados) {
    nome = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()

    if (nome.includes(campoPesquisa)) {

        resultados += `
    <div class="item-resultado">

        <h2>
            <a href="#" target="_blank">${dado.nome}</a>
        </h2>

        <p class="descricao-meta">${dado.descricao}</p>

        <a href=${dado.link} target="_blank" style="color: brown;">Mais informacoes</a>
    </div>
    `;
    }

}

if (!resultados) {
    Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Este Guerreiro Z nao foi listado.'
    })
}

section.innerHTML = resultados;
}