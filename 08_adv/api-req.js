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


/*
*Value	  State	                 Description
 0	      UNSENT	               Client has been created. open() not called yet.
 1	      OPENED	               open() has been called.
 2	      HEADERS_RECEIVED	     send() has been called, and headers and status are available.
 3	      LOADING	Downloading;   responseText holds partial data.
 4	      DONE	                 The operation is complete.
*/