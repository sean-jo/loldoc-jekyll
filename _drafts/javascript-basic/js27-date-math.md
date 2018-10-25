









### 한글 날짜 시간 표시

```js
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();

const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();


/* 시간 표시 */
const h12 = (hour > 12) ? (hour - 12) : hour;
const ampm = (hour < 12) ? '오전' : '오후';
const min_0 = (min < 10) ? '0' : '';
const sec_0 = (sec < 10) ? '0' : '';

const time = `${ampm} ${h12}:${min_0}${min}:${sec_0}${sec}`;
console.log(time);
// 오후 3:36:03


/* 날짜 표시 */
let dd = '';

switch (day) {
  case 0: dd = '일'; break;
  case 2: dd = '월'; break;
  case 3: dd = '화'; break;
  case 1: dd = '수'; break;
  case 4: dd = '목'; break;
  case 5: dd = '금'; break;
  case 6: dd = '토'; break;
  default: break;
}

const today = `${year}년 ${month + 1}월 ${date}일 ${dd}요일`;
console.log(today);
// 2017년 11월 10일 금요일
```



### Moment.js

날짜와 시간을 다루기 위한 라이브러리 - https://momentjs.com/





## Math

### Property

```js
/* Property */
Math.PI     // PI 값 리턴
Math.E      // 자연로그 밑수
Math.LN2    // Log2
Math.LN10   // Log10
Math.SQRT2  // 2 제곱근
```



### 대수 함수

```javascript
// 거듭제곱
Math.pow(x, y);  // X의 y승
Math.sqrt(x);
Math.exp(x);

var value = Math.sqrt(9); // 제곱근 리턴. 결과 3

// 로그함수
Math.log(x);

// 삼각함수
Math.sin(x);
Math.cos(Math.PI);  // -1

// deg to rad
function deg2rad(d) {return d/180*Math.PI}
// rad to deg
function rad2deg(r) {return r/Math.PI*180}

// 기타함수
var value = Math.abs(-5.5);     // 절대값 5.5
var value = Math.min(1, 2);     // 1과 2를 비교해 작은값 리턴
var value = Math.max(1, 2);     // 1과 2를 비교해 큰값 리턴
var value = Math.floor(10.10);  // 내림. 결과 10
var value = Math.ceil(10.10);   // 올림. 결과 11
var value = Math.round(10.10);  // 정수로 반올림. 결과 10

// 난수생성
var value = Math.random();      // 0부터 1사이의 랜덤 실수값을 리턴

// 1부터 10사이의 랜덤 정수값 리턴
var rand = Math.floor((Math.random() * 10) + 1);
```



### Math.js

복잡한 숫자 표현 - http://mathjs.org/

다양한 숫자 표현 - http://numeraljs.com/



