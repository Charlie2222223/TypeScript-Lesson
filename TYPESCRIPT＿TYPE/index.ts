let hasValue: boolean = true;

/**
 * number型は小数点でもマイナスでも入れることができる
 */
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

/**
 * stringはシングルでもダブルでもバックでも可能
 */
let single: string = 'hello';
let double: string = "world";
let back: string = `!!`;

/**
 * 型を宣言しなくても型推論で型を推測して割り当ててくれる
 * 基本的には型推論で書いていく方がいい
 */
let hasvalue = true;

/**
 * 型推論ができない場合の例
 */
let hello;
hello = 2;
hello = "";
hello = true;

/**
 * オブジェクトに対して型をつける方法
 */
const person: {
    name: string;
    age: number;
} = {
    name: 'jack',
    age: 21
}

/**
 * オブジェクトがネスとしていた場合(型推論)
 */
const person2 = {
    name: {
        first: 'jack',
        last: "smith"
    },
    age: 21
}

/**
 * 配列に型をつける方法
 */
const fruits: string[] = ['Apple', 'Banana', 'Grape']
// fruits.push(21); これはエラーが出るようになる

/**
 * タプル型
 * この形にしたい！！って時に使う
 * 必ず型注釈をする必要がある
 */
const book: [string, number, boolean] = ['bussiness', 500, false];
book.push(21);  //配列に新しく足すことは可能
// console.log(book[3]) これはエラーが起きる


