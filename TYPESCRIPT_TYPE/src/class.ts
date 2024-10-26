class Person{

    name: string;                       //この場合nameフィールドという

    constructor(initName: string) {     //初期化の関数
        this.name = initName
    }

    /**
     * メソッドの作成
     * @param this thisを宣言することによりこのthisはどういうものなのかを示す　そうすることによりエラーを事前に防ぐことができる
     */
    greetiong(this: {name: string}) {                  
        console.log(`Hello!! My name is ${this.name}`);
    }
}

const quill = new Person('Quill');
quill.greetiong();

const anotherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.greetiong
}

anotherQuill.anotherGreeting();