function exchange(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function compare(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        exchange(arr, j, j + 1);
      } else {
      }
    }
  }
}

let a = [1, 4, 2, 3, 5, 6, 7, 4, 3];
sort(a);
console.log(a);
