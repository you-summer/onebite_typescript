/**
 * keyof 연산자
 * - 무조건 타입에만 사용할수있음
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  console.log(person);
  console.log(key);
  console.log(person[key]);
  return person[key];
}

const person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name"); // 이정환
