class PrintEditionItem{
    constructor(name , releaseDate, pagesCount ){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
     fix() {
    if (this._state > 0 && this._state < 100) {
      this._state = Math.min(this._state * 1.5, 100);  // Увеличиваем состояние в полтора раза, не более 100
    }
  }
    set state(value) {
        if (value < 0) {
          this._state = 0;   // Состояние не может быть меньше 0
        } else if (value > 100) {
          this._state = 100;  // Состояние не может быть больше 100
        } else {
          this._state = value;
        }
      }
    get state(){
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }

class Book extends PrintEditionItem{
    constructor(author , name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount , author){
        super(name, releaseDate, pagesCount , author);
        this.type = "novel"
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount , author){
        super(name, releaseDate, pagesCount , author);
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount , author){
        super(name, releaseDate, pagesCount , author);
        this.type = "detective"
    }
}


class Library{
    constructor(name){
        this.name = name
        this.books = []
    }
    addBook(book){
        if (book.state > 30){
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        // Ищем книгу по заданному типу (например, по автору, названию и т.д.)
        for (let book of this.books) {
          if (book[type] === value) {
            return book;  // Возвращаем найденную книгу
          }
        }
        return null;  // Если книга не найдена, возвращаем null
      }

      giveBookByName(bookName) {
        // Находим индекс книги по названию
        const index = this.books.findIndex(book => book.name === bookName);
    
        if (index !== -1) {
          // Если книга найдена, удаляем её из массива и возвращаем
          return this.books.splice(index, 1)[0];
        }
        // Если книга не найдена, возвращаем null
        return null;
      }
}