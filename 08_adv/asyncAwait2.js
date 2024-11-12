function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched.");
        }, 2000);
    })
}
function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment data fetched.");
        }, 3000);
    })
}


async function getBlogData() {
    try {
        console.log("Fetching data..");
        // let postData = await fetchPostData();
        // let commentData = await fetchCommentData();

        let [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]); //done same job as above

        console.log(postData);
        console.log(commentData);
        console.log("Done");
    } catch (error) {
        console.log(error);
    }
}

getBlogData();