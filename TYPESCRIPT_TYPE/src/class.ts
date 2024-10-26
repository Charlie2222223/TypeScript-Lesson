class Person{

    name: string;                       //この場合nameフィールドという

    constructor(initName: string) {     //初期化の関数
        this.name = initName
    }

    greetiong() {                       //メソッドの作成
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