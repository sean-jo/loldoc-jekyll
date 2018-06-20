











## 객체 프로퍼티 속성

```js
const obj = { foo: "bar" };
Object.getOwnPropertyDescriptor(obj, 'foo');
//=>
{ value: 'bar',
  writable: true,
  enumerable: true,
  configurable: true }

Object.defineProperty(obj, 'foo', {writable: false});
```



## 객체 보호

동결 - 불변 객체로 만든다.

```js
const appInfo = {company: "WSS"};

Object.freeze(appInfo);
Object.isFrozen(appInfo);  // true
```



봉인 - 프로퍼티 추가, 변경, 삭제 불가

```js
const log = new Logger("Log");

Object.seal(log);
Object.isSealed(log);  // true
```



확장금지

