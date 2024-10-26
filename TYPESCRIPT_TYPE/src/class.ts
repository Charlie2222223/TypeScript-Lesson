abstract class Person{                                       //abstractクラスは生成できない

    // public　name: string;                                 //この場合nameフィールドという
    // private age: number;                                  //privateをつけることができる

    static species = 'Homo apiens';                          //staticをつけることによってどこでもそのフィールドやメソッドを使うことができる

    static isAdult(age: number){
        if(age < 17) return true;
        return false;
    } 

    /**
     * 初期化する関数
     * @param name このようにpublic name: stringと名義することによって初期化できる
     * @param initAge privateにしておくことによってclass外からの変更を防ぐ
     * readonlyをつけることで読み込みしかできなくなる　しかしコンストラクタ内なら書き換え可能
     */
    constructor(public readonly name: string, protected age: number) { 
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
        this.explainJob();
    }

    abstract explainJob(): void;                                          //継承用のメソッドを作成

    inrementAge(){
        this.age += 1;
    }
}

/**
 * 継承の書き方
 */
class Teacher extends Person{

    private static instance: Teacher;

    explainJob(){
        console.log(`I am a teacher and I teach ${this.subject}`)
    }

    /**
     * getterの書き方
     */
    get subject(){
        if(!this._subject){
            throw new Error('There is no subject');
        }
        return this._subject
    } 

    /**
     * setterの書き方
     * getの型を推測してvalueもstringになっている
     */
    set subject(value){
        this._subject = value;
    }

    /**
     * コンストラクタにprivateをつけるとnewでインスタンスを生成できなくする
     * シングルトーンパターンをするため・・・クラスからインスタンスを一つしか作らないようにする方法
     * @param name 
     * @param age 
     * @param _subject 
     */
    private　constructor(name: string, age: number, private _subject: string){          
        super(name, age);                                                               //super = 親クラスのコンストラクタ
    }

    // greeting() {                  
    //     console.log(`Hello!! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}. `);
    // }

    /**
     * こうすることでインスタンスを生成できる
     * @returns 
     */
    static getInstance(){
        if(Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }

}

const teacher = Teacher.getInstance();
teacher.greeting();
;
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