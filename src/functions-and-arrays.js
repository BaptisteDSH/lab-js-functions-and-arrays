// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return null;
  }
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 0) {
      return null;
    } else if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let total2 = 0;

  if (numbers2.length === 0) {
    return 0;
  }
  for (let i = 0; i < numbers2.length; i++) {
    total2 += numbers2[i];
  }

  return total2 / numbers2.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words2, searchWord) {
  if (words2.length === 0) {
    return null;
  }
  if (words2.includes(searchWord)) {
    return true;
  } else {
    return false;
  }
}
