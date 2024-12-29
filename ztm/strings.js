////////////////////////// STRING COMPARE ()

// const checkString = (string) => {
//   const sT = [];

//   for (let ch of string) {
//     if (ch === "#") {
//       sT.pop();
//     } else {
//       sT.push(ch);
//     }
//   }
//   return sT;
// };

// const stringCompare = (s1, s2) => {
//   const string1 = checkString(s1);
//   const string2 = checkString(s2);

//   if (string1.length !== string2.length) {
//     return false;
//   } else {
//     for (let i in string1) {
//       if (string1[i] !== string2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// console.log(stringCompare("a#bcz", "a#bcz"));

////////////////////////////////STRING COMPARE (OPTIMIZED SOLUTION)

// const stringCompare = (sT1, sT2) => {
//   let p1 = sT1.length - 1;
//   let p2 = sT2.length - 1;

//   while (p1 >= 0 || p2 >= 0) {
//     //time comp = 0(a + b)
//     if (sT1[p1] === "#" || sT2[p2] === "#") {
//       if (sT1[p1] === "#") {
//         let backspace = 2;
//         while (backspace > 0) {
//           /// time comp = 0(2)
//           p1--;
//           backspace--;
//           if (sT1[p1] === "#") {
//             backspace += 2;
//           }
//         }
//       }
//       if (sT2[p2] === "#") {
//         let backspace = 2;
//         while (backspace > 0) {
//           /// time comp = 0(2)
//           p2--;
//           backspace--;
//           if (sT2[p2] === "#") {
//             backspace += 2;
//           }
//         }
//       }
//     } else {
//       if (sT1[p1] !== sT2[p2]) {
//         return false;
//       } else {
//         p1--;
//         p2--;
//       }
//     }
//   }
//   return true;
// };

// console.log(stringCompare("a#bcz", "a#bcz"));

////////////////////////////// LONGEST SUBSTRING

// const longestSubString = (string) => {
//   if (string.length <= 1) return string.length;

//   let longest = 0;

//   for (let i = 0; i < string.length; i++) {
//     //////    O(n)
//     let memo = {}; /////////// SPACE COMP O(n)
//     let currentLength = 0;

//     for (let j = i; j < string.length; j++) {
//       //////  O(n) ////// TIME COMP O(n2)
//       if (!memo[string[j]]) {
//         currentLength++;
//         memo[string[j]] = true;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }
//   return longest;
// };

////////////////////////////// LONGEST SUBSTRING (WINDOW OPTIMIZATION TECHNIQUE)

// const longestSubString = (string) => {
//   let longest = 0;
//   let p1 = 0;
//   while (p1 < string.length) {
//     let p2 = p1;
//     let currentLength = 0;
//     let memo = {};
//     if (!memo[string[p2]]) {
//       memo[string[p2]] = true;
//       currentLength++;
//       longest = Math.max(longest, currentLength);
//       p2++;
//     } else {
//       p1++;
//     }
//   }

//   return longest;
// };
// console.log(longestSubString("abcbda"));

// const stringCompare = (s, t) => {
//   let string1 = "";
//   let string2 = "";

//   for (let ch of s) {
//     if (ch !== "#") {
//       string1 += ch;
//     } else {
//       const string = string1.slice(0, -1);
//       string1 = string;
//     }
//   }

//   for (let ch of t) {
//     if (ch !== "#") {
//       string2 += ch;
//     } else {
//       const string = string2.slice(0, -1);
//       string2 = string;
//     }
//   }

//   if (string1 === string2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const stringCompare = (s, t) => {
//   let string1 = "";
//   let string2 = "";
//   const length = Math.max(s.length, t.length);

//   for (let i = 0; i < length; i++) {
//     if (i < s.length) {
//       if (s[i] !== "#") {
//         string1 += s[i];
//       } else {
//         const str = string1.slice(0, -1);
//         string1 = str;
//       }
//       console.log({ string1 });
//     }

//     if (i < t.length) {
//       if (t[i] !== "#") {
//         string2 += t[i];
//       } else {
//         const str = string2.slice(0, -1);
//         string2 = str;
//       }
//     }
//     console.log({ string2 });
//   }

//   return string1 === string2 ? true : false;
// };

// stringCompare("abcd##d", "#abcd##d");

// console.log(stringCompare("##abc#d", "abc#d"));

// let a = "acd#vd";

