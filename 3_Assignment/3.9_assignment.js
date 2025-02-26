function countWords(paragraph) {
    // Trim the paragraph and split it by spaces, then filter out any empty strings
    let words = paragraph.trim().split(/\s+/);
    
    // Return the length of the words array (i.e., the number of words)
    return words.length;
  }
  
  // Example
  let paragraph = "This is an example paragraph. It has several words.";
  let result = countWords(paragraph);
  console.log(result);  // Output: 7
  