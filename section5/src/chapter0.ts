/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "홍길동",
  //   age: 56,
  sayHi: function () {
    console.log("hi");
  },
};

// person.name = "김호두";
person.sayHi();
person.sayHi(1, 2);
