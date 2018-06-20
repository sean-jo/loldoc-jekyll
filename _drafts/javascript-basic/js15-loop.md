









### 반복문

```javascript
for(var i=0; i<10; i++) {
  continue;
  // or
  break;
}

// while
while (조건식) {
}

// do while
do {
  // 한번 실행
} while (조건식);
```



### for...in 루프 (객체 용)

객체의 프로퍼티에 루프를 실행하도록 설계된 루프

```js
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };

for(let prop in player) {
  if(!player.hasOwnProperty(prop)) continue;
  console.log(prop + ": " + player[prop]);
}
```



### for...of 루프 (배열, 컬렉션 ES6)

배열, 이터러블 객체 모두에 사용.

```js
const arr = [1, 2, 3];

for(let num of arr) {
  console.log(`Number ${num}`);
}
```







### 제어문의 예외

break - 루프 중간에 빠져나간다.

continue - 루프에서 다음 단계로 건너뛴다.

return - 제어문을 무시하고 함수를 빠져나간다.

throw - 예외를 발생시킨다.