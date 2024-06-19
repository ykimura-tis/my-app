export class MyClass {
  private myFunction: () => void;

  constructor(myFunction: () => void) {
    this.myFunction = myFunction;
  }

  someMethodThatCallsMyFunction() {
    // 何らかの処理

    // モック関数の呼び出し
    this.myFunction();

    // その他の処理
  }
}