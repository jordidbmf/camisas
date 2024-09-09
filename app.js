function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let clube = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item (dado) no conjunto de dados da pesquisa
    for (let dado of dados) {
        clube = dado.clube.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se includes campoPesquisa
        if (clube.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado, formatando os dados do objeto
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.instagram} target="_blank">${dado.clube}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
        
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
    }

    // Atribui o HTML gerado para a seção de resultados, atualizando a página
    section.innerHTML = resultados
}


