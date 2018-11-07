---
title: 	"ES2015 이터레이터와 for....of 문"
course: "es2015"
date:   2018-10-26 13:00:00 +0900
---





## 이터레이터 (iterator)

이터레이터 (iterator)는 반복처리가 가능한 객체를 의미합니다. ES6에 추가된 이터레이터를 이용하면 반복처리를 단계적으로 제어할 수 있습니다.





## for...of 루프 (배열, 컬렉션 ES6)

배열, 이터러블 객체 모두에 사용.

```js
const arr = [1, 2, 3];

for(let num of arr) {
  console.log(`Number ${num}`);
}
```





