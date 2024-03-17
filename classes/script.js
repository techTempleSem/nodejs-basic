class Person {
    static count = 0;
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday);
        Person.count++;
    }
    introduce() {
        return `hello my name is ${this.name}`;
    }
    static multipleNumber(x, y) {
        return x * y;
    }
}

const john = new Person("john", "john@ex.com", "7-10-91");
const han = new Person("han", "han@ex.com", "2-11-91");
console.log(john);
