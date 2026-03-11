const API = "http://localhost:5000/products";

let currentPage = 1;


function loadProducts(){

    const search = document.getElementById("search").value;
    const category = document.getElementById("category").value;

    fetch(`${API}?search=${search}&category=${category}&page=${currentPage}`)

        .then(res => res.json())

        .then(data => {

            let rows = "";

            data.forEach(p => {

                rows += `
<tr>
<td>${p.name}</td>
<td>${p.price}</td>
<td>${p.category}</td>
<td>
<button onclick="deleteProduct(${p.id})">Delete</button>
</td>
</tr>
`;

            });

            document.getElementById("productList").innerHTML = rows;

            document.getElementById("pageNumber").innerText = currentPage;

        });

}


function addProduct(){

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("cat").value;

    fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({name, price, category})

    })

        .then(res => res.json())

        .then(() => {

            loadProducts();

        });

}


function deleteProduct(id){

    fetch(`${API}/${id}`, {

        method: "DELETE"

    })

        .then(res => res.json())

        .then(() => {

            loadProducts();

        });

}


function nextPage(){

    currentPage++;

    loadProducts();

}


function prevPage(){

    if(currentPage > 1){

        currentPage--;

        loadProducts();

    }

}


loadProducts();