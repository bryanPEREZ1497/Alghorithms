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
