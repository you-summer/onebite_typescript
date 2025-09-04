/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  //필드
  //   private name: string;
  //   protected age: number;
  //   public position: string;

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // console.log(`${this.name}`);
    // private 클래스는 파생클래스에서도 접근이 불가능함
    // this.age;
    // protected는 파생클래스 메서드 안에서는 접근이 가능함
  }
}

const employee = new Employee("홍길동", 4, "developer");
// employee.name = "김다미";
// employee.age = 54;
employee.position = "디자이너";

console.log(employee);