// const b = a.slice(0, 2);
// console.log(a);
// console.log(b);

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === "#") {
//     a += a[i];
//     console.log(a);
//   }
// }

// const stringCompare = (s, t) => {
//   let p1 = s.length - 1;
//   let p2 = t.length - 1;

//   while (p1 >= 0 || p2 >= 0) {
//     if (s[p1] === "#" || t[p2] === "#") {
//       if (s[p1] === "#") {
//         let backspace = 2;
//         while (backspace > 0) {
//           p1--;
//           backspace--;

//           if (s[p1] === "#") {
//             backspace += 2;
//           }
//         }
//       }
//       if (t[p2] === "#") {
//         let backspace = 2;

//         while (backspace > 0) {
//           p2--;
//           backspace--;

//           if (t[p2] === "#") {
//             backspace += 2;
//           }
//         }
//       }
//     } else {
//       if (s[p1] !== t[p2]) {
//         return false;
//       } else {
//         p1--;
//         p2--;
//       }
//     }
//   }
//   return true;
// };

// console.log(stringCompare("abc#d", "abdc#d#"));

// const longestSubString = (string) => {
//   let longest = 0;

//   for (let i = 0; i < string.length; i++) {
//     let memo = {};
//     let currentLength = 0;
//     for (let j = i; j < string.length; j++) {
//       if (!memo[string[j]]) {
//         memo[string[j]] = true;
//         currentLength++;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }
//   return longest;
// };

// const longestSubString = (string) => {
//   let currentString = 0;
//   console.log(currentString);
// };
// console.log(longestSubString("abcbdaac"));

// const longestSubString = (string) => {
//   let memo = {};
//   let longestString = 0;
//   let currentLongest = 0;
//   let p = 0;

//   while (p < string.length) {
//     if (string[p] in memo) {
//       longestString = Math.max(longestString, currentLongest);
//       currentLongest = 0;
//       p = memo[string[p]] + 1;
//       memo = {};
//       memo[string[p]] = p;
//       currentLongest++;
//       p++;
//     } else {
//       currentLongest++;
//       longestString = Math.max(currentLongest, longestString);
//       memo[string[p]] = p;
//       p++;
//     }
//   }
//   console.log({ memo });
//   return longestString;
// };

// const parlindromeCheck = (s) => {
//   const string = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   let middleIndex;
//   let p1;
//   let p2;
//   let lettersRemoved = 0;

//   if (string.length % 2 === 0) {
//     middleIndex = string.length / 2;
//     p1 = middleIndex - 1;
//     console.log({ p1 });
//     p2 = middleIndex;
//     console.log({ p2 });
//   } else {
//     middleIndex = Math.floor(string.length / 2);
//     p1 = middleIndex;
//     console.log({ p1 });
//     p2 = middleIndex;
//     console.log({ p2 });
//   }

//   while (p1 >= 0 && p2 < string.length) {
//     if (string[p1] === string[p2]) {
//       p1--;
//       p2++;
//     } else {
//       lettersRemoved++;
//       if (lettersRemoved > 1) {
//         return false;
//       }
//       p1--;
//       p2++;
//     }
//   }

//   return true;
// };

// const subParlindrome = (string, p1, p2) => {
//   while (p1 < p2) {
//     if (string[p1] !== string[p2]) {
//       return false;
//     } else {
//       p1++;
//       p2--;
//     }
//   }

//   return true;
// };

// const parlindromeCheck = (string) => {
//   let p1 = 0;
//   let p2 = string.length - 1;

//   while (p1 < p2) {
//     if (string[p1] === string[p2]) {
//       p1++;
//       p2--;
//     } else {
//       return (
//         subParlindrome(string, p1 + 1, p2) || subParlindrome(string, p1, p2 - 1)
//       );
//     }
//   }

//   return true;
// };

// console.log(parlindromeCheck("amanaplanaccanalpanama"));
// console.log(parlindromeCheck("raceaqaacar"));
// console.log(parlindromeCheck("abccdba"));
// console.log(parlindromeCheck("raceacar"));

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseLinkedList = (head) => {
  let currentNode = head;
  let previousNodes = null;

  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = previousNodes;
    previousNodes = currentNode;
    currentNode = nextNode;
  }

  return previousNodes;
};

// Create a sample linked list
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// Reverse the linked list
const reversedList = reverseLinkedList(node1);

// Check if the reversed list is correct
// You can print the reversed list or perform further assertions
console.log(reversedList);
