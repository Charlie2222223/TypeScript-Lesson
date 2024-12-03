// type Human = {
//     name: string;
//     age: number;
// }

/**
 * interfaceの宣言方法
 * オブジェクトの構造を表したもの
 * typeとの違いはinterfaceはオブジェクトのみでtypeは全てに適応される
 * オブジェクトに使われるということがわかりやすい
 * abstractとの違いは中身が記載されているかどうか
 */
interface Human{
    readonly name: string;                                  //interfaceにもreadonlyをつけることができる(type型にもつけれる) 代入するときはエラーが出ない
    age: number;
    greeting(message:string): void;                         //メソッドの宣言方法
}

const human: Human = {
    name: 'Quill',
    age: 38,
    greeting(message: string){
        console.log(message);
    }
}

// let developer: Human;

/**
 * implementsを使用することによりclassにinterfaceを継承させることができる
 * implementsは複数のインターフェイスを継承することができる
 * readonlyの影響を受けない
 */
class Developer implements Human{
    constructor(public name: string, public age: number, public experience: number){}
    greeting(message: string){
        console.log(message);
    }
}

/**
 * 構造的部分型
 * Human型なのにDeveloperを継承できるのは少なくともname,age,greetingさえ継承していればokだから
 * 制限が緩い型に対して制限が厳しい型をいれることができると言うこと
 */
const user:Human = new Developer("Quill", 38, 3);       //型をimplements先のクラスにできる

