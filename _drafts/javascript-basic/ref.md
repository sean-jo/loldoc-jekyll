# Date

## 한글 날짜 시간 표시

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



# Library

## 날짜 시간 수학

날짜와 시간을 다루기 위한 라이브러리 - https://momentjs.com/

복잡한 숫자 표현 - http://mathjs.org/

다양한 숫자 표현 - http://numeraljs.com/

