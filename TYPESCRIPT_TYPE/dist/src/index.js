"use strict";
let hasValue = true;
/**
 * number型は小数点でもマイナスでも入れることができる
 */
let count = 20;
let float = 3.14;
let negative = -0.12;
/**
 * stringはシングルでもダブルでもバックでも可能
 */
let single = 'hello';
let double = "world";
let back = `!!`;
/**
 * 型を宣言しなくても型推論で型を推測して割り当ててくれる
 * 基本的には型推論で書いていく方がいい
 */
let hasvalue = true;
/**
 * 型推論ができない場合の例
 */
let hello2;
hello2 = 2;
hello2 = "";
hello2 = true;
/**
 * オブジェクトに対して型をつける方法
 */
const person = {
    name: 'jack',
    age: 21
};
/**
 * オブジェクトがネスとしていた場合(型推論)
 */
const person2 = {
    name: {
        first: 'jack',
        last: "smith"
    },
    age: 21
};
/**
 * 配列に型をつける方法
 */
const fruits = ['Apple', 'Banana', 'Grape'];
// fruits.push(21); これはエラーが出るようになる
/**
 * タプル型
 * この形にしたい！！って時に使う
 * 必ず型注釈をする必要がある
 */
const book = ['bussiness', 500, false];
book.push(21); //配列に新しく足すことは可能
// console.log(book[3]) これはエラーが起きる
/**
 * Enum(列挙型)
 * 特定のまとまったグループのみ受け入れる型
 * Enumの中身は大文字で書いて変数名はパスカルケースでかく
 *
 */
// const CoffeeSize = {
//     SHORT: 'SHORT',
//     TALL: 'TALL',
//     GRANDE: 'GRANDE',
//     VENTI: 'VENTI'
// }
// coffee.size = "hello" これはしてほしくない！！
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL, //CoffeeSizeがちゃんとObjectに変わっている！！
};
coffee.size = CoffeeSize.SHORT; //これだとお受けつける
var CoffeeSize2;
(function (CoffeeSize2) {
    CoffeeSize2[CoffeeSize2["SHORT"] = 0] = "SHORT";
    CoffeeSize2["TALL"] = "TALL";
    CoffeeSize2[CoffeeSize2["GRANDE"] = 1] = "GRANDE";
    CoffeeSize2[CoffeeSize2["VENTI"] = 2] = "VENTI";
})(CoffeeSize2 || (CoffeeSize2 = {}));
/**
 * any型
 * なんでも入れられる
 * anyだった場合はTypeScriptは何もできない = JavaScriptになってしまう
 * anyはなるべく使わないようにする
 */
let anything = true;
anything = 'hello';
anything = ['hello', 20, true];
anything = {};
anything.fjdka = 'jkldjf:a';
let banana = 'banana';
banana = anything; //string型にany型が入れられる！！
/**
 * Union型
 * 複数の型を受け入れられるようにする
 */
let unionType = 10;
unionType = 'hello';
let unionTypes = [10, 'hello']; //配列でUnion型を使う場合 
/**
 * Literal型
 * 特定の決まった値のみを扱う
 * Enumと比べたときにLiteralの方がいい
 */
const apple = 'apple'; //appleしか入れられなくなる
const num = 0; //numberやbooleanも同じ
const hi = 'hi'; //これだとhiしか入れられなくなる
let his = 'his'; //letだとstring方になる
let clothSize = 'large'; //こうすることでこの変数は small medium large しか入れられなくなる
//Enumとの違い
const cloth = {
    color: 'white',
    size: clothSize
};
// cloth.size = 'small'         型がlargeになっているからsmallを入れようとしてエラーが出る
//じゃあどうする？？？
const cloth2 = {
    color: 'white',
    size: clothSize
};
let clothSize2 = 'large';
const cloth3 = {
    color: 'white',
    size: clothSize
};
/**
 * 関数に型をつける方法
 * 戻り値には型推論は適応されるが引数には型推論が適応されない
 * 引数に型を宣言しなかった場合すべてany型に変換される
 * @param num1 number型
 * @param num2 number型
 * @returns number型
 */
function add(num1, num2) {
    return num1 + num2;
}
/**
 * 関数の戻り値にvoidを使う方法
 * void = 何も返さない型
 * 何も返さない時は必ずvoidかanyを明示する
 */
function sayHello() {
    console.log("Hello");
}
/**
 * undefind型とnull型
 */
let tmpUndefind = undefined;
let tmpNull = null;
/**
 * 関数型を使って、特定の関数のみを代入できる変数の作り方
 */
const anotherAdd = add;
const anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
const anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
const anotherAdd4 = function (num1, num2) {
    return num1 + num2;
};
//アロー関数とは
const doubleNumber = (number) => number * 2; //関数を綺麗に書けるようになる(returnや{}を省略できる)
//型をつける場合
const doubleNumber2 = (number) => number * 2; //引数が一つだとしてもカッコをつけないといけない
const doubleNumber3 = num => num * 2; //左側にまとめて書くことも可能
/**
 * callback関数の型
 */
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
/**
 * unknow型
 * anyと一緒でなんでも入れられる
 */
let unknowInput;
let anyInput;
let text;
unknowInput = 'hello';
unknowInput = 21;
unknowInput = true;
// text = unknowInput これはエラーになるのがanyとの違い
text = anyInput;
//if文でtypeを変更したらいける！！
if (typeof unknowInput === 'string') {
    text = unknowInput;
}
/**
 * never型
 * 決して何も返さない
 * whileでずっとtureみたいなものはnevreになる
 * 関数で宣言すると型推論はvoidになる
 */
function error(message) {
    throw new Error(message);
}
