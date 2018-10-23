---
title: "JavaScript의 원시 자료형"
course: "javascript-basic"
date:   2018-06-20 18:00:00 +0900
last_modified_at: 2018-06-20 18:30:00 +0900
---



프로그래밍 언어에서 숫자나 문자열(String) 같은 것들은 자료형(Data type)이라 부릅니다. 자료형, 즉 데이터 타입은 변수에 저장하는 데이터의 종류를 말하며 자바스크립트에서는 데이터 타입을 크게 원시자료형과 참조자료형으로 나눌수 있습니다.

JavaScript에서 기본 자료형 혹은 원시 데이터 타입(Primitivie Data Type) 이라 불리는 것들에는 숫자, 문자열, 불리언, null, undefined 가 있습니다.



## 숫자 (number)

자바스크립트는 정수와 실수를 구분하지 않고 모든 숫자를 IEEE 754 표준에 정의한 Double 타입의 실수로 표현해요. 더블 타입은 64비트 크기의 부동 소수점 숫자를 의미해요. 부동 소수점은 소수점 자리수가 떠다닌다는 의미로, 즉 다양한 실수 표현이 가능하다는 뜻으로 이해하면 되요.

```js
var num = - 42;
var pi = 3.14;
var hexNumber = 0xfff;
var octalNumber = 0o777;
var binaryNumber = 0b111;
var exp = 2e6;
```



## 문자열 (string)

문자열은 텍스트를 큰따옴표나 작은 따옴표의 쌍으로 둘러싸서 표현합니다.

문자열은 문자열 내의 글자의 길이를 알 수 있는데요. length라는 속성을 사용하면 알 수 있습니다. 변수명뒤에 점(.)을 찍고 length라는 속성명을 적어주는 방식으로 문자열의 길이를 알 수 있어요.

```js
var name = 'Alice';
name.length; // 5
```



문자열 이스케이프

문자열 내부에 특수 문자를 사용하려면 이스케이프라는 것을 해야해요. 즉 작은 따옴표로 둘러싼 문자열 내부에서 작은 따옴표를 사용한다거나, 단어와 단어사이에 탭을 추가하거나 하는 용도로 사용할 수 있어요.

```js
'I\'m Alice'
'My name is \t Alice'
```

특수 문자 목록

| Code | Outputs         |
| ---- | --------------- |
| `\'` | single quote    |
| `\"` | double quote    |
| `\\` | backslash       |
| `\n` | new line        |
| `\r` | carriage return |
| `\t` | tab             |
| `\b` | backspace       |



## 불리언 (Boolean)

불리언은 참과 거짓 두개의 진리값을 표현하기 위해 사용해요. 숫자나 문자와는 달리 `true` 혹은 `false` 두개 중 하나의 값만을 가집니다. 불리언은 나중에 조건문에서 많이 사용해요. 어떠한 조건이 있을 때 참이냐 거짓이냐에 따라 각각 다른 결과로 분기시키는 거죠.

```js
// Boolean
var male = true;
var areYouOK = false;
```



## null 과 undefined

`undefined`는 값이 할당되지 않았다는 것을 표현해요. 변수 선언 시 변수를 선언만 하고 값을 할당하지 않으면 `undefined` 가 되는 거죠.

`null`은 아무런 값도 아니다라는 것을 표현하기 위해 사용해요. 변수에 null을 할당하면 아무런 값도 없다는 것을 뜻해요.

```javascript
// undefined
var user;

// null
var MyClass = null;
```



## 동적 타입 언어

자바스크립트에서는 특정 변수에 숫자를 대입했더라도 추후에 얼마든지 문자열과 같은 다른 데이터 타입의 값을 대입할 수 있습니다. 이처럼 변수에 저장된 자료형을 동적으로 바꿀 수 있는 언어를 동적타입 (dynamic type) 언어라고 부릅니다.

