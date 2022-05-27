function countFrequencies(words: string[]): number[] {
  // Write your code here
  // To debug: console.error('Debug messages...');
  const dictionary = {};

  for (let word of words) {
    if (!dictionary[word]) {
      dictionary[word] = 0;
    }

    dictionary[word]++;
  }
  return Object.values(dictionary);
}

// console.log(countFrequencies(['let', 'let', 'let', 'zero', 'zero']));

function filterWords(words: string[], letters: string): string[] {
  let regex = new RegExp(`[${letters}]`, 'g');

  words = words.filter((word) => regex.test(word));

  return words;
}

// console.log(filterWords(['the', 'dog', 'got', 'a', 'bone'], 'ae')); // the, a , bone
// console.log(filterWords(['the', 'dog', 'got', 'a', 'bone'], 'e'));

function encode(plainText: string): string {
  if (plainText.length === 0) {
    return '';
  }

  const results = [];
  let letter = plainText[0];
  let count = 0;

  for (let i = 0; i <= plainText.length - 1; i++) {
    if (plainText[i] !== letter) {
      results.push(`${count}${letter}`);
      letter = plainText[i];
      count = 0;
    }
    count++;
  }

  results.push(`${count}${letter}`);

  return results.join('');
}

// console.log(encode('aa'));
// console.log(encode('aabbaa'));
// console.log(encode('aabbcbaaa'));
// console.log(encode('bnkj'));
// console.log(
//   encode('sdcsdcsdcsdcsdcsdcsdcsdcsdcddddcccccsdcsdcsdcsdccdsscddbnkj')
// );

function binarySearch(
  numbers: number[],
  target: number,
  left: number,
  rigth: number
): number {
  if (rigth >= left) {
    let mid = left + (rigth - left) / 2;
    mid = Math.trunc(mid);

    if (numbers[mid] === target) {
      return mid;
    }

    if (numbers[mid] > target) {
      return binarySearch(numbers, target, left, mid - 1);
    }

    return binarySearch(numbers, target, mid + 1, rigth);
  }

  return -1;
}

// const numbersTest = [0, 0.1, 0.002, 3, 4, 5, 6, 7, 80, 90, 100, 1000];
// console.log(binarySearch(numbersTest, 0.002, 0, numbersTest.length - 1));

function bombDetector(numbers: number[], bomb: number): boolean {
  let numbersInString: string = numbers.toString();

  return numbersInString.includes(bomb.toString());
}
// console.log(bombDetector([1, 2, 3, 4, 5, 6], 7));
// console.log(bombDetector([1, 2, 3, 4, 5, 6], 6));

/**
 * searchInsert
 *
 * Example 1:-------------------------
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * Example 2:-------------------------
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * Example 3:-------------------------
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */
function searchInsert(nums: number[], target: number): number {
  let index = binarySearch(nums, target, 0, nums.length - 1);
  if (index === -1) {
    for (let i = 0; i < nums.length; i++) {
      if (target < nums[i]) {
        return i;
      }
    }
    return nums.length;
  }
  return index;
}

// console.log(searchInsert([1, 3, 5, 6], 3));
// console.log(searchInsert([1, 3, 5, 6], 5.5));

/**
 Do not return anything, modify nums in-place instead.
 */
// let numbers: number[] = [0, 1, 0, 3, 12];
// let test: number[] = [0, 1, 0, 0, 3, 0, 12];
// let test1: number[] = [0, 1, 0, 3, 12, 0, 2, 32];

function moveZeroes(nums: number[]): void {
  let temp = 0;
  let right = 0;
  let left = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      right++;
    } else {
      temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right++;
    }
  }
}

// console.log('last', numbers);
// moveZeroes(numbers);
// console.log('now', numbers);
//---------------------------
// console.log('last', test);
// moveZeroes(test);
// console.log('now', test);
//---------------------------
// console.log('last', test1);
// moveZeroes(test1);
// console.log('now', test1);

/**
 Do not return anything, modify s in-place instead.
 */
