const Addbutton = document.getElementById('button');
const DeleteAll = document.getElementById('deleteAll');

class Library {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
function Display() {
}
Display.prototype.show = function (s, text) {
    message = document.getElementById('alert');
    message.innerHTML = `<div class="alert alert-primary ${s}" role="alert">${s}-: ${text}
    </div>`
    setTimeout(() => {
        message.innerHTML = "";
    }, 3000);

}

Display.prototype.add = function (book) {
    if (book.name < 2 || book.author < 2) {
        display.show('Error', 'Book cannot be added,  Please enter a Valid Book Name and Author Name');
    }
    else {
        index++;
        books[index] = book;
        localStorage.setItem('books', JSON.stringify(books));
        display.updateLibrary();
        form = document.getElementById('form-1');
        form.reset();
        display.show('Success', 'Book added successfully');
    }
}
Display.prototype.updateLibrary =() => {
    tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    
    if(books.length>0)
    {
    DeleteAll.style = 'display: inline !important;'
    } 
    else
    {
    DeleteAll.style = 'display: none !important;'
    }

    for (let i = 0; i < books.length; i++) {
        tableBody.innerHTML += `<tr>
          <th scope="row">${i + 1}</th>
          <td >${books[i].name}</td>
          <td >${books[i].author}</td>
          <td >${books[i].type}</td>
        </tr>`
    }
}
if(localStorage.getItem('books')===null)
{
    books = [];
    index = -1;
}
else{
    books = JSON.parse(localStorage.getItem('books'));
    index = (books.length)-1;
    display = new Display();
    display.updateLibrary();
}


Addbutton.addEventListener('click', function (e) {
    e.preventDefault();
    bookname = document.getElementById('inputBookName').value;
    Author = document.getElementById('inputAuthor').value;
    let type;
    crime = document.getElementById('gridRadio1');
    fiction = document.getElementById('gridRadio2');
    fantasy = document.getElementById('gridRadio3');
    if (fiction.checked)
        type = "Fiction";
    else if (crime.checked)
        type = "Crime";
    else
        type = "Sci-Fi Fantasy";
    book = new Library(bookname, Author, type);
    display = new Display();
    display.add(book);
})

DeleteAll.addEventListener('click',()=>{
    books = [];
    localStorage.clear()
    display.updateLibrary();

})
