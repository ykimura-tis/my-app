import { MyClass } from './myclass';

describe('MyClass', () => {
  let myClass: MyClass;
  let myMockFunction: jest.Mock;

  beforeEach(() => {
    // モック関数を作成
    myMockFunction = jest.fn();
    // MyClassのインスタンスを作成
    myClass = new MyClass(myMockFunction);
  });

  it('should call myFunction', () => {
    // myFunctionを呼び出す何らかの動作をシミュレート
    myClass.someMethodThatCallsMyFunction();

    // myFunctionが呼び出されたかどうかを確認
    expect(myMockFunction).toHaveBeenCalled();
  });
});