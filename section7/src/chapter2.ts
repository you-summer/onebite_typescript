/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());

/**
 * forEach
 */
const arr2 = [1, 2, 3];
arr2.forEach(()=>)