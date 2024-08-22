///// Робота з об'єктом
  var book =  {
    name: 'It ends with us',
    pages: 350,
    language: 'Polish',
  
  
  bookfullInfo: function () {
    for (let property in this) {
        if (typeof this[property] !== 'function') {
            console.log(property + ': ' + this[property]);
        }
    }
}
};

  book.author = 'Colleen Hoover';
  book.bookfullInfo();
