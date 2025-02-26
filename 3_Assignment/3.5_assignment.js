function correctfunc(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

// Example:
const sentence = "I love codd.";
const correctedSentence = correctfunc(sentence, "codd", "code");
console.log(correctedSentence); // Output: I love code.
