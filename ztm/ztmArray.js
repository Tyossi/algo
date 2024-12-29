////////////////////////// TWO SUM

// const twoSum = (arr, targetNumber) => {
//   if (arr.length < 2) return null;
//   if (arr === []) return [];

//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (targetNumber - arr[i] === arr[j]) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// };

// const twoSum = (arr, tNum) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[i] + arr[j] === tNum) return [i, j];
//     }
//   }
//   return null;
// };

///////////// twoSum (Optimized with harshMap/Memoization)
// const twoSum = (arr, targetNum) => {
//   const memo = {};
//   for (let i = 0; i < arr.length; i++) {
//     console.log({ memo });
//     const currentNumber = arr[i];
//     console.log({ currentIndex: i, value: currentNumber });
//     const neededValue = targetNum - currentNumber;
//     console.log({ currentNeededNumber: neededValue });
//     const index2 = memo[neededValue];
//     if (index2 != null) {
//       console.log(
//         "Needed Number " + "(" + neededValue + ")" + "Found" + +"in the memo"
//       );
//       return [index2, i];
//     } else {
//       console.log("Needed Number not found in memo");
//       memo[currentNumber] = i;
//     }
//   }
//   return null;
// };

// console.log(twoSum([1, 3, 7, 9, 2, 4], 13));

//////////////////// MAX WATER

// const findMaxWater = (arr) => {
//   //   const memo = { maxArea: 0, indexA: 0, indexB: 0 };

//   let maxArea = 0;
//   console.log({ maxArea: maxArea });

//   for (let i = 0; i < arr.length; i++) {
//     console.log({ currentValue: arr[i] });
//     for (let j = i + 1; j < arr.length; j++) {
//       //   const length = arr[i] < arr[j] ? arr[i] : arr[j];
//       const length = Math.min(arr[i], arr[j]);
//       console.log({ length: length });

//       const width = j - i;
//       console.log({ width: width });

//       const area = length * width;
//       console.log({ area: area });

//       //   if (maxArea < area) maxArea = area;
//       maxArea = Math.max(maxArea, area);
//       console.log({ newMaxArea: maxArea });
//     }
//     return maxArea;
//   }
//   return null;
// };

// console.log(findMaxWater([7, 1, 2, 3, 9]));

////////////////// MAX WATER OPTIMIZED SOLUTION (TWO POINTER TECHNIQUE)

// const findMaxWater = (height) => {
//   let maxArea = 0;

//   for (let i = 0; i < height.length; i++) {
//     let indexA = i;
//     let indexB = height.length - 1;

//     const a = height[indexA];

//     const b = height[indexB];

//     const width = indexB - indexA;

//     if (a < b) {
//       const height = a;
//       const area = height * width;
//       maxArea = area > maxArea ? area : maxArea;
//       indexA++;
//       console.log({ indexA: indexA });
//       console.log({ valueOfA: a });
//     } else {
//       const height = b;
//       const area = height * width;
//       maxArea = area > maxArea ? area : maxArea;
//       indexB--;
//       console.log({ indexB: indexB });
//       console.log({ valueOfB: b });
//     }
//   }
//   return maxArea;
// };

// const findMaxWater = (arr) => {
//   let maxArea = 0;

//   let p1 = 0;
//   let p2 = arr.length - 1;

//   while (p1 < p2) {
//     const height = arr[p1] < arr[p2] ? arr[p1] : arr[p2];
//     // const height = Math.min(arr[p1], arr[p2]);
//     const width = p2 - p1;
//     const area = height * width;
//     maxArea = area > maxArea ? area : maxArea;
//     // maxArea = Math.max(area, maxArea);

//     if (arr[p1] <= arr[p2]) {
//       p1++;
//     } else {
//       p2--;
//     }
//   }
//   return maxArea;
// };

//////////////////////////// totalMaxWater (HARD)

// const findTotalWater = (arr) => {
//   let total = 0;
//   console.log({ total: total });

//   for (let i = 0; i < arr.length; i++) {
//     const currentIndex = i;
//     console.log({ currentIndex: currentIndex });
//     let leftIndex = currentIndex;
//     let rightIndex = currentIndex;
//     let maxLeft = 0;
//     let maxRight = 0;

