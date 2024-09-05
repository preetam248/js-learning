let nums = [1,2,3,4,5,6,7,8,9]

// let  returnNums = nums.map( (num) => num+10 ) //map func

let returnNums = nums
                    .map( (num) => num * 10) // chainning (1st arr)
                    .map((num) => num + 1)  //2nd arr   /**map can perform operation on value but cannot check condition*/
                    .filter((num) => num < 50)   /**filter can check condition but can not perform operation on value */

console.log(returnNums)