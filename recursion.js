///////////////////////////////////////////////////////// SEARCH ALGOS ///////////////////////////////////////////////////////

////////////// LINEAR(SIMPLE) SEARCH

// const list = [1, 2, 3, 4, 5];

// const findTargetItem = (arr, target) => {
//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] === target) {
//       console.log("Target found!");
//       return i;
//     }
//   }
//   console.log("Target not found!");
// };

// const result = findTargetItem(list, 5);
// console.log(result);

////////////// LINEAR SEARCH (FIND THE LAST OCCURRENCE OF THE TARGET)

// const list = [1, 2, 3, 4, 2];

// const findLastIndex = (arr, target) => {
//   const indexTracker = [];
//   let i = 0;
//   while (i < arr.length + 1) {
//     if (arr[i] === target) {
//       indexTracker.push(i);
//     }
//     i++;
//   }
//   return indexTracker.pop() + 1;
// };

// const result = findLastIndex([1, 2, 3, 2, 3, 4, 2], 2);
// console.log("result " + result);

///// TIME COMPLEXITY OF LINEAR SEARCH
// Big O(n)

///////////// BINARY SEARCH

// const list = [1, 2, 3, 4, 5];

// const binarySearcher = (arr, target) => {
//   let high = arr.length - 1;

//   let low = 0;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const currentValue = arr[mid];
//     if (currentValue === target) {
//       return console.log("Target found at index " + arr.indexOf(currentValue));
//     }
//     if (currentValue > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return console.log("Not found!");
// };

// const result = binarySearcher(list, 4);
// console.log(result);

////////////// RECURSION

// const printI = (i) => {
//   console.log(i);
//   if (i <= 0) {
//     return;
//   } else {
//     printI((i -= 1));
//   }
// };

// printI(5);

///////////// RECURSION

// function fact(x) {
//   if (x == 1) {
//     return 1;
//   } else {
//     return x * fact(x - 1);
//   }
// }

// console.log(fact(3));

////////////////// SUM (DIVIDE AND CONQUER (RECURSION))

// function summ(arr) {
//   if (arr.length <= 0) {
//     return 0;
//   } else {
//     const firstElement = Number(arr.splice(0, 1));
//     return firstElement + summ(arr);
//   }
// }

// const listed = [2, 4, 6, 2];
// console.log(summ(listed));

//////////////////  COUNTING NUMBER OF ITEMS IN A LIST (RECURSION)

// const countItems = (itemList) => {
//   let count = 0;
//   for (let i = 0; i <= itemList.length + 1; i++) {
//     count += i;
//     itemList.pop();
//   }
//   return count;
// };

// const fruits = ["apple", "lemon", "mangoe", "orange", "banana"];

// console.log(countItems(fruits));

////////////////// BINARY TREE SEACRH (breadthFirstSearch())

// let tree = {
//   10: {
//     value: "10",
//     left: "4",
//     right: "17",
//   },
//   4: {
//     value: "4",
//     left: "1",
//     right: "9",
//   },
//   17: {
//     value: "17",
//     left: "12",
//     right: "18",
//   },
//   1: {
//     value: "1",
//     left: null,
//     right: null,
//   },
//   9: {
//     value: "9",
//     left: null,
//     right: null,
//   },
//   12: {
//     value: "12",
//     left: null,
//     right: null,
//   },
//   18: {
//     value: "18",
//     left: null,
//     right: null,
//   },
// };

// const findNumber = (tree, rootNode, targetNumber) => {
//   const qeue = [];
//   const path = [];
//   qeue.push(rootNode);

//   while (qeue.length > 0) {
//     const currentNode = qeue[0];
//     path.push(currentNode.value);
//     if (currentNode.value === targetNumber) {
//       console.log("Found the target: " + currentNode.value);
//       return path;
//     }
//     if (currentNode.left !== null) {
//       qeue.push(tree[currentNode.left]);
//     }
//     if (currentNode.right !== null) {
//       qeue.push(tree[currentNode.right]);
//     }

//     qeue.shift();
//   }
//   console.log("Target Not Found!");
// };

// const result = findNumber(tree, tree[10], "17");
// console.log(result);

// const binarySearcher = (tree, rootNode, target) => {
//   let qeue = [];
//   qeue.push(rootNode);

//   while (qeue.length > 0) {
//     const currentNode = qeue[0];
//     if (currentNode.value === target) {
//       return "Target Found!";
//     }