//     while (leftIndex >= 0) {
//       maxLeft = Math.max(maxLeft, arr[leftIndex]);
//       leftIndex--;
//     }
//     console.log({ maxLeft: maxLeft });

//     while (rightIndex < arr.length) {
//       maxRight = Math.max(maxRight, arr[rightIndex]);
//       rightIndex++;
//     }
//     console.log({ maxRight: maxRight });

//     const currentHeight = Math.min(maxRight, maxLeft) - arr[currentIndex];
//     console.log({ currentHeight });

//     if (currentHeight >= 0) {
//       total += currentHeight;
//       console.log({ total });
//     }
//   }
//   return total;
// };

// console.log(findTotalWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

////////////////////////// totalMaxWater (HARD) OPTIMIZED SOLUTION

// const findTotalWater = (arr) => {
//   let total = 0;
//   let lP = 0;
//   let rP = arr.length - 1;
//   let maxLeft = 0;
//   let maxRight = 0;

//   while (lP < rP) {
//     if (arr[lP] <= arr[rP]) {
//       if (arr[lP] >= maxLeft) {
//         maxLeft = arr[lP];
//       } else {
//         const currentHeight = maxLeft - arr[lP];
//         total += currentHeight;
//       }
//       lP++;
//     } else {
//       if (arr[rP] >= maxRight) {
//         maxRight = arr[rP];
//       } else {
//         const currentHeight = maxRight - arr[rP];
//         total += currentHeight;
//       }
//       rP--;
//     }
//   }
//   return total;
// };

// const findMaxWater = (arr) => {
//   let totalWaterCount = 0;

//   for (let i = 1; i < arr.length; i++) {
//     let p1 = i - 1;
//     let p2 = i + 1;
//     let currentHeight = 0;
//     let maxLeft = 0;
//     let maxRight = 0;
//     while (p1 > 0 || p2 < arr.length) {
//       maxLeft = Math.max(maxLeft, arr[p1]);
//       maxRight = Math.max(maxRight, arr[p2]);
//       p1--;
//       p2++;
//     }
//     currentHeight = Math.min(maxLeft, maxRight);
//     const count = currentHeight - arr[i];
//     if (count > 0) {
//       totalWaterCount += count;
//     }
//   }
//   return totalWaterCount;
// };

// // console.log(findTotalWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
// console.log(findMaxWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// const scoreCounter = (ops) => {
//   //   const nums = ["2", "2", "c", "d", "+"];
//   var result = [];
//   let score = "";
//   for (let i = 0; i < ops.length - 1; i++) {
//     if (ops[i] === "c") {
//       result.pop();
//       i++;
//     }
//     if (ops[i] === "d") {
//       //   console.log("d =" + nums[i]);
//       const doubledScore = result[result.length - 1] * 2;
//       result.push(doubledScore);
//       i++;
//     }

//     if (ops[i] === "+") {
//       const twoSum = result[result.length - 1] + result[result.length - 2];
//       result.push(twoSum);
//       break;
//     }
//     score = Number(ops[i]);
//     result.push(score);
//     console.log(result);
//   }
//   return result;
// };

// console.log(scoreCounter(["2", "2", "3", "+", "d", "c"]));
// const nums = ["1", "2", "3", "c", "d", "+"];

// const scoreCounter = (nums) => {
//   let newNums = null;
//   newNums = [];

//   for (let num of nums) {
//     switch (num) {
//       case "c":
//         newNums.pop()
//         break;

//       case "d":
//         const doubled = newNums[newNums.length - 1] * 2
//         newNums.push(doubled);
//         break;

//       case "+":
//         const twoSum =
//           newNums[newNums.length - 1] + newNums[newNums.length - 2]
//         newNums.push(twoSum);
//         break;

//       default:
//         const newNum = parseInt(num);
//         newNums.push(newNum);
//         console.log(newNums);
//     }
//   }
//   return newNums;
// };
// scoreCounter(["5", "-2", "3", "c", "d", "+"]);
// const twoSum = (arr, target) => {
//   let memo = {};
//   for (let i = 0; i < arr.length; i++) {
//     const remainder = target - arr[i];

//     if (memo[arr[i]] >= 0) {
//       return [memo[arr[i]], i];
//     } else {
//       memo[remainder] = i;
//     }
//   }
//   return null;
// };

