async function renderizarBoxColaboradores(){

    async function fetchColaboradores (){
        const data = await fetch("dados.json");
        const json = await data.json();
        return json;
    }

    function boxHtml(classe, id, img, nome, cargo, idade){
        return  `
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

    const elementoPai = document.querySelector("#wrapper");
    const dadosColaboradores = await fetchColaboradores();
    console.log(dadosColaboradores);

    dadosColaboradores && dadosColaboradores.map(({id, foto, nome, cargo, idade}, index) => {
        let html;

        if(index == 0 || index == 3 || index == 6){
            html = boxHtml("box1", id, foto, nome, cargo, idade);
        }

        if(index == 1 || index == 4 || index == 7){
            html =  boxHtml("box2", id, foto, nome, cargo, idade);
        }

        if(index == 2 || index == 5 || index == 8){
            html =  boxHtml("box3", id, foto, nome, cargo, idade);
        }
        elementoPai.insertAdjacentHTML('beforeend', html)
    })
}

renderizarBoxColaboradores();



function renderizarColaboradorClicado(id){
    console.log(id);

   const box = document.querySelector(`#box${id}`);
   console.log(box)

   document.querySelector("#foto").src = box.querySelector("img").src;
   document.querySelector("#nome").innerText = box.querySelector(".nome").innerText;
   document.querySelector("#cargo").innerText = box.querySelector(".cargo").innerText;
   document.querySelector("#idade").innerText = box.querySelector(".idade").innerText;
}

