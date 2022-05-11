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
  const lettersRe = RegExp(letters);
  const result = words.filter((word) => lettersRe.test(word));
  words.filter((word) => {
    console.log(lettersRe.test(word));
    return lettersRe.test(word);
  });
  return words;
}

// console.log(filterWords(['the', 'dog', 'got', 'a', 'bone'], 'ae'));
// console.log(filterWords(['the', 'dog', 'got', 'a', 'bone'], 'e'))

function computeMultiplesSum(n: number): number {
  if (n < 0 || n >= 1000) {
    return -1;
  }

  let sum = 0;

  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
}

// console.log(computeMultiplesSum(11));
// console.log(computeMultiplesSum(999));

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
console.log(searchInsert([1, 3, 5, 6], 5.5));
