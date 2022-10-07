//  function keypress(btnpay) {
//   const press = document.getElementById(btnpay);
//   if (press.style.display === "none") {
//     press.style.display = "block";
//   } else {
//     press.style.display = "none";
//   }
// }

const btn = document.getElementById("btnpayy");
const list = document.getElementById("condisp");

btn.addEventListener("click", func);

function func() {
  if (list.style.display === "none") {
    list.style.display = "block";
    btn.disabled = true;
    btn.innerHTML = "Payment Details";
    btn.style.backgroundColor = "blue";
    btn.style.color = "red";
    setTimeout(() => {
      list.style.display = "none";
    }, 50000);
  } else {
    list.style.display = "none";
  }
}
