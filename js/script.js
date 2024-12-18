const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products/";

function getData() {
    fetch(URLMain).then((response) => {
        console.log(response);
        response.json().then((res) => {
            createCards(res);
        });
    }).catch((err) => {
        alertError.innerText = `Problema al traer la información ${err}`;
        alertError.style.display = "block";
    });
}//getData


getData();

function createCards(res) {
    res.forEach(product => {
        divProductos.insertAdjacentHTML("beforeend", 

        `<div class="col-md-4 mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Precio: $${product.price}</strong></p>
                    <p class="card-text"><small class="text-muted">Rating: ${product.rating.rate} (${product.rating.count} reviews)</small></p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>`);
    });
}//createCards
