---
title: "JavaScript 데이터 타입 변환"
course: "javascript-basic"
date:   2018-10-10 12:00:00 +0900
---



### 데이터 타입 변환

```javascript
/* 암시적 형변환 */
var a = 10+"10";     // a: "1010"
var a = true+"10";   // a: "true10"
var a = true+10;     // a: 11


/* 숫자로 형변환 */
// 문자를 숫자로 변환
parseInt("1010");
const a = parseInt("16 volts", 10);  // 16
const b = parseInt("3a", 16);        // 16진수 3a를 10진수로 변경. => 58
parseFloat("10.10");
Number("10.10");

// 날짜 객체를 숫자로 변환
var d = new Date();
var ts = d.valueOf();      // UTC 1970/1/1 기준 밀리초

// Boolean을 숫자로 변환
var n = true ? 1 : 0;


/* 문자로 형변환 */
var n = 15;
n.toString();       // "15"
n.toString(16)      // "f"
n.toFixed(1)        // "15.0"
String(n);          // "15"


/* 불리언으로 형변환 */
var n = 0;         // falsy value
var bool = !!n;    // false
```

