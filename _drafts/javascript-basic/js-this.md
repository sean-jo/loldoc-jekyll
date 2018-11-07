



# JavaScript this

자바스크립트에서 `this`는 함수가 호출되어 실행되는 시점에 결정됩니다. 즉, `this`의 값은 함수가 호출되었을 때 그 함수가 속해있던 객체를 가리키게 되며, 호출될 때 `this` 가 가르키는 객체가 변경될 경우 `this` 의 값도 바뀌게 됩니다.



```js
var alice = {
  name: "Alice",
  age: 11,
  getName: function() {
    return this.name;
  }
}

alice.name  // 'Alice'
alice.getName();  // 'Alice'
```



## this가 가리키는 값

전역에서 this의 값은 전역객체를 가리킵니다. Node.js 의 경우 `global` 객체를,  웹브라우저의 경우 `Window` 객체를 가르킵니다.



전역에서 함수를 호출하게 되면 함수 내부의 this는 전역 객체를 가르킵니다. 이는 함수를 전역에서 선언하고 호출할 경우 함수는 전역객체 내부에 정의되기 때문입니다.



생성자로 생성한 객체 내부에서는 생성한 객체를 가리킵니다.



이벤트 핸들러 내부에서는 이벤트가 발생한 요소 객체를 가리킵니다.



함수 객체에 정의된 `apply` 와 `call` 메서드로 호출한 함수 내부 - `apply` 와 `call` 메서드를 사용하면 `this`가 가리키는 객체를 바꿀 수 있습니다.



