const product = [
  {
    name: "Sneakers",
    price: 999,
    img: "./adidas.jpg",
  },
  {
    name: "Headphones",
    price: 699,
    img: "./headphones.jpg",
  },
  {
    name: "Clothing",
    price: 599,
    img: "./tshirt.jpg",
  },
  {
    name: "Phones",
    price: 7999,
    img: "https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Home Decor",
    price: 299,
    img: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Skincare",
    price: 199,
    img: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Sports Equipments",
    price: 99,
    img: "https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

let dataDiv = "";
for (let i = 0; i < product.length; i++) {
  dataDiv += `<div class="card col-3" style="padding: 10px;">
    <img src=${product[i].img} class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="card-text text-center" style="font-size:1.8vw;">${product[i].name}</h2>
      <h2 class="card-text text-center" style="font-size:2vw;">Starting from <a href="#" class="link">${product[i].price}</a></h2>
    </div>
  </div>`;
}

document.getElementById("product_data").innerHTML = dataDiv;

function searchproduct() {
  let show_div = "";
  let data = document.getElementById("myinput").value;
  for (let i = 0; i < product.length; i++) {
    if(data==""){
      location.replace("./index.html");
    }else if (product[i].name.toLowerCase().includes(data)) {
      show_div += `<div class="card col-3" style="padding: 10px;">
      <img src=${product[i].img} class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-text text-center" style="font-size:1.8vw;">${product[i].name}</h2>
        <h2 class="card-text text-center" style="font-size:2vw;">Starting from <a href="#" class="link">${product[i].price}</a></h2>
      </div>
    </div>`;
    }
    
  }
  document.getElementById("searchProduct").innerHTML = show_div;
}
