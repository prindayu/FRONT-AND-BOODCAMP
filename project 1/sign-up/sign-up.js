
// start

let btnRegis = document.querySelector('#regis')

btnRegis.onclick = register

function register() {

  let nama= document.querySelector('#username').value;
  let email = document.querySelector('#email').value;
  let pass = document.querySelector('#password').value;

  if (nama && email && pass) {
    localStorage.setItem('username', nama);
    localStorage.setItem('uemail', email);
    localStorage.setItem('upass', pass);
    localStorage.setItem('haslogin', true);
    window.location.replace('../sign-up.html')
  }
}
register()

const checklogin = () => {
  let hasLogin = localStorage.getItem('haslogin');
  if(hasLogin == 'true') {
    window.location.replace('../sign-up.html');
  }
}
// checklogin();

// const checklogin = () => {
//   let hasLogin = localStorage.getItem('hasLogin');
//   if(hasLogin == "true") {
//     window.location.replace('../sign-up.html')
//   }
// }
// checklogin()
