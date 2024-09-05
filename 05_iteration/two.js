//for-each
let programming = ["java", "javascript", "cpp", "python"]

// programming.forEach(function (item){
//     console.log(item)
// })

// programming.forEach((element) => {
//     console.log(element)
// })

// function myFunc(item){
//     console.log(item)
// }

// programming.forEach(myFunc) //pass ref of a callback func

// programming.forEach((item,index,arr) => {
//     console.log(item , index , arr)
// })

let myCoding = [
    {
        langName : "java",
        langtype : "java"
    },
    {
        langName : "python",
        langtype : "py"
    },
    {
        langName : "javascript",
        langtype : "js"
    }
] 

myCoding.forEach( (item)=>{
    console.log(item.langtype)
})