---
title: 	"ES2015 원시데이터 타입"
course: "es2015"
date:   2018-10-03 13:00:00 +0900
---



ES2015에서 원시 데이터 타입을 위한 편리한 기능이 많이 추가되었습니다. 정수 리터럴을 이용해 8진수와 2진수를 표현할 수 있게 되었고, 백틱을 이용한 문자열 보간은 문자열을 쉽게 다룰 수 있도록 해주는 아주 편리한 기능입니다. 그리고 Symbol을 사용해 실행 컨텍스트 내에서 고유하고 불변인 값을 정의할 수 있게 되었습니다.



## 숫자

기존 JavaScript에서는 10진수와 16진수의 표현만 가능했습니다. ES2015에서는 2진수와 8진수를 표현하는 정수 리터럴 표기법이 추가되었습니다.

기존 자바스크립트에서 숫자 앞에 0을 붙이는 것으로 모호하게 8진수를 사용하는 경우도 있었지만 ES2015에서 부터는 명확하게 `0o` 를 숫자앞에 붙이는 것으로 8진수를 사용할 수 있습니다.

```js
// 8진수(Octal) - 숫자 앞에 0o을 붙여서 표기
> 0o123
83

// 2진수(Binary) - 숫자 앞에 0b을 붙여서 표기
> 0b101
5
```





## 문자열

ES6에서는 문자열을 표기하기 위해 기존에 사용되던 작은 따옴표 및 큰 따옴표(`'', ""`) 외에 백틱 기호 (\`\`)를 이용할 수 있으며, 백틱 기호로 둘러싼 문자열은 템플릿 리터럴 표기법을 사용할 수 있게 되었습니다. 

템플릿 리터럴을 이용하면 `${}` 템플릿을 이용해 문자열 사이에 손쉽게 표현식의 값을 대입할 수 있으며, 여러줄의 문자열을 쉽게 표현할 수 있습니다.



### 템플릿 리터럴

문자열을 표현할 때 기존의 따옴표 대신 백틱(\`\`) 기호를 사용해 템플릿 리터럴을 사용할 수 있습니다. 기존에는 문자열 내에서 개행을 위해 개행할 문장의 끝에 일일이 (`\n`) 을 사용해야 했지만 템플릿 리터럴을 사용하면 문자열 개행을 손쉽게 처리할 수 있게 됩니다.

```js
const str = `Oh dear! Oh dear!
I shall be too late!`

console.log(str);
/* 결과
Oh dear! Oh dear!
I shall be too late!
*/
```

이는 자바스크립트 내에서 HTML을 동적으로 생성할 때 그 효용이 잘 드러납니다. JS 코드 내에서 HTML 구문을 작성할 때 문서의 구조를 그대로 표현할 수 있어서 직관적으로 코드를 이해하는 데 도움이 됩니다.

```js
let stream = `
<div class="row">
  <div class="col-xs-2 logo"><img src="logo.png"></div>
  <div class="col-xs-7 desc"><p>Online</p></div>
</div>
`;
```

위의 코드를 기존의 문자열 리터럴로 표현하려면 어떻게 해야 할까요? 생각하기도 싫네요.



### 문자열 보간 (String Interpolation)

템플릿 리터럴 내부에는 `${}` 기호를 이용해 플레이스 홀더를 넣을 수 있으며 문자열 보간이라고 표현합니다. 플레이스 홀더 기호 내부에는 자바스크립트 표현식이 올 수 있으며, 문자열 내부에 손쉽게 변수 값이나 표현식 값을 삽입할 수 있습니다. 

```javascript
var alice = { name: 'Alice', place: 'Wonderland' };
var place = alice.place || "Nowhere";
var message = `${alice.name} in ${place}`

console.log(message);  //-> Alice in Wonderland


// 예시
let stream = `
<div class="row ${online ? "online" : ""}">
  <div class="col-xs-2 logo"><img src=${logo}></div>
  <div class="col-xs-3 title"><a href=${url} target="_blank">${name}</a></div>
  <div class="col-xs-7 desc"><p>${online ? status : "Offline"}</p></div>
</div>
`;
```





## Symbol

Symbol은 ECMAScript 2015 부터 추가된 원시 자료형의 하나입니다. 심볼은 고유하고 변경할 수 없는 값을 정의하는데 사용되며, 이러한 특성을 이용해서 객체의 프로퍼티 식별자로도 사용할 수 있습니다. 



심볼은 아래와 같이 생성합니다.

```js
const sym = Sybol();
```



아래 예에서와 같이 `Symbol()` 을 호출하여 생성한 값은 모두 유일한 값이되며 변경할 수 없습니다. 그리고 `typeof` 연산자를 사용해 심볼의 데이터 타입을 확인해 보면 `Symbol` 이라는 새로운 데이터 타입으로 정의된 것을 확인할 수 있습니다.

```js
const foo = Symbol();
const bar = Symbol();

console.log(foo === bar);  //-> false
console.log(typeof foo);  //-> Symbol
```



심볼을 생성할 때 `Symbol()` 에 인수를 전달하여 설명을 추가할 수 있습니다.

```js
const alice = Symbol("Alice");
console.log(alice);  //-> Symbol(Alice)
```



