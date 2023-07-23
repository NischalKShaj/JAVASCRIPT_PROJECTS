//  this keyword

let laptop = {
    cpu : 'i7',
    ram : 4,
    brand : 'Asus',

    // method
    config: function(){
        console.log(this.cpu)
    }
}

let laptop1 = {
    cpu : 'i9',
    ram : 8,
    brand : 'Hp',

    // method
    config: function(){
        console.log(this.cpu)
    } 
}

laptop.config()
laptop1.config()
