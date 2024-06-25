var Toastify = require('toastify-js');
var botao = document.querySelector('button');

function click() {
Toastify({
  text: "Minha notificação de teste 🏆🏆!",
  duration: 3000,
  close: true,
  gravity: "top", 
  position: "right",
  stopOnFocus: true,
  style: {
    background: "linear-gradient(to right, #000, #b30000)",
    color: "white",
    border: "1px solid #000",
  },
}).showToast();
}





botao.addEventListener('click', click);