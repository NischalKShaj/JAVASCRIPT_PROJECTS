// program to check the status of books

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
// checking the status of the books
let n = 0;
for(let i=0; i<library.length; i++){
    let book=library[i];
    n++;
    if(book.readingStatus){
        console.log(`${n}.Already read ${book.title} by ${book.author}`);
    }else{
        console.log(`${n}.You still need to read ${book.title} by ${book.author}` );
    }
}

