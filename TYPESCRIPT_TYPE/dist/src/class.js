"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
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
let person3;
const quill = new Person('Quill', 38);
quill.greeting();
// const anotherQuill = {
//     name: 'anotherQuill',
//     anotherGreeting: quill.greetiong
// }
// const anotherQuill = {
//     name: 'anotherQuill',
//     greeting: quill.greeting
// }
// anotherQuill.greeting();
