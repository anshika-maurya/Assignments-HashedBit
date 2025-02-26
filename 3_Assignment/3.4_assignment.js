function countVowelsAndConsonants(str) {
    // Convert to lowercase for easy comparison
    str = str.toLowerCase();

    // Define vowels
    let vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;

    // Loop through each character
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= "a" && char <= "z") {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

// Example string with at least 20 characters
let text = "I am a MERN enthusiast";

let result = countVowelsAndConsonants(text);

console.log("Vowel Count:", result.vowels);
console.log("Consonant Count:", result.consonants);