// console.log(twoSum([1, 2, 1, 3, 4, 8], 12));

// const maxAreaOfWater = (arr) => {
//   let maxArea = 0;
//   let a = 0;
//   let b = arr.length - 1;

//   while (a < b) {
//     if (arr[a] <= arr[b]) {
//       const height = arr[a];
//       const width = b - a;
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//       a++;
//     } else {
//       const height = arr[b];
//       const width = b - a;
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//       b--;
//     }
//   }
//   return maxArea;
// };

// // maxAreaOfWater([10, 2, 10, 4, 6, 10]);

// console.log(maxAreaOfWater([10, 2, 1, 4, 6, 10]));

// const totalTrappedWater = (arr) => {
//   let totalWater = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let a = i;
//     let b = i;
//     let maxL = 0;
//     let maxR = 0;

//     while (a >= 0) {
//       maxL = Math.max(maxL, arr[a]);
//       a--;
//     }

//     while (b < arr.length) {
//       maxR = Math.max(maxR, arr[b]);
//       b++;
//     }

//     const height = Math.min(maxL, maxR);
//     const currentHeight = height - arr[i];

//     if (currentHeight > 0) {
//       totalWater += currentHeight;
//     }
//   }
//   return totalWater;
// };

// console.log(totalTrappedWater([1, 0, 3, 4, 2, 3, 0, 1, 0, 2]));

// const totalTrappedWater = (arr) => {
//   let total = 0;
//   let maxL = 0;
//   let maxR = 0;
//   let a = 0;
//   let b = arr.length - 1;

//   while (a < b) {
//     maxL = Math.max(maxL, arr[a]);
//     maxR = Math.max(maxR, arr[b]);

//     if (maxL < maxR) {
//       const currentHeight = maxL - arr[a];
//       if (currentHeight > 0) total += currentHeight;
//       a++;
//     } else {
//       const currentHeight = maxR - arr[b];
//       if (currentHeight > 0) total += currentHeight;
//       b--;
//     }
//   }

//   return total;
// };

// console.log(totalTrappedWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// };

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const numToFind = target - nums[j];
//       if (numToFind === nums[i]) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// };

// const findMaxWater = (arr) => {
//   let totalWater = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let currentHeight = arr[i];
//     let p1 = i;
//     let p2 = i;
//     let maxL = 0;
//     let maxR = 0;

//     while (p1 >= 0) {
//       maxL = Math.max(maxL, arr[p1]);
//       p1--;
//     }

//     while (p2 <= arr.length - 1) {
//       maxR = Math.max(maxR, arr[p1]);
//       p2++;
//     }

//     const height = Math.min(maxL, maxR);

//     const water = height - currentHeight;

//     if (water >= 0) {
//       totalWater += water;
//     }
//   }
//   return totalWater;
// };

// console.log(findMaxWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// const findTotalWater = (arr) => {
//   let totalWater = 0;

//   let maxL = 0;

//   let maxR = 0;

//   let p1 = 0;

//   let p2 = arr.length - 1;

//   while (p1 < p2) {
//     if (arr[p1] <= arr[p2]) {
//       currentHeight = arr[p1];
//       maxL = Math.max(maxL, arr[p1]);
//       const water = maxL - currentHeight;
//       if (water >= 0) {
//         totalWater += water;
//       }
//       p1++;
//     } else {
//       currentHeight = arr[p2];
//       maxR = Math.max(maxR, arr[p2]);
//       const water = maxR - currentHeight;
//       if (water >= 0) {
//         totalWater += water;
//       }
//       p2--;
//     }
//   }
//   return totalWater;
// };

// console.log(findTotalWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

//////////////////////////////// BackSPace(Yossi's Solution)

// const backSpace = (s, t) => {
//   let sTwo = "";
//   let tTwo = "";

//   const length = Math.max(s.length, t.length);

//   for (let i = 0; i < length; i++) {
//     if (i <= s.length - 1) {
//       if (s[i] === "#") {
//         sTwo = sTwo.slice(0, -1);
//       } else {
//         sTwo += s[i];
//         console.log({ sTwo });
//       }
//     }
//     if (i <= t.length - 1) {
//       if (t[i] === "#") {
//         tTwo = tTwo.slice(0, -1);
//       } else {
//         tTwo += t[i];
//         console.log({ tTwo });
//       }
//     }
//   }

