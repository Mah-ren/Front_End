let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let btn_create = document.getElementById('btn_create');

let data_product;

if(localStorage.product != null){
    data_product= JSON.parse(localStorage.product);
}
else{
    data_product = [];
}

showData();
btn_create.onkeyenter = function(){
    create_btn();
}
btn_create.onclick = function(){
    create_btn();
}
let create_btn = function(){
    if(title.value === ""){
        alert("please enter the title of the product");
        return;
    }
    if(price.value === ""){
        alert("please enter the price")
        return;
    }
    let new_product = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }

    if(new_product.count > 1){
        for(let x = 0; x < new_product.count; x++){
            data_product.push(new_product);
        }
    }
    else{
        data_product.push(new_product);
    }

    localStorage.setItem('product', JSON.stringify(data_product));
    showData();
    clearData();
}




function getTotal(){
    if(price.value != ''){
        let result = +price.value + +taxes.value + +ads.value - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = 'green';
        total.style.color = 'white'
        
    }
    else{
        total.style.backgroundColor = 'red';
        total.style.color = 'white'

    }
}

function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

function showData(){
    let table = '';

    for(let x = 0; x < data_product.length; x++){
        table += `
            <tr>
                <td>${x+1}</td>
                <td>${data_product[x].title}</td>
                <td>${data_product[x].price}</td>
                <td>${data_product[x].taxes}</td>
                <td>${data_product[x].ads}</td>
                <td>${data_product[x].discount}</td>
                <td>${data_product[x].category}</td>
                <td><button id="update">update</button></td>
                <td><button onkeyenter="deleteItem(${x})" onclick="deleteItem(${x})"  id="delete">delete</button></td>
            </tr>
            `
    }
    let div_delete_all = document.getElementById('div_delete_all');

    if(data_product.length > 0){
        div_delete_all.innerHTML = `<button onkeyenter="deleteAllItems()" onclick="deleteAllItems()" id="btn_delete_all">Delete All Products(${data_product.length})</button>`;
    }
    else
        div_delete_all.innerHTML = '';

    
    document.getElementById('tbody').innerHTML = table;
}

function deleteItem(x){

    //! splice(start, length);
    data_product.splice(0, 1);
    localStorage.product = JSON.stringify(data_product);
    showData();
}

function deleteAllItems(){
    data_product.splice(0);
    localStorage.clear();
    showData();
}

