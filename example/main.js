const cookie = require("cookie-genie");

window.onload = () => {
  let count = 0;
  if (!cookie.get("counter")) {
    cookie.set("counter", 0);
  } else {
    count = parseInt(cookie.get("counter"));
    count++;
    cookie.set("counter", count);
  }
  document.getElementById("count").innerHTML = count;
};
