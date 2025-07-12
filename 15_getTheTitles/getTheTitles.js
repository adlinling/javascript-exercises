const getTheTitles = function(booksArr) {

    let titles = [];

    for(book of booksArr){
        console.log(book.title);
        titles.push(book.title)
    }

    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
