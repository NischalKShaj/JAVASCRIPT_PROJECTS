let laptop1 = {
    cpu : 'i7',
    ram : 4,
    brand : 'asus',

    getFast : function(Laptop2){
        if(this.cpu > Laptop2.cpu){
            console.log(this);
        }else{
            console.log(Laptop2);
        }
    }

}

let laptop2 = {
    cpu :'i8',
    ram : 8,
    brand :'hp',
}

laptop1.getFast(laptop2)