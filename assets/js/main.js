async function renderizarBoxColaboradores() {

    async function fetchColaboradores() {
        const data = await fetch("dados.json");
        const json = await data.json();
        return json;
    }

    function boxHtml(classe, id, img, nome, cargo, idade) {
        return `
        <div id="box${id}" onclick="renderizarColaboradorClicado('${id}')" class="box ${classe}">
            <div class="imagem-wrapper">
                <span class="id">${id}</span>
                <img src="./assets/imagens/${img}" alt="${nome}">
            </div>

            <div>
                <p class="nome">${nome}</p>
                <p class="cargo">${cargo}</p>
                <p class="idade">${idade}</p>
            </div>
        </div>
        `
    }

    const elementoPai = document.querySelector("#colaboradores");
    const dadosColaboradores = await fetchColaboradores();
    
    dadosColaboradores && dadosColaboradores.map(({ id, foto, nome, cargo, idade }, index) => {
        let html;

        if (index == 0) {
            html = boxHtml("ativo", id, foto, nome, cargo, idade);
        } else{
            html = boxHtml("", id, foto, nome, cargo, idade);
        }

        elementoPai.insertAdjacentHTML('beforeend', html)
    })
}

renderizarBoxColaboradores();



function renderizarColaboradorClicado(id) {
    function removerClasseAtivo() {
        document.querySelectorAll(".box").forEach(box => box.classList.remove("ativo"));
    }

    const box = document.querySelector(`#box${id}`);
    removerClasseAtivo();
    box.classList.add("ativo");

    document.querySelector("#foto").src = box.querySelector("img").src;
    document.querySelector("#nome").innerText = box.querySelector(".nome").innerText;
    document.querySelector("#cargo").innerText = box.querySelector(".cargo").innerText;
    document.querySelector("#idade").innerText = box.querySelector(".idade").innerText;
}


if(window.innerWidth < 768){
    const menu = document.querySelector("#menu");
    document.querySelector("#icone-menu").addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}



