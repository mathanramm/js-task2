const btn = document.getElementById("register");

btn.addEventListener("click", getuserdata);

function getuserdata() {
  document.getElementById("first_name_error").innerHTML = "";
  document.getElementById("last_name_error").innerHTML = "";
  document.getElementById("state_name_error").innerHTML = "";
  document.getElementById("success_response").innerHTML = "";

  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const state_name = document.getElementById("state").value;

  // alert(gender_value);
  // const state_text = state_name.options[state_name.selectedIndex].text;
  // alert(state_text);
  if (first_name == "") {
    document.getElementById("first_name_error").innerHTML +=
      "first name missing";
    document.getElementById("first_name_error").style.color = "red";
    return false;
  }
  if (last_name == "") {
    document.getElementById("last_name_error").innerHTML += "last name missing";
    document.getElementById("last_name_error").style.color = "red";
    return false;
  }
  if (state_name == "") {
    document.getElementById("state_name_error").innerHTML += "state missing";
    document.getElementById("state_name_error").style.color = "red";
    return false;
  }
  const gender_value = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  if (gender_value != "m" && "f") {
    ocument.getElementById("gender_error").innerHTML += "state missing";
    document.getElementById("gender_error").style.color = "red";
  }
  // } else if (state_name == "tn") {
  //   // alert("Tamil Nadu");
  // } else if (state_name == "ka") {
  //   // alert("Karnataka");
  // } else if (state_name == "kl") {
  //   alert("Kerala");
  // } else {
  //   // alert("select_state");
  // }

  const full_name = first_name + " " + last_name;
  const response =
    "Hello" + " " + full_name + " " + "you have successfully registered!";
  document.getElementById("success_response").innerHTML += response;
  setTimeout(() => {
    location.reload();
  }, 10000);
  //   console.log("js working fine");
  //   console.log(first_name);
}
