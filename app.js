function appendbookToDom(book){
    const title = document.createElement('h1')
    title.textContent = getRandomBooks
    document.querySelector('#displaybook').append(title)
}



function fetchBook(genre){
return fetch(`http://openlibrary.org/subjects/${genre}.json`)
.then((res) => res.json())
.then((json)=> {
    const randomBook = getRandomBooks(json.works)
    const title =randomBook.title
    const author = getTheAuthor(randomBook)
    //const cover =    
    console.log(randomBook.title);
    console.log(randomBook.authors[0].name);
     appendbookToDom(title,author)
    
})
}


function getRandomBooks(books) {
    const randomIndex = Math.floor(Math.random() * books.length)
    return books[randomIndex]
}

function getTheAuthor(book) {
    return book.authors[0].name
}
let genre = 'mystery'
const book = fetchBook(genre)
appendbookToDom