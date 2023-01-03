const nums = [1, 2, 3]; // => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let result = x.reduce((a, b) => a * b);

  console.log(result);
  return x.join("*").concat(" = ").concat(
    x.reduce((a, b) => a * b)
  );
}

console.log(grow(nums));