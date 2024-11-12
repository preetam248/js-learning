function promiseFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let x = true;
      if (x) {
        resolve("successful");
      } else {
        reject("error");
      }
    }, 2000);
  });
}

promiseFunc()
  .then((data) => {
    // console.log(data);
  })
  .catch((data) => {
    // console.log(data);
  });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("my promise kept");
    } else {
      reject("my promise pass");
    }
  }, 2000);
});

myPromise
  .then((data) => {
    // console.log(data);
  })
  .catch((data) => {
    // console.log(data);
  });

new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("promise resolve");
    } else {
      reject("promise reject");
    }
  }, 2000);
})
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  })
  .finally(() => console.log("Promise is either resolve or reject"));

  