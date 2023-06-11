let navi_pressure = window.location.href
let id = navi_pressure.substring(navi_pressure.lastIndexOf('=') + 1)


function victory() {
    let produtos = JSON.parse(this.responseText);
    let vetor = produtos.products
    console.log(produtos.products);
    console.log("Dor " + id)
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].id == id) {
            document.querySelector('#le_rest').innerHTML = `<div id="fotona_x">
                        <img src="${vetor[i].image}" alt="Foto do produto" class="fotox"> 
                    </div> 
                    <div id="descript">
                        <h1 class="titulox">${vetor[i].title}</h1>
                        <p class="textox">${vetor[i].description}</p>
                        <p class="textox" id="nota">Nota do produto: ${vetor[i].rating.rate}/5</p>
                        <p class="textox" id="dindin">$ ${vetor[i].price}</p>
                        <div id="botao">
                        <button type="button" class="compree">Comprar</button>
                        </div>
                    </div>
                    `
        }
    }
    const buttony = document.getElementById('botonz')
    buttony.addEventListener('click', finderx)
    function finderx(event) {
        if (event) {
            event.preventDefault()
        }
        let nomes = document.querySelector('#buscapez').value.toLowerCase()
        if (nomes == "" || nomes == null || nomes == undefined) {
            return
        }
        window.location.href = "index.html" + "?nome=" + nomes


    }
}
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://diwserver.vps.webdock.cloud/products?page_items=32', true)
xhr.onload = victory
xhr.onerror = function () { console.log('error') }
xhr.send()