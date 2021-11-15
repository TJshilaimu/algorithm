function judgeDuplicate(s) {
  let map = {};
  for (const t of s) {
    map[t] = (map[t] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 1) {
      return i;
    }
  }
  return -1;
}

let t = judgeDuplicate("asdfgasds");
console.log(t);

let intersection = function (arr1, arr2) {
  return (result = [...new Set(arr1)].filter((item) => {
    return new Set(arr2).has(item);
  }));
};

console.log(intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
