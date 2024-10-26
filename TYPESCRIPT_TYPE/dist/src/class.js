"use strict";
class Person {
    // public　name: string;                                 //この場合nameフィールドという
    // private age: number;                                  //privateをつけることができる
    /**
     * 初期化する関数
     * @param name このようにpublic name: stringと名義することによって初期化できる
     * @param initAge privateにしておくことによってclass外からの変更を防ぐ
     * readonlyをつけることで読み込みしかできなくなる　しかしコンストラクタ内なら書き換え可能
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * メソッドの作成
     * @param this thisを宣言することによりこのthisはどういうものなのかを示す　そうすることによりエラーを事前に防ぐことができる
     */
    // greetiong(this: {name: string}) {                  
    //     console.log(`Hello!! My name is ${this.name}`);
    // }
    /**
     * クラスを型にする方法
     * @param this
     */
    greeting() {
        console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old.`);
    }
    inrementAge() {
        this.age += 1;
    }
}
/**
 * 継承の書き方
 */
class Teacher extends Person {
    /**
     * getterの書き方
     */
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        return this._subject;
    }
    /**
     * setterの書き方
     * getの型を推測してvalueもstringになっている
     */
    set subject(value) {
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age); //super = 親クラスのコンストラクタ
        this._subject = _subject;
    }
    greeting() {
        console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}. `);
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();
// let person3: Person;
// const quill = new Person('Quill', 38);
// quill.greeting();
// const anotherQuill = {
//     name: 'anotherQuill',
//     anotherGreeting: quill.greetiong
// }
// const anotherQuill = {
//     name: 'anotherQuill',
//     greeting: quill.greeting
// }
// anotherQuill.greeting();
