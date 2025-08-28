/**
 * 타입 추론
 */

let a: number = 10;
let b = "hello";
let c = {
  id: 1,
  name: "조연정",
  profile: {
    nickname: "다미",
  },
  url: "https://naver.com",
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "Hello";
}

// any 타입의 진화 (암묵적 any타입) // 별로 추천하지는 않음
let d;
d = 10;
d.toFixed();

d = "Hello";
d.toUpperCase();

const num = 10;
// number 리터럴 타입으로 추론됨
const str = "Hello";

let arr = [1, "string"];
