class Person{
    name: string;       //この場合nameフィールドという
    constructor(initName: string) {     //初期化の関数
        this.name = initName
    }
}

const quill = new Person('Quill');