







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


