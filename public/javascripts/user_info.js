let user_id;
function getUser() {
  return axios
    .get("http://localhost:8888/user")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("API 出錯拉!", err);
    });
    // return new Promise((resolve, reject) => {
    //   $.ajax({
    //     url: "http://localhost:8888/user",
    //     type: "GET",
    //     dataType: "json",
    //     success: function (data) {
    //       // console.log(data);
    //       resolve(data);
    //     },
    //     error: function (error) {
    //       reject("API 出錯拉!");
    //     },
    //   });
    // });
}

function getLoginUser() {
  let name = "user=";
  let cookies = document.cookie.split(";");
  let cookie;
  for (let i = 0; i < cookies.length; i++) {
    cookie = cookies[i].trim();
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
}

async function renderInfo() {
  let user_data = await getUser();
  let user_now = getLoginUser();
  for (let i = 0; i < user_data.length; i++) {
    if (user_data[i].name == user_now) {
      user_id = i;
      $(".user_name").val(user_data[i].name);
      $(".user_email").val(user_data[i].email);
      $(".user_password").val(user_data[i].password);
    }
  }
}

function update_user_info() {
  let input = {
    name: $(".user_name").val(),
    email: $(".user_email").val(),
    password: $(".user_password").val(),
  };
  axios
    .put("http://localhost:8888/user/" + user_id, input)
    .then((res) => {
      document.cookie = `user=${input.name};`;
    })
    .catch((err) => {
      console.log("API 出錯拉!", err);
    });
}
