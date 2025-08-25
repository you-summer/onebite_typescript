//object
let user: {
  id?: number; //선택적 프로퍼티 옵셔널프로퍼티
  name: string;
} = {
  id: 1,
  name: "조연정",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "dtewtqwe";
