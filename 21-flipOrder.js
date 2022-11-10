// finish the following script to extends the build-in Javascript String Object, so it has a method which will reverse the order of characters in a string and return the resulting reversed string.

// bonus marks if it ignores punctuation at the end of the string.

String.prototype.flip = function () {
  let str = this;
  
  let punctuation = /[?.!]/
  let matches = str.match(punctuation) // return null or an array
  console.log(matches)

  if(matches){
    str = matches[0] + str.replace(matches[0], '') 
  }

  return str.split("").reverse().join("");
};

let str = "Can I use Google during the interview?";

console.log(str.flip());
