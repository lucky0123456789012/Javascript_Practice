// program to check if the string is palindrome or not using function

function checkPalindrome(str) {

  const Finalstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return Finalstr === Finalstr.split('').reverse().join('');
}

console.log(checkPalindrome("Bab"));
console.log(checkPalindrome("Camel"));