//   if (sTwo === tTwo) {
//     return true;
//   }

//   return false;
// };

// console.log(backSpace("c#r", "ad##r"));

// const backSpaceCompare = () => {

// }

// const str = "abccabb";

// const longestSubStr = (str) => {
//   let longestStr = 0;

//   for (let i = 0; i < str.length; i++) {
//     let memo = {};
//     let currentLongest = 0;
//     for (let j = i; j < str.length; j++) {
//       // let currentCh = str[j];
//       if (str[j] in memo) {
//         longestStr = Math.max(longestStr, currentLongest);
//         console.log(memo[str[j]]);
//         break;
//       } else {
//         memo[str[j]] = "here";
//         currentLongest++;
//       }
//     }
//   }
//   return longestStr;
// };

// console.log(longestSubStr("abcdab"));

// const longestSubStr = (str) => {
//   let longestStr = 0;
//   let i = 0;

//   for (let j = 0; j < str.length; j++) {
//     let tempLength = 0;
//     let memo = {};
//     let currentCh = str[j];
//     if (currentCh in memo) {
//       i = memo[currentCh] + 1;
//     } else {
//       memo[currentCh] = j;
//       tempLength++;
//       longestStr = Math.max(longestStr, tempLength);
//     }
//   }
//   return longestStr;
// };

// console.log(longestSubStr("abcbbd"));

// let s = "A man, a plan, a canal: Panama";

// const palindromeChecker = (str) => {
//   const convertedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

//   let p1 = 0;

//   let p2 = convertedStr.length - 1;

//   let confirmation = true;

//   while (p1 <= p2) {
//     if (convertedStr[p1] != convertedStr[p2]) {
//       confirmation = false;
//       return confirmation;
//     }
//     p1++;
//     p2--;
//   }
//   return confirmation;
// };

// const palindromeChecker = (str) => {
//   const convertedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

//   return confirmation;
// };

// console.log(palindromeChecker("A man, a plan, a canal: Panama"));

// let str = "hello";

// let splitStr = str.split("");

// let reverseStr = splitStr.reverse();

// let newStr = reverseStr.join("");

// const perlindromChecker = (str) => {

//   const convertedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

//   let p1 = 0;
//   let p2 = 0;
//   let count = 0;
//   let confirmation = true;

//   console.log(newStr);

//   while (p1 <= p2) {
//     if (convertedStr[p1] != newStr[p2]) {
//       count++;
//       console.log(count);
//       if (count > 1) {
//         confirmation = false;
//         return confirmation;
//       }
//     }
//     p1++;
//     p2++;
//   }
//   return confirmation;
// };

// console.log(perlindromChecker("abc"));

// const letters = "abcd";
// const p1 = letters.length / 2;
// const p2 = p1 + 1;

// console.log(Math.round(p1), Math.round(p2));
// ("agettkgacee");

// let str = "aabcccabba";
// let length = str.length / 2;
// let str2 = str.split(" ", length);
// console.log(length);

// const stringCompare = (str1, str2) => {
//   let p1 = str1.length - 1;
//   let p2 = str2.length - 1;
//   let backSpace = 0;

//   let length = Math.max(str1.length, str2.length);

//   while (p1 || p2 > 0) {
//     if (str1[p1] !== "#") {
//       if (str1[p1] === str2[p2]) {
//         return false;
//       }
//     } else {
//       backSpace = 2;
//       while (backSpace > 0) {
//         p1--;
//       }
//     }
//     if (str2[p2] === "#") {
//       backSpace = 2;
//       while (backSpace > 0) {
//         p2--;
//       }
//     }
//   }
// };

// const result = stringCompare("acb##c", "az#c");

// console.log(result);

// const longestSubStr = (str) => {
//   let longestStr = 0;
//   let p1 = 0;
//   // let p2 = 0;
//   let memo = {};

//   for (let p2 = 0; p2 < str.length; p2++) {
//     if (!memo[str[p2]]) {
//       memo[str[p2]] = p2;
//       if (p2 === str.length - 1) {
//         let currentLongest = p2 - p1 + 1;
//         longestStr = Math.max(longestStr, currentLongest);
//       }
//     } else {
//       if (memo[str[p2]] >= p1) {
//         let currentLongest = p2 - p1;
//         console.log({ currentLongest });

