class Person{

    // public　name: string;                                 //この場合nameフィールドという
    // private age: number;                                  //privateをつけることができる

    /**
     * 初期化する関数
     * @param name このようにpublic name: stringと名義することによって初期化できる
     * @param initAge privateにしておくことによってclass外からの変更を防ぐ
     * readonlyをつけることで読み込みしかできなくなる　しかしコンストラクタ内なら書き換え可能
     */
    constructor(public readonly name: string, private age: number) { 
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
    greeting(this: Person) {                  
        console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old.`);
    }

    inrementAge(){
        this.age += 1;
    }
}

let person3: Person;

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