let s = ['h', 'e', 'l', 'l', 'o'];
let s1 = ['H', 'a', 'n', 'n', 'a', 'h'];
let s2 = ['h', 'o', 'l', 'a'];
function reverseString(s: string[]): void {
  let right = s.length - 1;
  let left = 0;
  let temp = '';

  while (left <= (s.length - 1) / 2) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

// ---------------------------
// console.log('last', s);
// reverseString(s);
// console.log('now', s);
// ---------------------------
// console.log('last', s1);
// reverseString(s1);
// console.log('now', s1);
// ---------------------------
// console.log('last', s2);
// reverseString(s2);
// console.log('now', s2);

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let temp = 0;
  let count = 1;

  while (count <= k) {
    temp = nums.pop();
    nums.unshift(temp);
    count++;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
// console.log('last', nums);
// rotate(nums, k);
// console.log('now', nums);
//----------------------------------*
const nums2 = [-1, -100, 3, 99],
  k2 = 2;
// console.log('last', nums2);
// rotate(nums2, k2);
// console.log('now', nums2);

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
function checkInclusionFake(s1: string, s2: string): boolean {
  /**Esta mal, en s2 las letras deben it juntas */
  const htable1 = {};
  const htable2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (!htable1[s1[i]]) {
      htable1[s1[i]] = 0;
    }
    htable1[s1[i]]++;
  }

  for (let i = 0; i < s2.length; i++) {
    if (!htable2[s2[i]]) {
      htable2[s2[i]] = 0;
    }
    htable2[s2[i]]++;
  }

  for (let prop in htable1) {
    console.log(htable1[prop], htable2[prop]);

    if (htable1[prop] !== htable2[prop]) {
      return false;
    }
  }

  return true;
}

// console.log('checkInclusion', checkInclusion('ab', 'eidbooo'));

//simple sliding window

function subArraySumsByStep(nums: number[], k: number): number[] {
  const result: number[] = [];

  let currentSubArray = nums.slice(0, k).reduce((a, b) => a + b, 0);
  result.push(currentSubArray);

  for (let i = 1; i < nums.length - k + 1; i++) {
    currentSubArray -= nums[i - 1];
    currentSubArray += nums[i + k - 1];

    result.push(currentSubArray);
  }

  return result;
}

// console.log(`Sum of 3 by 3`, subArraySums([1, 2, 3, 4, 5], 3));
// console.log(`Sum of 4 by 4`, subArraySums([1, 2, 3, 4, 5], 4));

// Input: nums = [1,1,1], k = 2
// Output: 2

// Input: nums = [1,2,3], k = 3
// Output: 2
function subarraySum(nums: number[], k: number): number {
  return 0;
}

function complexSlidingWindow(arr: number[], x: number) {
  let minLength: number = 0;
  let start = 0,
    end = 0,
    currentSum = 0;

  while (end < arr.length) {
    currentSum += arr[end];
    end++;

    while (currentSum >= x) {
      currentSum -= arr[start];
      start++;

      minLength = end - start + 1;

      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
      }
    }
  }
  console.log('complexSlidingWindow', minLength);
  // return minLength;
}

// complexSlidingWindow([1, 2, 3, 4, 5, 6, 7], 7);
// complexSlidingWindow([1, 6], 7);

function checkInclusion(s1: string, s2: string): boolean {
  const currentSubArray = s1.slice(0, s1.length);
  const htable1 = {};
  const htable2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (!htable1[s1[i]]) {
      htable1[s1[i]] = 0;
    }
    htable1[s1[i]]++;
  }

  for (let i = 0; i < s2.length; i++) {
    if (!htable2[s2[i]]) {
      htable2[s2[i]] = 0;
    }
    htable2[s2[i]]++;
  }

  return false;
}

// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// bacabcbb

function lengthOfLongestSubstring(s) {
  let length = 0,
    start = 0,
    end = 0;

  const dictionary = {};

  while (end < s.length) {
    if (!dictionary[s[end]]) dictionary[s[end]] = 1;
    else dictionary[s[end]]++;
    if (
      Math.max(getMaxOfArray(getValues(dictionary))) < 2 &&
      end - start + 1 > length
    )
      length = end - start + 1;

    end++;

    while (Math.max(getMaxOfArray(getValues(dictionary))) > 1 && end >= start) {
      dictionary[s[start]]--;
      start++;
    }
  }

  return length;
}

// console.log('Length', lengthOfLongestSubstring('pwwkew'));
// console.log('Length', lengthOfLongestSubstring('abcdfd'));

function getMaxOfArray(arr) {
  const max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  return max;
}

function getValues(obj) {
  const values = Object.keys(obj).map(function (e) {
    return obj[e];
  });
  return values;
}

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast) {
    if (!fast.next) break;
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

// const listNode = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );

// console.log(middleNode(byRecursion(100)));

function byRecursion(n: number) {
  if (n > 0) {
    return new ListNode(n, byRecursion(n - 1));
  }
  return;
}

// console.log('list', byRecursion(5));
// console.log('list', byRecursion(6));
// console.log('list', byRecursion(7));
// console.log('list', byRecursion(8));
// console.log('list', byRecursion(2888));

function sumar(x: number) {
  const cl = function (y: number) {
    return x + y;
  };

  return cl;
}
// console.log(sumar(4)(3));

function iniciar() {
  const name = 'Bryan';

  function mostrarNombre() {
    alert(name);
  }
  mostrarNombre();
}
// iniciar();

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const oldColor = image[sr][sc];
  fill(image, sr, sc, newColor, oldColor);
  return image;
}

function fill(
  image: string | any[],
  sr: number,
  sc: number,
  newColor: number,
  oldColor: number
) {
  if (image[sr][sc] === oldColor) {
    image[sr][sc] = newColor;
    //top
    if (sr >= 1) fill(image, sr - 1, sc, newColor, oldColor);
    // bottom
    if (sr + 1 < image.length) fill(image, sr + 1, sc, newColor, oldColor);
    // left
    if (sc >= 1) fill(image, sr, sc - 1, newColor, oldColor);
    // right
    if (sc + 1 < image[0].length) fill(image, sr, sc + 1, newColor, oldColor);
  }
}

console.log(
  'FF',
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    2,
    2,
    3
  )
);
