# Flutter를 위한 Dart 문법 정리

여러가지 Flutter 튜토리얼, 프로젝트를 해보며 기록하는 문서입니다.



```dart
index = i ~/ 2;
```

The expression `i ~/ 2` divides `i` by 2 and returns an integer result.



> In Flutter's reactive style framework, calling `setState()` triggers a call to the **build()** method for the State object, resulting in an update to the UI.

- `setState()`  호출 시 State 객체에 대해 **build()** 메서드가 호출되어 UI가 업데이트 된다.