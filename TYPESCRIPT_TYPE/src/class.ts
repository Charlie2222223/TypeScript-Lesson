class Person{

    name: string;                       //この場合nameフィールドという

    constructor(initName: string) {     //初期化の関数
        this.name = initName
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
        console.log(`Hello!! My name is ${this.name}`);
    }
}

let person3: Person;

const quill = new Person('Quill');
quill.greeting();

// const anotherQuill = {
//     name: 'anotherQuill',
//     anotherGreeting: quill.greetiong
// }

const anotherQuill = {
    name: 'anotherQuill',
    greeting: quill.greeting
}

anotherQuill.greeting();