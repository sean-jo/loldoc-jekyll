---
title: "JavaScript 객체와 프로퍼티"
course: "javascript-basic"
date:   2018-06-27 16:00:00 +0900
---





## instanceof 연산자

`instanceof` 연산자는 객체의 인스턴스가 해당 객체 생성자의 객체인지 확인할 떄 사용합니다.



```js
function Kitty() {};
var dinah = new Kitty();

dinah instanceof Kitty;  // true
dinah instanceof Object;  // true
dinah instanceof Array;  // false
```

위와 같이 사용자가 생성한 객체는 객체 자신과 부모 객체인 `Object` 객체의 인스턴스라는 것을 확인할 수 있습니다.



## hasOwnProperty

hasOwnProperty 메서드를 사용하면 객체에 인수로 지정한 프로퍼티가 존재하는지 확인할 수 있습니다.

```js
dinah.hasOwnProperty("name");  // false
```

위 예에서 dinah 객체에는 `name` 프로퍼티가 존재하지 않는 것을 확인할 수 있습니다.





## Object.getOwnPropertyDescriptor

Object.getOwnPropertyDescriptor 메서드를 사용하면 객체 프로퍼티의 프로퍼티 디스크립터를 반환합니다. 메서드의 첫번째 인자로는 객체명, 두번째 인자로 화가인할 프로퍼티를 문자열로 지정합니다.

```js
const obj = { foo: "bar" };
Object.getOwnPropertyDescriptor(obj, 'foo');
//=>
{ value: 'bar',
  writable: true,
  enumerable: true,
  configurable: true }
```





## 객체 프로퍼티의 속성

Object.getOwnPropertyDescriptor 메서들 사용하면 위와 같이 객체 프로퍼티의 속성을 확인할 수 있습니다. 객체 프로퍼티는 내부적으로 몇가지 속성을 가지고 있는데요. 이러한 프로퍼티 속성은 쓰기 가능, 열거 가능, 재정의 가능 속성을 가지고 있습니다.



writable : 프로퍼티에 쓰기 가능 여부를 정의합니다. 만약 writable의 값이 false 라면 프로퍼티의 값을 수정할 수 없습니다.

enumerable : 프로퍼티가 for...in 문 등의 반복문으로 찾을 수 있는 대상인지를 정의합니다. 즉, 열거 가능한지 확인합니다.

configurable : 프로퍼티의 내부 속성을 수정할 수 있는지를 확인합니다. 만약 false 라면 해당 프로퍼티의 내부 속성은 수정할 수 없습니다. 그리고 configurable 속성은 한번 false 로 지정하고 나면 true로 되돌릴 수 없습니다.





## Object.defineProperty

Object.defineProperty 메서드를 사용하면 객체 프로퍼티의 내부 속성값을 변경할 수 있습니다. 만약 obj 객체의 foo 프로퍼티의 읽기가능 속성을 false로 변경하려면 아래와 같이 사용합니다.

```js
Object.defineProperty(obj, 'foo', {writable: false});
```



이제 아래와 같이 foo 프로퍼티의 값을 변경하려고 하더라도 프로퍼티의 읽기속성이 잠겨있으므로 수정할 수 없게 됩니다.

```js
obj.foo = "baz";

console.log(obj);  // { foo: 'bar' }
```



## Object.keys

Object.keys 메서드는 객체 프로퍼티 중 열거 가능한 프로퍼티의 목록을 배열로 만들어서 반환합니다.

```js
Object.keys(obj);  // [ 'foo' ]
```





## 객체 보호

객체에는 객체의 보호를 위해 객체를 잠그는 속성들을 가지고 있습니다.



###  Object.freeze

freeze 메서드는 객체를 불변 객체로 만듭니다. 불변 객체란 객체 새로운 프로퍼티를 추가하거나 변경하는 것이 불가능한 객체를 의미합니다. 이렇게 객체를 불변 객체로 만들게 되면 해당 객체는 오직 읽기만 가능한 객체가 됩니다.

```js
var person = { name: "Alice", age: 10 };

Object.freeze(person);
Object.isFrozen(person);  // true
```

Object.isFrozen 메서드를 사용하면 객체의 freeze 여부를 확인할 수 있습니다.



아래와 같이 객체 프로퍼티의 값을 변경하거나 새로운 프로퍼티를 추가하는 것이 불가능해집니다.

```js
person.name = "John";
person.gender = "Female";
delete person.age;

console.log(person);  // { name: 'Alice', age: 10 }
```





### Object.seal

seal 메서드는 객체에 새로운 프로퍼티를 추가하거나 삭제, 수정할 수 없게됩니다. 오직 읽기와 쓰기만 가능한 객체가 만들어 집니다.

```js
var person = { name: "Alice", age: 10 };

Object.seal(person);
Object.isSealed(person);  // true
```

Object.isSealed 메서드를 사용해 객체의 seal 여부를 확인할 수 있습니다.



아래와 같이 seal을 사용하면 객체 프로퍼티의 값을 변경하는 것은 가능하지만 새로운 프로퍼티를 추가하는 것이 불가능해집니다.

```js
person.name = "John";
person.gender = "Female";
delete person.age;

console.log(person);  // { name: 'John', age: 10 }
```





### Object.preventExtensions

preventExtensions 메서드는 객체에 새로운 프로퍼티를 추가할 수 없게 만듭니다.

```js
var person = { name: "Alice", age: 10 };

Object.preventExtensions(person);
Object.isExtensible(person);  // false
```

Object.isExtensible 메서드를 사용해 객체의 확장가능 여부를 확인할 수 있습니다.



