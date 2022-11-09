class User {
  borrowBooks = [];
  constructor(firstName, lastName, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.borrowedBooks = [];
  }
  getUserBooks() {
    return this.borrowBooks;
  }
  borrowBook(book) {
    let isAvailable = book.borrow(this, 10);
    if (isAvailable) {
      this.borrowedBooks.push(book);
    }
  }
  returnBook(book) {
    book.returnBook();
    for (let i = 0; i > this.borrowBooks.length; i++) {
      if (this.borrowBooks[i].name == book.name) {
        array.splice(i, 1);
      }
    }
  }
  borrow(book) {
    if (book.canBorrow == false) {
      console.log("Fuy! Bad!");
    } else {
      book.canBorrow = false;
      this.borrowedBooks.push(book);
    }
  }
}

class BookBase {
  constructor(name) {
    this.name = name;
  }
}

class Borrowable extends BookBase {
  constructor(name, pricePerDay) {
    super(name);
    this.pricePerDay = pricePerDay;
  }
  borrow(user, howMuchDays, book) {
    if (user == null) {
      alert("Invalid user");
      return false;
    }
    if (!Number.isSafeInteger(howMuchDays) || howMuchDays < 0) {
      alert("Invalid count of days");
      return false;
    }
    if (!!this.user) {
      alert("This book has already been borrowed by " + this.user.firstName);
      return false;
    }

    this.user = user;
    this.howMuchDays = howMuchDays;
    book.canBorrow = false;
    return true;
  }
  returnBook() {
    this.user = null;
    this.howMuchDays = null;
  }
}

class Book {
  constructor(title, author, canBorrow) {
    this.title = title;
    this.author = author;
    this.canBorrow = canBorrow;
  }
  canBorrow() {
    if (this.canBorrow) {
      console.log(this.canBorrow + "This book can be borrow!");
    }
  }
}

class weeklyReport {
  users = [];

  addUser(user) {
    this.users.push(user);
  }
  // consoleReport() {
  //   this.users.forEach((user) => {
  //     let userBooks = user.getUserBooks();
  //     user.borrowedBooks.forEach((book) => {
  //       console.log(
  //         "User name -> " +
  //           user.firstName +
  //           " " +
  //           user.lastName +
  //           ", took these book -> " +
  //           book.title
  //       );
  //     });
  //   });
  // }
  printReport() {
    this.users.forEach((user1) => {
      console.log(
        user1.firstName +
          " " +
          user1.lastName +
          " from " +
          user1.location +
          " borrowed these books:"
      );
      user1.borrowedBooks.forEach((book) => {
        console.log("Title: " + book.title);
        console.log("Author: " + book1.author);
      });
    });
  }
}

let report = new weeklyReport();
let user1 = new User("Talia", "Vaknin", "Bnei Brak");
let user2 = new User("Israel", "Levi", "Jerusalem");
let user3 = new User("Ariel", "Cohen", "Petah Tiqwa");

let book1 = new Book("Tom Sawyer", "Mark Twain", false);
let book2 = new Book("Encyclopedia Britannica", "", false);
console.log(book2);
let book3 = new Book(
  "Harry Potter and the Philosopher's Stone",
  " J. K. Rowling",
  true
);
console.log(book3);
let book4 = new Book("Oxford Dictionary of the English Language", "", false);
let book5 = new Book(
  "Adventures of Sherlock Holmes",
  "Arthur Conan Doyle",
  true
);

report.addUser(user1);
report.addUser(user2);
report.addUser(user3);

user1.borrow(book2);
user1.borrow(book3);
user2.borrow(book1);
user2.borrow(book4);
user3.borrow(book5);
user3.borrow(book3);
user1.borrow(book3);

// report.consoleReport();
report.printReport();
