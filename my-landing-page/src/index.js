//welcome message
alert("Welcome to the world of Marvel fandom...");
//marvel fan status
function welcome() {
  let status = "Are you a Marvel fan?";
  if (confirm(status) == true) {
    personalise();
  } else {
    alert("No problem, hopefully you will be 👍🏾");
  }
}
//change Title to user's name
function personalise() {
  let firstname = prompt("What is your name?");
  let lastname = prompt("What is your surname?");
  let fullname = firstname + " " + lastname;
  let text = fullname + "'s Marvel Page";
  document.getElementById("title").innerHTML = text;
}
