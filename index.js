// ----------------------------9----------------------
function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}
console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
console.log(getExtremeElements(["Земля", "Марс", "Венера"])); // ['Земля', 'Венера']

// ----------------------------10----------------------
function splitMessage(message, delimeter) {
  let words;
  return (words = message.split(delimeter));
}
console.log(splitMessage("Манго", "")); // ['М', 'а', 'н', 'г', 'о']

// ----------------------------11----------------------
function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript у меня в крови", 20)); // 100

// ----------------------------12----------------------
function makeStringFromArray(array, delimeter) {
  let string;

  return (string = array.join(delimeter));
}
console.log(makeStringFromArray(["М", "а", "н", "г", "о"], "")); // 'Манго')

// ----------------------------13----------------------

function slugify(title) {
  let message;
  return (message = title.toLowerCase().split(" ").join("-"));
}

console.log(slugify("Десять секретов JavaScript")); // 'десять-секретов-javascript)

// ----------------------------14----------------------

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,fruits.length-1);
// const lastThreeEls = fruits.slice(fruits.length-3 );

// console.log('firstTwoEls',firstTwoEls ); // яблоко', 'слива'
// console.log('nonExtremeEls', nonExtremeEls); // 'слива', 'груша', 'апельсин'
// console.log('lastThreeEls', lastThreeEls); //'груша', 'апельсин', 'банан'

// ----------------------------16----------------------
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  return newArray;
}

console.log(makeArray(["Манго"], ["Аякс", "Челси", "Поли", "Хьюстон"], 3)); //['Манго', 'Аякс', 'Челси']
console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран", "Венера"], 0)); // []
console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 4)); // ['Земля', 'Юпитер', 'Нептун', 'Уран']

// ----------------------------16----------------------
function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) sum += i;
  console.log(sum);
  return sum;
}
calculateTotal(7); //28

// ----------------------------17----------------------
const fruits = ["яблоко", "слива", "груша", "апельсин"];
for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  // console.log(fruit);
}

// ----------------------------20----------------------
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i++) total += order[i];
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

// ----------------------------21----------------------
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
// console.log(findLongestWord("Google do a roll")); //Google

// ----------------------------22----------------------
function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]

// ----------------------------23----------------------
// function filterArray(numbers, value) {
//   const array = [];

//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   // console.log(array);
// }
// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
// filterArray([1, 2, 3, 4, 5], 5); // []

// ----------------------------24----------------------
function checkFruit(fruit) {
  const fruits = ["яблоко", "слива", "груша", "апельсин"];
  return fruits.includes(fruit);
}

// ----------------------------25----------------------
function getCommonElements(array1, array2) {
  const common = [];

  for (let item of array1) {
    if (array2.includes(item)) {
      common.push(item);
    }
  }
  return common;
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2])

// ----------------------------26----------------------
function calculateTotalPrice(order) {
  let total = 0;
  for (let number of order) {
    total += number;
  }
  return total;
}

// ----------------------------27----------------------
function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ----------------------------28----------------------
const a = 3 % 3; //0
const b = 4 % 3; //1
const c = 11 % 4; //3
const d = 12 % 7; //5
const e = 8 % 3; //2

// ----------------------------29----------------------
function getEvenNumbers(start, end) {
  const array = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}
console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12];
console.log(getEvenNumbers(7, 7)); // [];

// ----------------------------30----------------------
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
} //5

// ----------------------------31----------------------
function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }
}

// ----------------------------32----------------------
function includes(array, value) {
  for (let arr of array) {
    if (arr === value) return true;
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3)); // true
console.log(includes([1, 2, 3, 4, 5], 17)); // false


