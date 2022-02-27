document.getElementById('seacrh-button').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    if(searchField){
         fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.numFound , data.docs.slice(0,12)));
    }
    else{
        alert('please enter a book name');
    }

    searchField.value = '';

    
})

const displayData = (booksFound , books) =>{
    document.getElementById('book-found').innerHTML = `
    <h2>Books Found: ${booksFound}</h2>
    `;

    const bookContainer = document.getElementById('book-container');
    bookContainer.textContent = '';
    for(let book of books){
        console.log(book);
        if(book.cover_i){
            const div = document.createElement('div');
            div.classList.add('book');
            div.classList.add('shadow-lg');
            div.innerHTML =`
            <img src='https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg'>
            <h2>${book.title}</h2>
            <p>First published in ${book.first_publish_year}</p>
            `;
            bookContainer.appendChild(div);
        }
       
    }
}


