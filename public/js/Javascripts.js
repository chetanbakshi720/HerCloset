
//var button = document.getElementById("datafromapi");
var x = 0;

//var countryname = document.getElementById("countryname");
//var flag = document.getElementById()

//button.addEventListener("click", function(){
    var openRequest = new XMLHttpRequest();
    openRequest.open('GET',`https://fakestoreapi.com/products/category/women's%20clothing`);
    openRequest.onload = function(){
    var ourData = JSON.parse(openRequest.responseText);
    //console.log(ourData);

    let img1 = document.getElementById("apifirstimage");
    img1.src = ourData[0].image;
    document.getElementById("product1title").innerHTML = ourData[0].title;
    let product1price = '$ ';
    product1price += ourData[0].price;
    document.getElementById("product1price").innerHTML = product1price;

    let img2 = document.getElementById("api2image");
    img2.src = ourData[1].image;
    document.getElementById("product2title").innerHTML = ourData[1].title;
    let product2price = '$ ';
    product2price += ourData[1].price;
    document.getElementById("product2price").innerHTML = product2price;

    let img3 = document.getElementById("api3image");
    img3.src = ourData[2].image;
    document.getElementById("product3title").innerHTML = ourData[2].title;
    let product3price = '$ ';
    product3price += ourData[2].price;
    document.getElementById("product3price").innerHTML = product3price;

    let img4 = document.getElementById("api4image");
    img4.src = ourData[3].image;
    document.getElementById("product4title").innerHTML = ourData[3].title;
    let product4price = '$ ';
    product4price += ourData[3].price;
    document.getElementById("product4price").innerHTML = product4price;
    
    let img5 = document.getElementById("api5image");
    img5.src = ourData[4].image;
    document.getElementById("product5title").innerHTML = ourData[4].title;
    let product5price = '$ ';
    product5price += ourData[4].price;
    document.getElementById("product5price").innerHTML = product5price;

    let img6 = document.getElementById("api6image");
    img6.src = ourData[5].image;
    document.getElementById("product6title").innerHTML = ourData[5].title;
    let product6price = '$ ';
    product6price += ourData[5].price;
    document.getElementById("product6price").innerHTML = product6price;

    //img.style.height = '50px';
    //img.style.width = '100px';
    //showdata(ourData,x);
    //x++;
    };
    openRequest.send();
    //document.getElementById("button").innerHTML = "Click here to display next country";
//});

var quantitynumber = 1;
var producttotalprice = 56.99;
document.getElementById("producttotalprice").innerHTML = "$ 56.99";
function increase() {
        quantitynumber++;
        document.getElementById("quantitynumber").innerHTML = quantitynumber;
        producttotalprice = (parseInt(quantitynumber) * producttotalprice);
        document.getElementById("producttotalprice").innerHTML = ("$ "+producttotalprice);
        producttotalprice = 56.99;
}

function decrease() {
        if(quantitynumber > 1){
        quantitynumber--;
        document.getElementById("quantitynumber").innerHTML = quantitynumber;
        producttotalprice = (quantitynumber * producttotalprice);
        document.getElementById("producttotalprice").innerHTML = producttotalprice;
    }
}

function checkemptyinput(){
    if (firstname != " "|| lastname != " " || email != " " || apnumber!= " " || street != " " || country != " " || city!= " " || landmark !=" " || pincode != " ") {
                     console.log("hello");
             }
    //console.log(document.getElementById("firstname").value);
    
}













var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("phone");
var apnumber = document.getElementById("apnumber");
var street = document.getElementById("street");
var country = document.getElementById("country");
var city = document.getElementById("city");
var landmark = document.getElementById("landmark");
var pincode = document.getElementById("pincode");

        function validateform(){
                   // let username = document.forms["form"]["firstname"].value;
                    //let password = document.forms["form"]["psw"].value;
                     if (firstname != " "&& lastname != " " && email != " " && apnumber!= " " && street != " " && country != " " && city!= " " && landmark !=" " && pincode != " ") {
                     console.log("hello");
             }
                 }
        

        function validatecheckout(){
            alert("Success");
        }
