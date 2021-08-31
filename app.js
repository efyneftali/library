//book constructor
function Book( title, author, pages, read_status){
    this.title = title
    this.author = author
    this.pages = pages
    this.read_status = read_status
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read_status}`)
    }
}

//prototype
