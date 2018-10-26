---
title: 	"ES2015 문자열 조작하기"
course: "es2015"
date: 	2018-10-26 10:00:00 +0900
---



ES2015에서 문자열 조작을 위한 편리한 기능이 많이 추가되었습니다. 백틱을 이용한 템플릿 리터럴과 문자열 보간은 문자열을 쉽게 다룰 수 있도록 해주는 아주 편리한 기능입니다. 그리고 String 객체에도 문자열을 쉽게 탐색할 수 있는 메서드가 추가되었습니다.



## 템플릿 리터럴

ES6에서는 문자열을 표기하기 위해 기존에 사용되던 작은 따옴표 및 큰 따옴표(`'', ""`) 외에 백틱 기호 (\`\`)를 이용할 수 있으며, 백틱 기호로 둘러싼 문자열은 템플릿 리터럴 표기법을 사용할 수 있게 되었습니다. 

기존에는 문자열 내에서 개행을 위해 개행할 문장의 끝에 일일이 (`\n`) 을 사용해야 했지만 템플릿 리터럴을 사용하면 문자열 개행을 손쉽게 처리할 수 있게 됩니다.

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





## 문자열 보간 (String Interpolation)

템플릿 리터럴을 이용하면 `${}` 템플릿을 이용해 문자열 사이에 손쉽게 표현식의 값을 대입할 수 있으며, 여러줄의 문자열을 쉽게 표현할 수 있습니다. 이를 문자열 보간이라고 표현합니다.

플레이스 홀더 기호 내부에는 자바스크립트 표현식이 올 수 있으며, 문자열 내부에 손쉽게 변수 값이나 표현식 값을 삽입할 수 있습니다. 

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





## String 객체

String 객체에 유용한 메서드가 추가되었습니다.



특정 문자열 존재여부 확인하기

```js
var str = "As I was going to Saint Ives";

// str이 인수의 값으로 시작하는지 확인
str.startsWith("As")        // true
str.startsWith("going", 9)  // true, index 9에서 시작

// str이 인수의 값으로 끝나는지 확인
str.endsWith("Ives")        // true
str.endsWith("going", 14)   // true, index 14를 끝으로 간주

// str이 인수의 값을 포함하는지 확인
str.includes("going")       // true
```



