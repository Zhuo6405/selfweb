function getProduct(product_now) {
  return axios
    .get("http://localhost:8888/product/" + product_now)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("API 出錯拉!", err);
    });
}

function getProductID() {
  let name = "product=";
  let cookies = document.cookie.split(";");
  let cookie;
  for (let i = 0; i < cookies.length; i++) {
    cookie = cookies[i].trim();
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
}

async function renderInfo(product_now) {
  let product_data = await getProduct(product_now);
  $(".product_name").val(product_data.name);
  $(".product_price").val(product_data.price);
  // 基於資安問題照片沒辦法直接讀取位置
  // $(".product_picture").val(product_data.picture.split("/")[2]);
  $(".product_number").val(product_data.number);
}

function update_product_info() {
  let id = getProductID();
  let input;
  if ($(".product_picture").val() == "") {
    input = {
      name: $(".product_name").val(),
      price: parseInt($(".product_price").val()),
      number: parseInt($(".product_number").val()),
    };
  } else {
    input = {
      name: $(".product_name").val(),
      price: parseInt($(".product_price").val()),
      picture: "assets/product/" + $(".product_picture").val().split("\\")[2],
      number: parseInt($(".product_number").val()),
    };
  }

  console.log(input);
  axios
    .patch("http://localhost:8888/product/" + id, input)
    .then((res) => {
      console.log(res.data);
      history.back();
    })
    .catch((err) => {
      console.log("API 出錯拉!", err);
    });
}
function add_product_info() {
  let input;
  if ($(".product_picture").val() == "") {
    input = {
      name: $(".product_name").val(),
      price: parseInt($(".product_price").val()),
      number: parseInt($(".product_number").val()),
    };
  } else {
    input = {
      name: $(".product_name").val(),
      price: parseInt($(".product_price").val()),
      picture: "assets/product/" + $(".product_picture").val().split("\\")[2],
      number: parseInt($(".product_number").val()),
    };
  }
  console.log(input);
  axios
    .post("http://localhost:8888/product", input)
    .then((res) => {
      console.log(res.data);
      history.back();
    })
    .catch((err) => {
      console.log("API 出錯拉!", err);
    });
}