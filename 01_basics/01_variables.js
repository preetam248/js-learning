const accountId = 260998

// console.log(accountId)

// accountId = 126354

// console.log(accountId);

let accountEmail = "preetamdas248@gmail.com"
var accountPassword = "123456"
accountCity = "kolkata" //can asign val without declear variable type but this is not a good prictce 
let accountState

console.table([accountId, accountEmail, accountPassword, accountCity])

accountEmail = "dasbittu@gmail.com"
accountPassword = "89413"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*Prefer not to use var
because of issue in block scope and functional scope
*/