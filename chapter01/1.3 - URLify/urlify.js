var urlify = function(str, length) {
  var strArr = [];
  // Make use of the length to traverse up until the true string
  // and replace the space with '%20' 
  for(var i = 0; i < length; i++) {
     strArr[i] = str[i] == ' ' ? '%20' : str[i]; 
  }
  return strArr.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
