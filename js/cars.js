function myFunction() {
  let services = prompt("What services are you interested in?", "I want to buy a new car!");
  if (services == null || services == "") {
    txt = "No name provided";
  } else {
    txt ="We have received your request: " + services + " Thank you!";
  }
  alert(txt);
}

