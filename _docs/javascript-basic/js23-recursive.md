---
title: "JavaScript 재귀함수"
course: "javascript-basic"
date:   2018-06-26 15:00:00 +0900
---



# JavaScript 재귀함수

함수가 함수 내부에서 자기 자신을 호출하는 함수를 재귀 함수 (Recursive function) 라고 부릅니다. 이러한 재귀 함수는 재귀 호출을 이용해 간단하게 문제를 해결할 수 있는 특정 경우에 사용되며, 가장 많이 사용되는 예시로는 팩토리얼을 들 수 있습니다.



## 팩토리얼 함수

팩토리얼은 n이 자연수일 경우, 1에서 n까지의 모든 자연수의 곱을 나타냅니다. 즉 3의 팩토리얼 `3!` 는 `3 * 2 * 1 = 6` 이 됩니다.

이를 재귀함수를 이용해 나타내면 아래와 같습니다.

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial(3);  // 6
```

이 경우 함수 내부의 재귀 호출은 `n - 1` 값으로 대치 되어 결국 `3 * 2 * 1` 의 팩토리얼 결과를 반환하게 됩니다. 특히 함수를 종료시키기 위해 `n`이 1 이하일 경우는 1을 반환하는 것으로 재귀함수를 멈추었습니다.

재귀함수는 몇몇 경우에 편리하게 사용할 수 있지만, 이해하기 어려운 측면도 있으므로 반복문을 사용하여 표현할 수 있다면 반복문을 사용하는 것이 더 좋은 경우가 많습니다.



위의 factorial 함수도 for 문을 이용해 간략하게 표현할 수 있습니다.

```js
function factorial(n) {
  var result = 1;
  for (n; n > 1; n--) {
    result *= n
  }
  return result;
}

factorial(3);
```


