// then-catch-finally

/*
fetch("https://jsonplaceholder.org/users")
  .then((data) => {
    return data.json();
  }).then((data) => {
      console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
*/

async function getUserdata() {
    try {
        let userdata = await fetch("https://jsonplaceholder.org/users");
        let jsondata = await userdata.json();
        console.log(jsondata);
    } catch (error) {
        console.log(error);
    }
}

getUserdata();