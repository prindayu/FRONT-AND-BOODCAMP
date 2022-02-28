function register(event) {
  event.preventDefault();
  let name = document.getElementById("exampleInputText1").value;

  let email = document.getElementById("exampleInputEmail").value;

  let password = document.getElementById("exampleInputPassword").value;

  let username = document.getElementById("exampleInputText1").value;

  if (name && email && password && username) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("userName", username);

    window.location.replace("../sign-up.hmtl");
  } else {
    swal("Warning!", "Data tidak boleh kosong");
  }
}

const checklogin = () => {
  let hasLogin = localStorage.getItem("hasLogin");
  if (hasLogin == "true") {
    window.location.replace("../sign-up.html");
  }
};

checklogin();
