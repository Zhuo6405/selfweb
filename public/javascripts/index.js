// const url = `${ip}/api/login`;
// console.log(url); // Log the URL before making the API call
function getProduct() {
  // 兩種方式選一種用就好(一樣的功能，當然選程式碼少的!)
  // 第一種 Call API 的方式用 ajax
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${ip}/api/login`,
      type: "GET",
      dataType: "json",
      success: function (data) {
        resolve(data);
        console.log("API 成功了!", data);
      },
      error: function (error) {
        reject("API 出錯拉!");
      },
    });
  });
  // 第二種 Call API 的方式用 axios
  return axios
    .get(`${ip}/api/product`)
    .then((res) => {
      console.log("API 成功了!", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("API 出錯拉!", err);
    });
}

/*
  async語法 - 代表此函式為非同步函式 (簡稱async函式)
  await語法 - 代表此函式為同步函式，要等待 getPorduct() 這個函式完成，程式才會繼續往下執行，因為要先有資料才可以渲染。

  function 要標記為 async，裡面才可以撰寫 await 語法，不了解同步非同步的同學，要google一下喔!!!
*/
async function renderProduct() {
  let data = await getProduct();
  //將資料填入，並渲染進 product 這個 class 的 HTML 元素
  for (let i = 0; i < data.length; i++) {
    let content = `
        <div class="col mb-5">
            <div class="card h-100 bg-white">
            <!-- Product image-->
            <img
                class="card-img-top"
                src="${data[i].picture}"
                style="width: 180px; object-fit: cover; align-self: center"
                alt="..."
            />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">
                    ${data[i].name}
                </h5>
                <p><i class="bi bi-info-circle"></i> ASUS Store 建議售價</p>
                <!-- Product price-->
                <p>NT$ ${data[i].price.toLocaleString()}</p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#"
                    >加入購物車</a
                >
                </div>
            </div>
            </div>
        </div>
    `;
    // jquery 選擇器中，"."代表class的名稱
    $(".product").append(content);
  }
}