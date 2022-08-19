class Book{
  constructor(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read(){
    return `I'm reading ${this.title}`;
  }

}

class ItBook extends Book{
  constructor(title, author,pages, technology){
    super(title, author, pages);
    this.technology = technology;
  }
}

let itBook = new ItBook('Algoritms to live by', 'Brian Christian', '620', 'Algoritms');

console.log(itBook.read());