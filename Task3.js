var fruits = ["apple", "strawberry", "banana", "orange","mango"];

 console.log(fruits.every((item, index) => {
     return typeof(item).toString()=="string";
 }
 ))