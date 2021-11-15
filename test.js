function judgeDuplicate(arr) {
  let map = new Map();
  for (const t of arr) {
    if (map.has(t)) {
      return true;
    } else {
      map.set(t, 1);
    }
  }
  return false;
}

let t = judgeDuplicate([1, 2, 1, 4, 5, 3]);
console.log(t);
