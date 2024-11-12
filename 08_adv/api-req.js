const reqUrl = "https://api.github.com/users/preetam248";
let xhr = new XMLHttpRequest();
xhr.open("GET", reqUrl);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // console.log(this.responseText)
    // console.log(typeof this.responseText) //string
    let data = this.responseText;
    let jsonData = JSON.parse(data);
    console.log(jsonData.followers);
  }
};

xhr.send();
