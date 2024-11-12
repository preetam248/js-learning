function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (true) {
                resolve({ username: "Preetam", age: 26 });
            } else {
                reject("Error while fetching!");
            }
        }, 3000);
    })
}

async function getData() {
    try {
        console.log("Fetching userdata....");
        let data = await fetchData();
        console.log("Fetching userdata successfully");
        console.log("userdata:", data);
    } catch (error) {
        console.log(error);
    } finally {
        console("resolve or reject");
    }
}

getData(); 