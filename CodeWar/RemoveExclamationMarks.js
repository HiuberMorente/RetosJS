// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
const string = "Hello World!";

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

console.log(removeExclamationMarks(string));