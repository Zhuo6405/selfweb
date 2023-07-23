
function getUser(){
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
}

async function login() {
  let user = await getUser();
  let email = $(".email_input").val();
  let password = $(".password_input").val();
  console.log(user);
  console.log(email);
  console.log(password);
  let login = false;
  for (let i = 0; i < user.length; i++) {
    if (user[i].email == email) {
      if (user[i].password == password) {
        login = true;
        document.cookie = `user=${user[i].name};`;
      }
    }
  }
  if (login) {
    alert("登入成功");
    window.location.replace("http://localhost:3000/index.html");
  } else {
    alert("登入失敗");
    window.location.reload();
  }
}
