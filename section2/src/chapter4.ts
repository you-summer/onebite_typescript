// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "조연정",
  nickname: "sdfqw",
  birth: "1993.11.01",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: User = {
  id: 1,
  name: "김영서",
  nickname: "sdfqw",
  birth: "1993.01.01",
  bio: "ㅇㅇㅇㅇㅇ",
  location: "부산광역시",
};

// 인덱스 시그니처
type CountyCodes = {
  [key: string]: string;
};

let countyCodes: CountyCodes = {
  Korean: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountyNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 830,
  UnitedKingdom: 820,
};
