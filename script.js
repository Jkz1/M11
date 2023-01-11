let isi = document.getElementById("isi")

fetch('http://127.0.0.1:4500/api/products')
    .then((response) => response.json())
    .then((isian) => {
        console.log(isian.response);
        let data = isian.response
        data.forEach(element => {
            // isi.innerHTML += `<p>hai</p>`
            isi.innerHTML += 
            `<tr>
                <th>${element.product_name}</th>
                <td>${element.product_price}</td>
                <td>
                    <button class="button" id="edit">edit</button>
                    <button class="button" id="delete">delete</button>
                </td>
            </tr>`
        });
    })

let edit = document.getElementById("asd")

edit.addEventListener("click", ()=>{
    alert("haha")
})