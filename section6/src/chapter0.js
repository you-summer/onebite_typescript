/**
 * 클래스
 */

let studentA = {
  name: "홍길동",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 클래스는 보통 앞글자를 대문자로 사용함

  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세여~~ ${this.name}입니다`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메소드
  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("김다미", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();

let studentDeveloper = new StudentDeveloper("조연정", "B+", 27, "typeSciprt");
console.log(studentDeveloper);
studentDeveloper.programing();
