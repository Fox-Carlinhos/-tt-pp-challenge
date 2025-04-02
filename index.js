const alphabetAsArray = "abcdefghijklmnopqrstuvwxyz".split("");

const testData = ["The quick brown fox jumps over the lazy dog."];

const sentencesTesting = ["The quick brown fox jumps over the lazy dog", "Hello world", "Pack my box with five dozen liquor jugs"];

function checkPangram(data) {
  const pangramChecked = data.map((sentence) => {
    let letterFrequency = {};

    alphabetAsArray.forEach((letter) => {
      if (sentence.toLowerCase().includes(letter)) {
        letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
      }
    });

    return {
      sentence,
      isPangram: alphabetAsArray.every((letter) => sentence.toLowerCase().includes(letter)),
      letterFrequency,
    };
  });

  return pangramChecked;
}

// console.log(checkPangram(testData));
console.log(checkPangram(sentencesTesting));
