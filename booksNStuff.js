// Create a Media class that will be the parent class of the CD, Movie, and Book classes
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    //Getter functions for the three main properties of Media. These will be inherited by the child classes
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    //Sets the value of _isCheckedOut
    set isCheckedOut(checkOut) {
        this._isCheckedOut = checkOut
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
        let ratingsLength = this.ratings.length
        return ratingsSum / ratingsLength
    }

    addRating(rating) {
        this.ratings.push(rating)
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author
        this._pages = pages
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
       super(title);
       this._director = director;
       this._runTime = runTime; 
    }
    
    get director() {
        return this._director
    }

    get runTime() {
        return this._runTime
    }
}

const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544) //New instance of Book class
historyOfEverything.toggleCheckOutStatus() //Changes value of isCheckedOut to true
console.log(historyOfEverything.isCheckedOut) //expected output: true

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating()) //expected output: 4.6

const speed = new Movie("Jan de Bont", "Speed", 116) //New instance of Movie class
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut) //expected output: true

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating()) //expected output: 2.3