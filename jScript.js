

var array = [ 
    {
        name : 'abc1',
        description : 'This Description is for abc1',
        price : 100,
        category : 'Books'
    },
    {
        name : 'abc2',
        description : 'This Description is for abc2',
        price : 150,
        category : 'Movies'
    },
    {
        name : 'abc3',
        description : 'This Description is for abc3',
        price : 200,
        category : 'Fashion'
    },
    {
        name : 'abc4',
        description : 'This Description is for abc4',
        price : 250,
        category : 'Books'
    },
    {
        name : 'abc5',
        description : 'This Description is for abc5',
        price : 300,
        category : 'Books'
    }
];

function add(){
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}


var product = document.getElementById("products");
var data = '' ;

//fetch Data
for (var i = 0; i < array.length; i++) {

    data += '<tr>';
    data += '<td>' + array[i].name + '</td>';
    data += '<td>' + array[i].description + '</td>';
    data += '<td>' + array[i].price + '</td>';
    data += '<td>' + array[i].category + '</td>';

    
    data += `<td><button id="btn1" onclick="readHandler('${array[i].name}')">Read</button>
            <button id="btn2" onclick="editHandler('${array[i].name}')">Edit</button>
            <button id="btn3" onclick="deleteHandler('${array[i].name}')">Delete</button></td>`;
    data += '</tr>';
}
product.innerHTML = data;

//add data in table
function addRow() {
    
    var newname = document.getElementById('name').value;
    var newdis = document.getElementById('dis').value;
    var newprice = document.getElementById('price').value;
    var newcategory = document.getElementById('category').value;

    var newproduct = {
         
        name : newname,
        description : newdis,
        price : newprice,
        category : newcategory
    }
    // push data into array that User Enter
    array.push(newproduct); 

    // console.log(array);
       
        data += '<tr>';
        data += '<td>' + newname + '</td>';
        data += '<td>' + newdis + '</td>';
        data += '<td>' + newprice + '</td>';
        data += '<td>' + newcategory + '</td>';
    
        data += `<td> <button id="btn1" onclick="readHandler('${array[i].name }')">Read</button>
                     <button id="btn2" onclick="editHandler('${array[i].name}')">Edit</button>
                     <button id="btn3" onclick="deleteHandler('${array[i].name}')">Delete</button></td>`;
        data +='</tr>';

    product.innerHTML = data;
    
}

    // Delete function
function deleteHandler(productname) {

    var updateArray = array.filter((product) => product.name !== productname );
    
    array = updateArray;
    data = '';
  
    for (var i = 0; i < array.length; i++) {
    
        data += '<tr>';
        data += '<td>' + array[i].name + '</td>';
        data += '<td>' + array[i].description + '</td>';
        data += '<td>' + array[i].price + '</td>';
        data += '<td>' + array[i].category + '</td>';

    data += `<td><button id="btn1" onclick="readHandler('${array[i].name}')">Read</button>
            <button id="btn2" onclick="editHandler('${array[i].name}')">Edit</button>
            <button id="btn3" onclick="deleteHandler('${array[i].name}')">Delete</button></td>`;
        data += '</tr>';
    }
    
    product.innerHTML = data;
    
  } 
    
  function editHandler(productname) {

    //   Check the product name on console
    // console.log(productname);
    
    document.getElementById('edit').style.display = 'block';

    var getProduct = array.filter((product) => product.name === productname )
    
    // check the array in console at index
    // console.log(getProduct);
    
    document.getElementById('edit-name').value = getProduct[0].name;
    document.getElementById('edit-dis').value = getProduct[0].description;
    document.getElementById('edit-price').value = getProduct[0].price;
    document.getElementById('edit-category').value = getProduct[0].category;
    
    var updateArray = array.filter((product) => product.name !== productname )

    array = updateArray;
}

function CloseInput() {
    document.getElementById('edit').style.display = 'none';
    document.getElementById('read').style.display = 'none';
}


function saveEdit() {

    var newname = document.getElementById('edit-name').value;
    var newdis = document.getElementById('edit-dis').value;
    var newprice = document.getElementById('edit-price').value;
    var newcategory = document.getElementById('edit-category').value;

    var newProduct = {
         
        name : newname,
        description : newdis,
        price : newprice,
        category : newcategory
    }

    array.push(newProduct);
    

   
    data = '';

    for (var i = 0; i < array.length; i++) {
    
        data += '<tr>';
        data += '<td>' + array[i].name + '</td>';
        data += '<td>' + array[i].description + '</td>';
        data += '<td>' + array[i].price + '</td>';
        data += '<td>' + array[i].category + '</td>';

        data += `<td><button id="btn1" onclick="readHandler('${array[i].name}')">Read</button>
                    <button id="btn2" onclick="editHandler('${array[i].name}')">Edit</button>
                    <button id="btn3" onclick="deleteHandler('${array[i].name}')">Delete</button></td>`;
        data += '</tr>';
    }
    
    product.innerHTML = data;
    
}


function readHandler(productname) {
    
    document.getElementById('read').style.display = 'block';

    var getProduct = array.filter((product) => product.name === productname );
    
    document.getElementById('read-name').value = getProduct[0].name;
    document.getElementById('read-dis').value = getProduct[0].description;
    document.getElementById('read-price').value = getProduct[0].price;
    document.getElementById('read-category').value = getProduct[0].category;
    

}