const accountId = 12345
let accountEmail = "mohitrkrranjan7033@gmail.com"
var accountPassword = "12345"
accountCity = "patna"  //posibility use means don't use perfectely
let accountState = "nalanda"

// accountId = 2 // not allowed

accountEmail = "mohitkumarranjan7033@gmail.com"
accountPassword = "21214254"
accountCity = "Bihar"
accountState = "Madhya Pradesh"

console.log(accountId);  //for single input print


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
