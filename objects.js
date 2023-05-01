const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];


// Create a function called getAvailableBooks that returns an array of all available books
function getAvailableBooks(books){
const newArray=[]
for(let i=0; i<books.length; i++){
    const all=books[i]
    if(all===books){
        newArray.push(books.book)
    }
}
return newArray

}
const newArray=getAvailableBooks(books)
console.log(newArray)

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(authorName){
    let allBooks=[]
    for(let i=0; i<authorName.length;i++){
        const authorName=authorName[i]
        if(allBooks===authorName){
        allBooks.push(authorName)
        // authorName.push(allBooks.all)
        }
        return allBooks

    }
    const getBooksByAuthor=getBooksByAuthor(authorName)
    console.log(getBooksByAuthor)

}
// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
// function addNewBook(object,library){
//     const books=books.addNewBook
//     this.books
 
    
// }
// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(bookTitle,property){
for(let i=0; i<bookTitle.length;i++){
    if(bookTitle ===property){
    return "the book if found"
}
else{
    return "book is not available"
}
}
return bookTitle
}
const bookTitle=checkoutBook
console.log(checkoutBook(bookTitle("The river")))

//  Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(bookTitle,library){
    for(let i=0; i<bookTitle.length;i++){
        if(bookTitle===library){
            return "true"

        }
        else{
            return "book does not belong in the library"
        }
    }
    return returnBook
}
const library=returnBook
console.log(returnBook(library("1901")))