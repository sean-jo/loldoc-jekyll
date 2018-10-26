---
title: 	"JavaScript String 조작하기"
course: "javascript-basic"
date: 	2018-10-26 10:00:00 +0900
---





문자열 조작은 프로그래밍에서 필수적인 요소입니다. 특히 웹 애플리케이션의 경우 문자열의 비중이 상대적으로 높고, 그만큼 문자열을 다루는 일이 많으므로 반드시 이해해야 합니다.



# String 객체

String 객체에는 문자열을 처리하기 위한 다양한 프로퍼티와 메서드가 존재합니다. 하지만 우리가 조작하려고 하는 문자열은 원시 데이터 타입으로, 프로퍼티와 메서드를 가지고 있지 않습니다. 

하지만 실제로는 마치 객체인 것처럼 메서드와 프로퍼티를 활용할 수 있는데요. 이는 코드를 실행할 때 자동으로 문자열을 `String()` 객체로 래핑하기 때문입니다. 이러한 객체를 래퍼 객체라고 부르며, 필요한 처리가 끝나면 즉시 메모리에서 삭제됩니다.



## Property

문자열의 길이는 `length` 프로퍼티로 구할 수 있습니다.

```js
var str = "As I was going to Saint Ives";

// 문자의 개수를 리턴
str.length;  //-> 28
```



## Method

### 특정 문자열 위치 찾기

```js
// 문자열이 처음 발견된 곳의 인덱스 번호 리턴, 값이 없을경우 -1
str.indexOf("ee");     // -1

// 뒤에서 부터 문자열이 발견된 곳의 인덱스 번호를 리턴, 값이 없을경우 -1
str.lastIndexOf("e");  // 26

// regex 를 활용한 문자열 위치 검색
str.search("was");
```



### 특정 문자열값 반환하기

`charAt(n)` 메서드 - 문자열의 n번째 문자를 구합니다.

```js
// 문자열에서 12번째 위치의 문자를 리턴
str.charAt(12)      // "n"

// n번째 문자의 코드값 구하기
str.charCodeAt(n)   // 122

// regex 를 활용한 문자열 검색
str.match(reg)

// start 부터 end 까지 문자열 복사
str.slice(start, end)
str.slice(2, 4);  // " I"

// start 부터 end 앞까지의 문자열 리턴
str.substring(start, end)
str.substring(4, 7);    // " wa"
```



### 문자열을 찾아 교체하기

```js
// regex 를 활용한 문자열 교체, reg를 rep로 교체한 후 전체 문자열 리턴
str.replace(reg, rep)
str.replace("going", "walking");  // "As I was walking to Saint Ives"

// 문자열 뒤쪽에 매개변수로 전달받은 값을 연결해 새로운 문자열 만들기
str.concat(value);
```



### 문자열 조작하기

```js
// 문자열을 "," 기준으로 분할해 배열을 만들어 리턴
str.split(",");

// 모든 문자열을 소문자로 변환
str.toLowerCase();

// 모든 문자열을 대문자로 변환
str.toUpperCase();

// 문자열의 좌우 공백제거
str.trim();
```





> ES6에 추가된 문자열의 기능을 확인하려면 아래 링크를 참조하세요.
>
> [ES2015 문자열 조작하기][es6-string]





[es6-string]: /docs/es2015/es6-string

