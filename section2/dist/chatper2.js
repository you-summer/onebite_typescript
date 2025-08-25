// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "yeonjung"];
let boolArr = [true, false, true];
// 꺽쇠를 열고 다른 타입을 집어넣는 문법을 제네릭 문법이라고 함
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "Hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플 (자바스크립트에는 없고 타입스크립트에서만 제공되는 타입)
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "2", true];
export {};
