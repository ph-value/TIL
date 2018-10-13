# React Native Basic



Stateless Component 작성 시 export 코드 작성해주기.

[**AsyncStorage**](https://facebook.github.io/react-native/docs/asyncstorage#docsNav) - 비동기식 키-값 스토리지 시스템.





---

####Platform-specific Code

IOS/Android에 대해 타겟 대응하는 코드

**StyleSheet**

```js
...Platform.select({
ios: {},
android: {}
])
```

**code**

```javascript
const instructions = Platform.select({
  ios: 'some text for ios',
  android: 'some text for android',
});
```

---



## StyleSheet

- CSS 처럼 쓰지 않게 주의할 것! (shorthand property는 지원하지 않는다)
- **flex**는 *android layout xml*의 **weight**과 같은 역할