//         // if (p2 === str.length - 1) {
//         //   currentLongest + 1;
//         // }
//         longestStr = Math.max(currentLongest, longestStr);
//         p1 = memo[str[p2]] + 1;
//         memo[str[p2]] = p2;
//       } else {
//         memo[str[p2]] = p2;
//       }
//     }
//   }
//   return longestStr;
// };

// const result = longestSubStr("");

// console.log(result);

// const palindromeChecker = (str) => {
//   str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   const splitStr = str.split("");
//   const reverseStr = splitStr.reverse();
//   const s = reverseStr.join("");

//   console.log(str);
//   console.log(s);

//   let counter = 0;

//   let p1 = 0;
//   let p2 = str.length - 1;

//   while (p1 <= p2) {
//     if (str[p1] !== str[p2]) {
//       counter++;
//       console.log({ counter });
//       if (counter > 1) {
//         return false;
//       }
//     }
//     console.log(str[p1], str[p2]);
//     p1++;
//     ("");
//     p2++;
//   }
//   return true;
// };
// const result = palindromeChecker("raceacar");
// console.log(result);

// const totalWater = (nums) => {
//   let totalWater = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let maxLeft = 0;
//     let maxRight = 0;
//     let p1 = i - 1;
//     let p2 = i + 1;

//     while (p1 >= 0) {
//       maxLeft = Math.max(maxLeft, nums[p1]);
//       p1--;
//     }

//     while (p2 < nums.length) {
//       maxRight = Math.max(maxRight, nums[p2]);
//       p2++;
//     }

//     const height = Math.min(maxLeft, maxRight);
//     const currentWater = height - nums[i];

//     if (currentWater > 0) {
//       totalWater += currentWater;
//     }
//   }

//   return totalWater;
// };

// console.log(totalWater([1, 0, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

///// REVISION

//// Two SUm

const twoSumBrute = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const numToFind = arr[i] + arr[j];
      if (numToFind === target) {
        return [i, j];
      }
    }
  }
};

const twoSumOpt = (arr, target) => {
  const memo = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in memo) {
      return [memo[arr[i]], i];
    } else {
      memo[target - arr[i]] = i;
    }
  }
};

// console.log(twoSumOpt([7, 3, 1, 9, 2], 16));

////// Area of Water

const maxAreaOfWater = (arr) => {
  let maxAreaOfWater = 0;

  let p1 = 0;
  let p2 = 1;

  while (p1 <= arr.length - 1 && p2 <= arr.length - 1) {
    const height = Math.min(arr[p1], arr[p2]);
    let length;
    if (p1 > p2) {
      length = p1 - p2;
    } else {
      length = p2 - p1;
    }

    const currentWater = height * length;

    maxAreaOfWater = Math.max(maxAreaOfWater, currentWater);

    if (arr[p1] > arr[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return maxAreaOfWater;
};

//////////////////////

const mostFreqChar = (str) => {
  let longest = 0;
  let mostFreqChar = null;

  for (let i = 0; i < str.length - 1; i++) {
    let currentLongest = 0;

    for (let j = i; j < str.length - 1; j++) {
      if (isNaN(str[i]) && isNaN(str[j])) {
        if (str[i] === str[j]) {
          currentLongest++;
        }
      }
    }

    if (currentLongest > longest) {
      mostFreqChar = str[i];
      longest = currentLongest;
    }
  }
  return mostFreqChar;
};

const mostFreqCharOpt = (str) => {
  let longest = 0;
  let mostFreqChar = null;
  let memo = {};

  for (let i = 0; i <= str.length - 1; i++) {
    if (isNaN(str[i])) {
      if (str[i] in memo) {
        memo[str[i]] = memo[str[i]] + 1;
        if (memo[str[i]] > longest) {
          longest = memo[str[i]];
          mostFreqChar = str[i];
        }
      } else {
        memo[str[i]] = 1;
        if (memo[str[i]] > longest) {
          longest = memo[str[i]];
          mostFreqChar = str[i];
        }
      }
    }
    console.log({ memo });
  }
  return mostFreqChar;
};

console.log(mostFreqCharOpt("0asdasa"));
