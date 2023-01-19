const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20,25,30,35];

console.log(people);

//module.exports = 'hello';

// module.exports = people; //export 1 array to test1.js

module.exports = {
    people: people, //or people,ages
    ages:ages
};
