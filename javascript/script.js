// Procura o elemento que possui o id "item"
let item = document.getElementById ("item");
//Procura o elemento que possui o id "lista"
let lista = document.getElementById ("lista");
//Procura o elemento que possui o id "busca"
let busca = document.getElementById ("busca");
//Procura o elemento que possui o id "btnAdicionar"
let adicionar = document.getElementById ("btnAdicionar");

//Cria uma matrix vazia para guardar os itens // É a casinha
let itens =[];

//Quando clicar no botão adicionar, executa a função adicionar ()
adicionar.addEventListener ("click", btnAdicionar);
//Quando o usuario digitar no campo busca, executa a funcão buscar
busca.addEventListener ("keyup", buscar);

function btnAdicionar() {
    //Adicionar o valor digitado no array // Pega a galinha e leva para matriz
    itens.push(item.value);
    //Crua uma nova tag <li> // Cria uma etiqueta vazia
    let li = document.createElement("li")
    //Cria um texto com o valor digitado // Pega o nome "Galinha" do usuario
    let texto = document.createTextNode(item.value);
    //Coloca o texto dentro da tag <li> // Coloca o nome "Galinha" na etiqueta
    lista.appendChild(texto);
    //Coloca o <li> dentro da lista <ul> // Leva a galinha até o curral com a etiqueta
    lista.appendChild (li);
}

function buscar() {

    //Pega o valor digitado e converte para maíuscula // A Denise falou "Boi"
    let nome = busca.value.toLowerCase();
    //Busca todas as tags <li> da página e vai até o curral
    let itensLista =document.getElementsByTagName("li");
    //Percorre todos os itens da lista //Ele vai percorrer o curral
    for (let i=0; i < itensLista.length; i++) {
        //Pega o texto do item atual e converte para maiúsculas // nesse caso, no curral, as etiquetas ficarão maiusculas no momento em que o Elvis percorrer cada animal
        let texto = itensLista [i].textContent.toLowerCase();
        if (texto.includes(nome)) {
            itensLista[i].style.display = "block";
        }
        else {
            itensLista[i].style.display ="none";
        }
    }
}