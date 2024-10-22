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

enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL,  //CoffeeSizeがちゃんとObjectに変わっている！！
}

coffee.size = CoffeeSize.SHORT //これだとお受けつける

enum CoffeeSize2 {      //この場合だとSHORT=0 TALL="Tall" GRANDE=1 VENTI=2 が入るようになっている
    SHORT,
    TALL = 'TALL',
    GRANDE = 1,
    VENTI
}



/**
 * any型
 * なんでも入れられる
 * anyだった場合はTypeScriptは何もできない = JavaScriptになってしまう
 * anyはなるべく使わないようにする
 */
let anything: any = true;
anything = 'hello';
anything = ['hello', 20, true];
anything= {};
anything.fjdka = 'jkldjf:a';

let banana = 'banana';
banana = anything;      //string型にany型が入れられる！！



/**
 * Union型
 * 複数の型を受け入れられるようにする
 */
let unionType: number | string = 10;
unionType = 'hello';

let unionTypes: (string | number)[] = [10, 'hello'];    //配列でUnion型を使う場合 



/**
 * Literal型
 * 特定の決まった値のみを扱う
 * Enumと比べたときにLiteralの方がいい
 */
const apple: 'apple' = 'apple'  //appleしか入れられなくなる
const num: 0 = 0                //numberやbooleanも同じ

const hi = 'hi';                //これだとhiしか入れられなくなる
let his = 'his';                //letだとstring方になる

let clothSize: 'small' | 'medium' | 'large' = 'large' //こうすることでこの変数は small medium large しか入れられなくなる

//Enumとの違い
const cloth = {
    color: 'white',
    size: clothSize
}

// cloth.size = 'small'         型がlargeになっているからsmallを入れようとしてエラーが出る
//じゃあどうする？？？

const cloth2: {                 //このように定義する
    color: string;
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: clothSize
}



/**
 * tyoeエイリアス
 * 型を変数で扱えるようにする(別名で表す)
 * jsに変換したら全て消える
 */
type ClothSize = 'small' | 'medium' | 'large'
let clothSize2 : ClothSize = 'large';

const cloth3: {                 
    color: string;
    size: ClothSize         //このように型を設定できる
} = {
    color: 'white',
    size: clothSize
}



/**
 * 関数に型をつける方法
 * 戻り値には型推論は適応されるが引数には型推論が適応されない
 * 引数に型を宣言しなかった場合すべてany型に変換される
 * @param num1 number型
 * @param num2 number型
 * @returns number型
 */
function add(num1: number, num2: number): number{
    return num1 + num2
}



/**
 * 関数の戻り値にvoidを使う方法
 * void = 何も返さない型
 * 何も返さない時は必ずvoidかanyを明示する
 */
function sayHello(): void{
    console.log("Hello");
}



/**
 * undefind型とnull型
 */
let tmpUndefind: undefined = undefined
let tmpNull: null = null



/**
 * 関数型を使って、特定の関数のみを代入できる変数の作り方
 */
const anotherAdd: (n1: number, n2: number) => number = add;

const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number{  //無名関数にすることも可能
    return num1 + num2
}

const anotherAdd3 = function (num1: number, num2: number): number{
    return num1 + num2
}

const anotherAdd4: (n1: number, n2: number) => number = function (num1, num2){  //どちらかに型の情報があれば型推論が可能
    return num1 + num2
}

//アロー関数とは
const doubleNumber = number => number * 2;  //関数を綺麗に書けるようになる(returnや{}を省略できる)

//型をつける場合
const doubleNumber2 = (number: number): number => number * 2;   //引数が一つだとしてもカッコをつけないといけない

const doubleNumber3: (num: number) => number = num => num * 2; //左側にまとめて書くことも可能