//     if (tree[currentNode.left] !== null) {
//       qeue.push(tree[currentNode.left]);
//     }

//     if (tree[currentNode.right] !== null) {
//       qeue.push(tree[currentNode.right]);
//     }

//     qeue.shift();
//   }

//   return "Target Not Found";
// };

// const result = binarySearcher(tree, tree[10], "12");

////////////////////////////////////////////////////////// SORTING ALGOS ///////////////////////////////////////////////////////////

////////////// SORT ALGO (selectionSort())

//////////////////////////////////// SORT ALGO (insertionSort)

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j - 1] > arr[j]) {
//         [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// };

// console.log(insertionSort([3, 7, 2, 8, 1, 10, 6, 4, 9, 5]));

///////////// SORT ALGO (bubbleSort())

// const bubbleSort = (arr) => {
//   let swapped = false;

//   for (let i = 1; i < arr.length - 1; i++) {
//     swapped = false;
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j + 1] < arr[j]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       return arr;
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([4, 1, 5, 3, 2, 8, 6, 7]));

//////////////////////////////////// SORT ALGO (quickSort())

// const quickSort = (arrr) => {
//   const arr = [...arrr];
//   if (arr.length < 2) return arr;

//   const pivot = arr[arr.length - 1];

//   const lesserArr = arr.filter((number) => number < pivot);

//   const greaterArr = arr.filter((number) => number > pivot);

//   return [...quickSort(lesserArr), pivot, ...quickSort(greaterArr)];
// };

// // console.log(quickSort([3, 7, 2, 8, 1, 10, 6, 4, 9, 5]));
// console.log(quickSort(["z", "f", "a", "c", "e", "d"]));

// const quickSort = (arr) => {
//   if (arr.length < 2) return arr;

//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat(pivot, quickSort(right));
// };

// console.log(quickSort([3, 7, 2, 8, 1, 10, 6, 4, 9, 5]));

///////////////////////////// SORT ALGO (mergeSort())

// const mergeCombine = (a, b) => {
//   const c = [];

//   /// compare the elements of the arrays and push the lesser values into C first
//   while (a.length && b.length) {
//     c.push(a[0] > b[0] ? b.shift() : a.shift());
//   }

//   /// If there are any elements left
//   while (a.length > 0) c.push(a.shift());
//   while (b.length > 0) c.push(b.shift());

//   return c;
// };

// const mergeSort = (list) => {
//   if (list.length < 2) return list;

//   /// Divide the array into 2 halves
//   const midPoint = Math.floor(list.length / 2);

//   ///
//   const leftArray = list.slice(0, midPoint);
//   const rightArray = list.slice(midPoint, list.length);

//   const a = mergeSort(leftArray);
//   const b = mergeSort(rightArray);
//   return mergeCombine(a, b);
// };

// console.log(mergeSort([3, 7, 2, 8, 1, 10, 6, 4, 9, 5]));

///////////// SORT ALGO (HeapSort())

///////////// SORT ALGO (insertionSort())

////////////////////////////////////////////////////////// DYNAMIC PROGRAMMING  //////////////////////////////////////////////////////////////////

//////////////////// DYNAMIC PROGRAMMING (FIBONNACI SEQUENCE WITH MEMOIZATION)

// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;

//   memo[n] = fib(n - 1) + fib(n - 2); ///////////////////TIME COMP O(n)
//   return memo[n]; //////////////////////SPACE COMP O(n)
// };

// console.log(fib(40));

//////DYNAMIC PROGRAMMING ((gridTraveler))

// const gridTraveler = (n, m, memo = {}) => {
//   const key = n + "," + m;
//   if (key in memo) return memo[key];
//   if (n === 1 && m === 1) return 1;
//   if (n === 0 || m === 0) return 0;

//   memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo); //////TIME COMP= O(n*m)
//   return memo[key]; /////////////////////SPACE COMP O(n + m)
// };

// console.log(gridTraveler(2, 3));

///////////////// DYNAMIC PROGRAMMING (canSum)

// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 1) return false;
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) {
//       memo[remainder] = true;
//       return memo[remainder];
//     }
//   }
//   return false;
// };

// const result = canSum(7, [3, 4]);
// console.log(result);

//////////////////////// DYNAMIC PROGRAMMING (howSum)

// const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderResult = howSum(remainder, numbers, memo);
//     if (remainderResult !== null) {
//       memo[targetSum] = [...remainderResult, num];
//       return memo[targetSum];
//     }
//   }
//   return null;
// };

// console.log(howSum(3017, [3, 2, 4]));

//////////////////////// DYNAMIC PROGRAMMING (bestSum)

// const bestSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   let shortestCombination = null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const bestCombination = bestSum(remainder, numbers);
//     if (bestCombination !== null) {
//       const bestCombinationResult = [...bestCombination, num];
//       if (
//         shortestCombination === null ||
//         bestCombinationResult.length < shortestCombination.length
//       ) {
//         shortestCombination = bestCombinationResult;
//       }
//     }
//   }
//   memo[targetSum] = shortestCombination;
//   return shortestCombination;
// };

// console.log(bestSum(100, [1, 2, 5, 25]));

///////////////// DYNAMIC PROGRAMMING (canConstruct)

// const canConstruct = (targetWord, wordArray, memo = {}) => {
//   if (targetWord in memo) return memo[targetWord];
//   if (targetWord === "") return true;

//   for (let word of wordArray) {
//     if (targetWord.indexOf(word) === 0) {
//       const suffix = targetWord.slice(word.length);
//       if (canConstruct(suffix, wordArray) === true) {
//         memo[targetWord] = true;
//         return memo[targetWord];
//       }
//     }
//   }
//   return false;
// };

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(canConstruct("drainage", ["nage", "ra", "ain", "a", "ai"]));

////////////// DYNAMIC PROGRAMMING (countConstruct)

// const countConstruct = (targetWord, wordArray, memo = {}) => {
//   if (targetWord in memo) return memo[targetWord];
//   if (targetWord === "") return 1;
//   let count = 0;

//   for (let word of wordArray) {
//     if (targetWord.indexOf(word) === 0) {
//       const suffix = targetWord.slice(word.length);
//       const result = countConstruct(suffix, wordArray, memo);
//       count += result;
//     }
//   }
//   memo[targetWord] = count;
//   return count;
// };

// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

/////////////DYNAMIC PROGRAMMING (allConstruct)

// const allConstruct = (targetWord, wordArray, memo = {}) => {
//   if (targetWord in memo) return memo[targetWord];
//   if (targetWord === "") return [[]];

//   let completeArray = [];

//   for (let word of wordArray) {
//     if (targetWord.indexOf(word) === 0) {
//       const suffix = targetWord.slice(word.length);
//       const result = allConstruct(suffix, wordArray, memo);
//       const newArray = result.map((arr) => [word, ...arr]);

//       completeArray.push(...newArray);
//     }
//   }
//   memo[targetWord] = completeArray;
//   return completeArray;
// };

// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

// const countConstruct = (targetWord, wordArray, memo = {}) => {
//   if (targetWord in memo) return memo[targetWord];
//   if (targetWord === "") return 1;
//   let count = 0;

//   for (let word of wordArray) {
//     if (targetWord.indexOf(word) === 0) {
//       const suffix = targetWord.slice(word.length);
//       const result = countConstruct(suffix, wordArray, memo);
//       count += result;
//     }
//   }
//   memo[targetWord] = count;
//   return count;
// };

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

///////////////////// TABULATION METHOD DYNAMIC PROGRAMMING (fib)

// const fib = (n) => {
//   const table = Array(n + 1).fill(0);

//   table[1] = 1;

//   for (let i = 0; i <= n; i++) {
//     table[i + 1] += table[i];
//     table[i + 2] += table[i];
//   }

//   return table[n];
// };

// console.log(fib(3));

/////////////////////// TABULATION METHOD DYNAMIC PROGRAMMING (gridTraveler)
// const gridTraveler = (m, n) => {
//   const table = Array(m + 1)
//     .fill()
//     .map(() => Array(n + 1).fill(0));

//   table[1][1] = 1;

//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++) {
//       const current = table[i][j];
//       if (j + 1 <= n) table[i][j + 1] += current;
//       if (i + 1 <= m) table[i + 1][j] += current;
//     }
//   }
//   return table[m][n];
// };
// console.log(gridTraveler(3, 2));

///////////////// DYNAMIC PROGRAMMING (TABULATION) (canSum)

// const canSum = (targetNumber, numbers) => {
//   const table = Array(targetNumber + 1).fill(false);
//   table[0] = true;

//   for (let i = 0; i <= targetNumber; i++) {
//     for (let num of numbers) {
//       if (table[i] === true) {
//         table[i + num] = table[i];
//       }
//     }
//   }
//   return table[targetNumber];
// };

// console.log(canSum(0, [5, 3, 4]));

/////////////// DYNAMIC PROGRAMMING (TABULATION) (howSum)

// const howSum = (targetNumber, numbers) => {
//   const table = Array(targetNumber + 1).fill(null);
//   table[0] = [];

//   for (let i = 0; i <= targetNumber; i++) {
//     if (table[i] !== null) {
//       for (let num of numbers) {
//         const current = table[i];
//         table[i + num] = [...current, num];
//       }
//     }
//     numbers.shift(i);
//   }

//   return table[targetNumber];
// };

// console.log(howSum(6, [3, 2, 4]));

///////////////////// DYNAMIC PROGRAMMING TABULATION METHOD (bestSum)

// const bestSum = (targetNumber, numbers) => {
//   const table = Array(targetNumber + 1).fill(null);
//   table[0] = [];

//   for (let i = 0; i < targetNumber; i++) {
//     if (table[i] !== null) {
//       for (let num of numbers) {
//         const combination = [...table[i], num];
//         if (!table[i + num] || table[i].length > combination) {
//           table[i + num] = combination;
//         }
//       }
//     }
//   }
//   return table[targetNumber];
// };

// console.log(bestSum(6, [3, 2, 4]));

// const twoSum = (targetNum, numbers) => {
//   if (targetNum === 0) return [];
//   if (targetNum < 0) return null;
// };

////////////////////////////////////////////////////////////////////HEAP'S ALGO///////////////////////////////////////////////////////

// const heapSort = (arr) => {
//   const output = [];

//   const swapArr = (indexA, indexB, arrToSwap) => {
//     [arrToSwap[indexA]] = [arrToSwap[indexB]];
//   };

//   const generatPerm = (heapArrLen, heapArray) => {
//     if (heapArrLen === 1) {
//       output.push(heapArray.slice());
//       return;
//     }

//     generatPerm(heapArrLen - 1, heapArray);

//     for (let i = 0; i < heapArrLen - 1; i++) {
//       if (heapArrLen % 2 === 0) {
//         swapArr(i, heapArrLen - 1, heapArray);
//       } else {
//         swapArr(0, heapArrLen - 1, heapArray);
//       }

//       generatPerm(heapArrLen - 1, heapArray);
//     }
//   };
//   generatPerm(arr.length, arr.slice());
//   return output;
// };

// console.log(heapSort([1, 2, 3]));

// const demo = (string, longest = 0, memoTwo = {}) => {
//   if (memoTwo[string] === true) return memoTwo[string];
//   if (string.length <= 0) return longest;

//   let memoOne = {};
//   let currentString = "";

//   // console.log(memoOne);

//   let current = 0;

//   for (let ch in string) {
//     if (memoOne[string[ch]] === undefined) {
//       memoOne[string[ch]] = string[ch];
//       currentString += string[ch];
//       // console.log(memoOne);
//       current++;
//       // console.log({ current });
//     } else if (memoTwo[string] === true) {
//       return memoTwo[string];
//     } else {
//       // console.log({ longest });
//       break;
//     }
//   }
//   longest = Math.max(longest, current);
//   memoTwo[currentString] = longest;
//   // console.log({ longest });
//   const remainder = string.substring(1);
//   // console.log({ remainder });

//   const result = demo(remainder, longest, memoTwo);

//   console.log(`${current} = ${result}`);

//   return result;
// };

// );
// console.log(demo("cbdaab"));

////////////////////////////////////////////////RANDOM ALGO (Nth Prime Number)
// function Prime(num) {
//   output = true;
//   for (var i = 2; i < num; i++) {
//     //var i=2
//     if (num % i === 0) {
//       output = false;
//       break;
//     }
//   }
//   return output;
// }

// function PrimeMover(N) {
//   var count = 0;
//   for (var i = 2; i < 10000; i++) {
//     //var i=2
//     if (Prime(i) === true) {
//       count = count + 1;
//     }
//     if (count === num) {
//       return i;
//       break;
//     }
//   }
// }

// console.log(PrimeMover(5));

// var lengthOfLongestSubstring = function (string, longest = 0) {
//   if (string.length <= 0) return longest;

//   let memo = {};

//   let current = 0;

//   for (let ch in string) {
//     if (memo[string[ch]] === undefined) {
//       memo[string[ch]] = string[ch];

//       current++;
//     } else {
//       break;
//     }
//   }
//   longest = Math.max(longest, current);

//   const remainder = string.substring(1);

//   return demo(remainder, longest);
// };

// const canSum = (target, arr, memo = {}) => {
//   if (target in memo) {
//     return memo[target];
//   }

//   if (target === 0) {
//     return true;
//   }

//   if (target < 0) {
//     return false;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     console.log({ target });
//     const remainder = target - arr[i];
//     console.log({ remainder });

//     if (remainder === 0) {
//       memo[target] = true;
//     }

//     if (canSum(remainder, arr, memo) === true) {
//       return true;
//     }
//   }

//   memo[target] = false;
//   return false;
// };

// console.log(howSum(7, [5, 3, 4, 7]));

// console.log(canSum(300, [7, 14]));

// const howSum = (targetNum, nums, memo = {}) => {
//   if (targetNum in memo) {
//     return memo[targetNum];
//   }

//   if (targetNum === 0) return [];
//   if (targetNum < 0) return null;

//   let currentShortest = null;

//   for (let i = 0; i < nums.length; i++) {
//     console.log({ currentShortest });
//     console.log({ targetNum });
//     const currentNum = nums[i];
//     console.log({ currentNum });
//     const remainder = targetNum - currentNum;
//     // console.log({ remainder });
//     const remainderResult = howSum(remainder, nums, memo);

//     if (remainderResult !== null) {
//       const combination = [...remainderResult, currentNum];

//       if (
//         currentShortest === null ||
//         combination.length < currentShortest.length
//       ) {
//         currentShortest = combination;
//       }
//     }
//   }

//   console.log(currentShortest);
//   return currentShortest;
// };

// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(100, [1, 2, 5, 25]));

// const canConstruct = (targetWord, wordBank, memo = {}) => {
//   if (targetWord in memo) return memo[targetWord];

//   if (targetWord === "") return 1;

//   let count = 0;

//   for (let i = 0; i < wordBank.length; i++) {
//     if (targetWord.indexOf(wordBank[i]) === 0) {
//       const suffix = targetWord.slice(wordBank[i].length);
//       const result = canConstruct(suffix, wordBank, memo);

//       count += result;
//       memo[targetWord] = count;
//     }
//   }

//   memo[targetWord] = count;
//   return count;
// };

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
// console.log(canConstruct("abcdef", ["ab", "absc", "csd", "desf", "abcsd"]));
// console.log(
//   canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//   ])
// );

// const bubbleSort = (nums) => {
//   console.log({ nums });

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] > nums[j + 1]) {
//         const temp = nums[j + 1];
//         nums[j + 1] = nums[j];
//         nums[j] = temp;
//       }
//     }
//   }

//   return { nums };
// };

// console.log(bubbleSort([99, 44, 6, 2, 1]));

// const selectionSort = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     let currentShortest = nums[i];
//     let currentShortestIndex = i;
//     for (let j = i; j < nums.length; j++) {
//       if (nums[j] < currentShortest) {
//         currentShortest = nums[j];
//         currentShortestIndex = j;
//       }
//     }

//     const temp = nums[i];
//     nums[i] = currentShortest;
//     nums[currentShortestIndex] = temp;
//   }

//   return nums;
// };

// console.log(selectionSort([99, 44, 6, 2, 1]));
// console.log(selectionSort([8, 1, 5, 0, 2, 3]));

const allConstruct = (targetWord, wordBank, memo = {}) => {
  if (targetWord in memo) return memo[targetWord];
  if (targetWord === "") return [[]];

  const allWays = [];

  for (let i = 0; i < wordBank.length; i++) {
    if (targetWord.indexOf(wordBank[i]) === 0) {
      const suffix = targetWord.slice(wordBank[i].length);
      const results = allConstruct(suffix, wordBank, memo);
      const ways = results.map((result) => [wordBank[i], ...result]);
      allWays.push(...ways);
    }
  }

  memo[targetWord] = allWays;
  return allWays;
};

console.log(allConstruct("purple", ["purp", "le", "p", "ur"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeeee",
    "eeeeeeee",
  ])
);
