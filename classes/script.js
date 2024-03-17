// class Person {
//     static count = 0;
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = new Date(birthday);
//         Person.count++;
//     }
//     introduce() {
//         return `hello my name is ${this.name}`;
//     }
//     static multipleNumber(x, y) {
//         return x * y;
//     }
// }

// const john = new Person("john", "john@ex.com", "7-10-91");
// const han = new Person("han", "han@ex.com", "2-11-91");
// console.log(john);

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    introduce() {
        return `hello my name is ${this.name}`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);
        this.phone = phone;
        this.address = address;
    }
}

const john = new Client("john", "john@ex.com", "010-0000-0000", "seoul");
console.log(john.introduce());
console.log(john);
