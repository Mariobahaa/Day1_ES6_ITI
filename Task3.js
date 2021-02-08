var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((item, index) => {
    return typeof (item).toString() == "string";
}));

console.log(fruits.some((item, index) => {
    return item.charAt(0) == 'a';
}));

