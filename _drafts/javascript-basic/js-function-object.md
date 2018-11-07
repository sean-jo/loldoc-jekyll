





## apply, bind, call

함수는 객체이므로 `Function` 객체는 프로퍼티와 메서드를 가지고 있습니다.  그 중 `Function.prototype` 객체의 프로퍼티인 apply, bind, call을 사용해 함수에 객체를 바인딩하는 방법을 알아봅니다.



apply - 선택한 this와 인수를 사용해서 함수를 호출합니다. 인수로 넘길 값은 배열을 사용합니다.

bind - 선택한 this와 인수를 적용한 새로운 함수를 반환합니다.

call - 선택한 this와 인수를 사용해서 함수를 호출합니다. 인수로 넘길 값은 쉼표로 구분합니다.





## apply, call 메서드

```js
function hello() {
  console.log("Hello, " + this.name);
}

hello();  // Hello, undefined
```

위 함수를 실행할 경우, `this.name` 은 정의되어 있지 않으므로 결과는 `undefined`가 됩니다.



이때 `apply` , `call` 을 이용해 `this` 로 사용될 값을 전달해줄 수 있습니다.

```js
var alice = { name: "Alice" };
var dinah = { name: "Dinah" };

hello.apply(alice);  // Hello, Alice
hello.apply(dinah);  // Hello, Dinah
```



apply와 call의 동작은 기본적으로 같습니다. 다만 함수에 인수를 넘길 경우, apply의 경우 배열을 이용하며, call의 경우 쉼표로 인수를 구분합니다.

```js
function sum(a, b) {
  var result = a + b;
  console.log(this.name + ", " + result);
}

var alice = { name: "Alice" };
var dinah = { name: "Dinah" };

sum.apply(alice, [1, 2]);  // Alice, 3
sum.call(alice, 3, 4);     // Alice, 7
```





## bind 메서드

`bind` 메서드는 객체에 함수를 바인드 할 수 있습니다. 이는 객체를 함수의 `this` 로 설정한 후 새로운 함수를 생성하여 리턴하기 때문입니다.

```js
function hello() {
  console.log("Hello, " + this.name);
}

var alice = { name: "Alice" };
var helloAlice = hello.bind(alice);
helloAlice();  // Hello, Alice
```



apply 와 call을 사용할 경우 this의 값으로 사용할 객체를 동적으로 변경할 수 있는 것과 달리 bind를 사용하게 되면 새로운 함수를 정의하여 사용하게 됩니다.



