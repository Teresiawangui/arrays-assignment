//question1
//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
const arr1 = [3,7,34,90,12];
const arr2 = [true,"green","where",12,56];
console.log(arr1.slice(-1));
console.log(arr2.slice(-1));


const last =arr1[arr1.length -1];
const lastElement =arr2[arr2.length -1];
console.log({last});
console.log({lastElement});
//question2
//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"]
const pets = ["Cow","Bird","Snake","Dog"]
const myPets = pets.join('');
console.log({myPets});

/*const pets = ["Cow","Bird","Snake","Dog"]
const myPets = pets.join();
console.log({myPets});*/
//question3
//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
const arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log([-5,9,5,3,2,-3,6,8,4,1].toSorted());
//question4
//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];
let arr = ["apple", "mango", "apple",  "orange", "mango", "mango"];
 function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

/*function removeDuplicate(arr4){
    return[...newSet(arr4)]
}*/
//question5
//Write a JS script to search for the following word in the array."way"If the word is present, console it else console "the search word was not found"let arr5 = ["the", "way", "x", 4];


//question6
//Write a JS script to sort the following string:let word = "sevink"
let sortString = (word) =>{
    return word.split("").sort().join("");

};
console.log("Sorted String: ");
console.log(sortString("sevink"));

