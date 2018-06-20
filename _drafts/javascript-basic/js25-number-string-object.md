







# Number String Boolean

원시 타입의 데이터 조작을 위해 생성되는 임시 객체



## Number

Property

```js
const small = Number.EPSILON;    // 1에 더했을 때 1과 구분되는 결과를 만들수 있는 가장 작은 값
const bigInt = Number.MAX_SAFE_INTEGER;  // 가장 큰 정수
const max = Number.MAX_VALUE;            // 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER;  // 가장 작은 정수
const min = Number.MIN_VALUE;            // 가장 작은 숫자
const inf = Number.POSITIVE_INFINITY;
const nInf = Number.NEGATIVE_INFINITY;
const nan = Number.NaN;
```



Method

```js
const x = 19.51

// 현재 값이 숫자인지 아닌지 여부를 판단
isNaN(3)     // false
isNaN(NaN);  // true
isNaN(x);    // false


// toFixed 고정 소수점. 소수점 뒤 자릿수 지정하기, 문자열로 리턴
x.toFixed(3);          // "19.510"


// toExponential 지수 표기, 값은 문자열로 리턴
x.toExponential(4);    // "1.9510e+1"


// toPrecision 전체 자리수 고정, 실수값을 문자열로 리턴.
x.toPrecision(5);      // "19.510"
```



## String

Property

```js
/* 문자열 내의 문자의 개수를 리턴 */
str.length
```



Method

```js
const str = "As I was going to Saint Ives";


/* 특정 문자열 존재여부 확인 */
str.startsWith("As")        // true
str.startsWith("going", 9)  // true, index 9에서 시작
str.endsWith("Ives")        // true
str.endsWith("going", 14)   // true, index 14를 끝으로 간주
str.includes("going")       // true



/* 특정 문자열 위치 찾기 */
// 문자열이 처음 발견된 곳의 인덱스 번호 리턴, 값이 없을경우 -1
str.indexOf("ee")           // -1

// 뒤에서 부터 문자열이 발견된 곳의 인덱스 번호를 리턴, 값이 없을경우 -1
str.lastIndexOf("e")        // 26

// regex 를 활용한 문자열 위치 검색
str.search("was")



/* 특정 문자열 리턴하기 */
// 문자열에서 12번째 위치의 문자를 리턴
str.charAt(12)      // "n"

// n번째 문자의 코드값 구하기
str.charCodeAt(n)   // 122

// regex 를 활용한 문자열 검색
str.match(reg)

// start 부터 end 까지 문자열 복사
str.slice(start, end)
var res = str.slice(2, 4);  // " I"

// start 부터 end 앞까지의 문자열 리턴
str.substring(start, end)
str.substring(4, 7);    // " wa"



/* 문자열을 찾아 교체하기 */
// regex 를 활용한 문자열 교체, reg를 rep로 교체한 후 전체 문자열 리턴
str.replace(reg, rep)
str.replace("going", "walking");  // "As I was walking to Saint Ives"

// 문자열 뒤쪽에 매개변수로 전달받은 값을 연결해 새로운 문자열 만들기
str.concat(value);



/* 문자열 조작하기 */
// 문자열을 "," 기준으로 분할해 배열을 만들어 리턴
str.split(",");

// 모든 문자열을 소문자로 변환
str.toLowerCase();

// 모든 문자열을 대문자로 변환
str.toUpperCase();

// 문자열의 좌우 공백제거
str.trim();
```

