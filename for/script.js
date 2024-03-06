/*
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("It is 3");
        continue;
    }
    if (i === 5) {
        break;
    }
    console.log("Number " + i);
}
*/

/*
const user = {
    name: "lee",
    province: "seoul",
    city: "seocho",
};

for (let x in user) {
    console.log(`${x}, ${user[x]}`);
}
*/

/*
let i = 0;
while (i < 10) {
    console.log("number " + i);
    i++;
}
*/

/*
let i = 100;
do {
    console.log("number " + i);
    i++;
} while (i < 10);
*/

const locations = ["seoul", "seocho", "daegue"];

for (let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}

locations.forEach(function (location, index, array) {
    console.log(location, index);
    console.log(array);
});

locations.map(function (location) {
    console.log(location);
});
