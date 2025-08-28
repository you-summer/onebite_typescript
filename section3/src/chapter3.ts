/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅! 가능

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업캐스팅!!
// dog = animal; // 다운캐스팅
// Animal에는 name과 color가 반드시 필요하고
// Dog에는 추가로 breed까지 필요하다
// 그래서 Animal이 슈퍼타입 Dog가 서브타입

type Book = {
  name: string;
  price: number;
};

type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programingBook; // 업캐스팅
// programingBook = book; // 다운캐스팅

/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
};

let book3: Book = programingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "react.js",
});

func(programingBook);
