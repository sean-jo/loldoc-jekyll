---
title: 	"JavaScript Date 객체"
course: "javascript-basic"
date: 	2018-08-11 10:00:00 +0900
---



## Date 생성자

자바스크립트에서는 Date 객체를 이용해 날짜와 시간을 표현할 수 있습니다. Date 객체는 Date 생성자를 이용해 생성합니다.



### 날짜 (Date)

```js
/* 날짜 객체 생성 */
var now = new Date();
now  //-> Fri Dec 16 2017 17:08:10 GMT+0900
```

위 코드가 실행되면 실행된 시점의 날짜와 시간 정보를 담은 객체가 생성되어 변수에 저장됩니다. 변수를 실행해 보면 객체가 생성된 시점의 시간 정보를 확인할 수 있습니다.



Date 생성자의 인수로 날짜와 시간 정보를 전달하면 해당 날짜를 가르키는 객체를 생성할 수 있습니다.

단, 자바스크립트에서 1월은 0부터 시작하므로 아래 예제와 같이 월을 입력할 경우에 유의해야 합니다. 

```js
// 특정 날짜에 해당하는 객체 생성
var halloween = new Date(2017, 9, 31);  // 10월 31일
```





## Date 객체의 메서드

Date 객체에는 날짜와 시간을 다루기 위해 다양한 메서드를 제공합니다.

```javascript
var today = new Date();

// 연도
var year    = today.getFullYear()  // 2018

// 월 (0부터 시작)
var month   = today.getMonth()     // 0~11

// 일
var date    = today.getDate()      // 1~31

// 요일 (일요일부터 0으로 시작)
var weekday = today.getDay()       // 0~6

// 시간
var hours   = today.getHours()     // 0~23

// 분
var minutes = today.getminutes()   // 0~59

// 초
var seconds = today.getSeconds()   // 0~59

// 밀리초
var milli   = today.getMilliseconds()  // 0~999

// 날짜와 시간을 문자열로 표시
today.toString();  // 'Thu Oct 25 2018 17:00:22 GMT+0900 (대한민국 표준시)'

// 현지화된 날짜와 시간 표현법을 사용하여 문자열로 표시
today.toLocaleString();  // '2018-10-25 17:00:22'

// 1970.01.01.00:00:00 기점으로 객체에 저장된 시간까지의 밀리초 리턴
today.getTime()  // 1540404422679

// 1970.01.01.00:00:00 기점으로 현재 시간까지의 밀리초 리턴
Date.now()  // 1540404422679
```





## 해당 월의 총일수 구하기

자바스크립트의 Date 객체를 이용해 해당하는 월의 총일수를 구하는 방법입니다. 즉, 해당하는 달이 30일까지인지 31일 까지인지 알 수 있는 방법이죠.

```js
// 당월 총 일수 구하기
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var m_length = 32 - new Date(year, month, 32).getDate();
console.log(m_length);  // 30 or 31
```

구하고자 하는 달의 날짜에 32를 대입하게 되면 달이 바뀌게 됩니다. 만약 해당하는 달이 31일 까지 있다면 결과는 32 - 31인 1이 되겠죠. 이 값에서 32를 빼게되면 원하는 결과값인 31을 얻게됩니다.

