const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(elements => elements.split(' ').map(string => string.charAt(0).toUpperCase(0) + string.substring(1)).join(' '))
}

// titleCased function is stored in a variable
// mapped the tutorials array passing the elements parameter then using the string.split method to split it into substrings.
// Then I'm mapping the array of substrings and grabbing the character at index 0 with the string.charAt() method
// Then I'm capitalizing every letter in the first index of the string.
 //Then I'm adding the substrings and putting them back together with .join. I think.  
//Works in replit WTF but doesnt pass test WTF???