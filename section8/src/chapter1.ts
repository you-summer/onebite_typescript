/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문 ",
  author: {
    id: 1,
    name: "홍길동",
    age: 33,
  },
};

printAuthorInfo(post.author);

// 튜플과 함께 사용하는법

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];
