let programming = ["java", "javascript", "cpp", "python"]

let value = programming.forEach ((item) => {
    // console.log(item)
    return item
})
// console.log(value) //no return value coz forEach does not return value

let numbers = [1,2,3,4,5,6,7,8,9,10]

// let returnValue = numbers.filter( (num) => num>=5)//Returns the elements of an array that meet the condition specified in a callback function.


// let returnValue = numbers.filter( (num) => (num>=5))//  implicitly return value

// console.log(returnValue)

let returnValue = numbers.filter( (num) => {
    return num>=5 //as we open scope by {} now we need to return value explicitly 
})//

let newNum = []

numbers.forEach( (num) => {
    if(num >= 5){
        newNum.push(num)
    }
} )

// console.log(newNum)

let books = [
    {
        bookName : 'book1',
        genre: 'history',
        publish: 1998
    },
    {
        bookName : 'book2',
        genre: 'geography',
        publish: 1964
    },
    {
        bookName : 'book3',
        genre: 'history',
        publish: 2000
    },
    {
        bookName : 'book4',
        genre: 'friction',
        publish: 2002
    },
]

// let returnBook = books.filter( (book) => book.genre === 'history' )
// let returnBook = books.filter( (book) => book.publish >= 2000 )
let returnBook = books.filter( (book) => book.publish >= 2000 && book.genre === 'history')

console.log(returnBook)