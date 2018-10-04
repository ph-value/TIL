# React Native Basic

* StyleSheet
  * CSS 처럼 쓰지 않게 주의할 것! (shorthand property는 지원하지 않는다)
  * **flex**는 *android layout xml*의 **weight**과 같은 역할



Stateless Component 작성 시 export 코드 작성해주기.



**Platform-specific Code**를 통해 IOS/Android에 대해 타겟 대응하는 코드를 작성.

```js
...Platform.select({
ios: {},
android: {}
])
```



[**AsyncStorage**](https://facebook.github.io/react-native/docs/asyncstorage#docsNav) - 비동기식 키-값 스토리지 시스템.

