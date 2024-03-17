let user = {
    name: "John",
    age: 45,
    email: "semteo04@naver.com",
};

console.log(user);
console.log(user.name);
console.log(user.hasOwnProperty("email"));

function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
}

// const john = new Person("john", "john@ex.com", "7-10-91");
// const han = new Person("han", "han@ex.com", "2-11-91");
// console.log(john);
// console.log(han);

// Person.prototype.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

const personsPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
};

function Person(name, email, birthday) {
    const person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const john = new Person("john", "john@ex.com", "7-10-91");
const han = new Person("han", "han@ex.com", "2-11-91");
console.log(john);
console.log(han);
