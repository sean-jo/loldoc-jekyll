---
title: ""
course: "javascript-for-web"
date: 2018-01-01 09:00:00 +0900
---



웹페이지에 자바스크립트 코드를 삽입하고 실행하기 위해서는 HTML 문서 내부에서  `<script>` 태그를 이용해야 합니다. script 태그를 사용하는 방식에는 인라인 스크립트 를 직접 작성하는 방식과 외부 스크립트를 링크하는 방식이 있습니다.

인라인 스크립트 방식은 `<script>` 태그 내부에 직접 코드를 작성하는 방식입니다.

```html
<!-- index.html -->
<body>
  <h1>Hello World</h1>
  <script>
    alert("Hello");
  </script>
</body>
```



외부 스크립트 방식은 자바스크립트 코드를 `script.js` 등과 같은 외부 파일에 작성하고 파일을 `<script>` 태그의 src 속성값으로 링크시키는 방식입니다.

```html
<!-- index.html -->
<body>
  <h1>Hello World</h1>
  <script src="script.js"></script>
</body>
```

```js
// script.js
alert("Hello");
```



`<script>` 태그는 HTML 문서 내부에서 주로 `</body>` 태그 바로 위 (즉 body 태그의 가장 아래), 혹은 `<head>` 태그 내부에 작성하게 됩니다.

- [ ] 이유 작성



---

스크립트 코드 파싱 - 전역 스코프에 변수 및 함수 등록

스크립트 코드 실행 -> 함수 호출 -> 함수 파싱 - 함수 스코프에 함수 스코프 변수 등록

함수 실행



