var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((item, index) => {
    return typeof (item).toString() == "string";
}));

console.log(fruits.some((item, index) => {
    return item.charAt(0) == 'a';
}));

console.log(fruits.filter((item, index) => {
    return item.charAt(0) == 'b' || item.charAt(0) == 's' ;
}));

var liked = fruits.map((item, index) => {
    if(item == "orange" || item == "mango")
        {return "I like this fruit";}
    return "I don't like this fruit";
});


console.log(liked);

liked.forEach((item) => console.log(item));