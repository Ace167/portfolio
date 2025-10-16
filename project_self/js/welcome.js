const hour = new Date().getHours();
let message = "";
if (hour < 12) {
  message = "Good morning!";
} else if (hour < 18) {
  message = "Good afternoon!";
} else {
  message = "Good evening!";
}
document.write(message);

document.body.style.color = "#000000ff";

document.body.style.fontFamily = '"Courier New", Courier, monospace';
