---
title: "JavaScript JSON - stringify, parse"
course: "javascript-basic"
date:   2018-08-13 13:00:00 +0900
---



# JavaScript JSON

JSON(JavaScript Object Notation)은 자바스크립트 객체를 문자열로 표현하는 데이터 포맷입니다. 자바스크립트 객체 리터럴과 유사하지만 객체가 아닌 문자열일 뿐이며, 이를 이용해 다른 도메인과 데이터를 주고 받을 수 있게됩니다.

JSON은 XML 등 다른 데이터 포맷에 비해 간결하며, 손쉽게 자바스크립트 객체로 변환할 수 있으므로, 최근에는 웹 애플리케이션에서 서버와 클라이언트 간의 데이터 교환에 주로 JSON을 사용합니다.



## JSON 표기법

JSON은 자바스크립트 객체와 유사하지만 표기법이 조금 다릅니다. 표기법이 간결하긴 하지만 문법에 예민하므로 정확히 사용하는 것이 중요합니다.

```json
{
  "name": "Alice",
  "age": 10,
  "gender": "female",
  "location": "Wonderland",
  "marriage": false,
  "friends": ["Ada", "Mabel"]
}
```



- key는 반드시 큰따옴표로 둘러싸야합니다.
- value 값은 string, number, boolean, array, object, null이 올수있습니다.
- 키와 값은 `:` 기호를 이용해 구분하며, 키/값 쌍은 `, ` 기호로 구분합니다.





## 직렬화 역직렬화

자바스크립트의 객체를 문자열로 변환할 수 있습니다. 이렇게 컴퓨터 메모리 상에 존재하는 객체를 문자열로 변환하는 것을 직렬화 (Serialization)이라고 합니다.

반대로 문자열을 자바스크립트 객체로 반환하는 것을 역직렬화(Deserialization) 혹은 파싱(Parsing) 이라고 합니다.

이러한 과정을 통해 데이터를 다양한 도메인 간에 주고 받을 수 있게 됩니다.



### JS 객체를 JSON 문자열로 변경하기

JSON.stringify 메서드를 사용해 자바스크립트 Object를 JSON 문자열 데이터로 변경할 수 있습니다.

```js
var alice = { 
  name: 'Alice',
  age: 10,
  gender: 'female',
  location: 'Wonderland',
  marriage: false,
  friends: [ 'Ada', 'Mabel' ] 
}

var json = JSON.stringify(alice);
console.log(json);
//->
'{"name":"Alice","age":10,"gender":"female","location":"Wonderland","marriage":false,"friends":["Ada","Mabel"]}'
```





### JSON 문자열을 JS 객체로 변경하기

JSON.parse 메서드를 사용해 JSON 문자열 데이터를 자바스크립트 Object로 변경할 수 있습니다.

```js
JSON.parse(json);
//->
{ name: 'Alice',
  age: 10,
  gender: 'female',
  location: 'Wonderland',
  marriage: false,
  friends: [ 'Ada', 'Mabel' ] }
```



