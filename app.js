let myLibrary = [];
const library_div = document.getElementById("library")
const addBook_btn = document.querySelector("#add-book_btn")
const submit_btn = document.getElementById("submit-btn")
const modal = document.querySelector(".modal")
const modalClose_btn = document.querySelector(".modal-close")

addBook_btn.addEventListener('click', () =>{
    modal.classList.add("modal-active")
    
})
modalClose_btn.addEventListener('click', ()=>{
    modal.classList.remove("modal-active")

})
let delbtns 
submit_btn.addEventListener('click', () =>{
    //take users input, make the book obj, 
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const read_status = document.getElementById("read-status").checked
    console.log(read_status)
  
    const book = new Book(title, author, pages, read_status)

    //apped book obj to array
    myLibrary.push(book)
    modal.classList.remove("modal-active")
    // //Add Book to UI
    displayBook(book)
    //Clear Form fields 
    clearForm()
    // console.log(myLibrary)
    const allBooks = document.querySelectorAll(".book-card")
    delbtns = document.querySelectorAll('.book-delBtn')
    let delbtnsArr = Array.from(delbtns) 
    delbtnsArr.forEach(btn=>{
        btn.addEventListener('click', () =>{
            allBooks[delbtnsArr.indexOf(btn)].remove()
        })
    })

    const readBtn = Array.from(document.querySelectorAll(".book-readBtn"))
    
    readBtn.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            
            myLibrary[readBtn.indexOf(btn)].read_status = !myLibrary[readBtn.indexOf(btn)].read_status
            if (myLibrary[readBtn.indexOf(btn)].read_status === true){
                btn.textContent = "Read"
            }else{
                btn.textContent = "Not Read"
            }
        })
    })

});

// Book constructor
function Book( title, author, pages, read_status){
    this.title = title
    this.author = author
    this.pages = pages
    this.read_status = read_status
}
Book.prototype.getInfo= function(){
    return `${this.title} by ${this.author}, ${this.pages} pages`
}
Book.prototype.readBook = function(){
    this.read_status = true
}
Book.prototype.unreadBook = function(){
    this.read_status = false
}
// Book.prototype.deleteBook = function(){
//     delete myLibrary[this]
// }
function displayBook(book){
    //have emptry hard with inputs fields, grab the info and 
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')

    const title =  document.createElement('h3')
    title.classList.add('bc-title')
    const author =  document.createElement('h4')
    author.classList.add('bc-author')
    const pages = document.createElement('h4')
    const readBtn = document.createElement('button')
    readBtn.classList.add('book-readBtn')
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('book-delBtn')
    
    title.textContent = `${book.title}`
    author.textContent = `${book.author}`
    pages.textContent = `${book.pages}`
    deleteBtn.textContent = 'Delete'


    if(book.read_status === true){
        readBtn.textContent = 'Read'    
    }else{
        readBtn.textContent = 'Not Read'    
    }
    console.log(book.read_status)

    
    bookCard.append(title, author, pages, readBtn, deleteBtn)

    library_div.append(bookCard)

    
   
}

function clearForm(){
    inputs = document.querySelectorAll("input")
    inputs.forEach(input => 
        input.value = ''
    );

    document.getElementById("read-status").checked = false
    
}



