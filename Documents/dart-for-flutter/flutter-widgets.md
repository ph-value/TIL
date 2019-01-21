# Flutter의 Widget

>Flutter의 Widget과 각 속성, 인수 등에 대한 설명을 정리합니다



### ListView

```dart
new ListView.builder(
            padding: new EdgeInsets.all(8.0),
            reverse: true,
            itemBuilder: (_, int index) => _messages[index],
            itemCount: _messages.length,
          ),
```

itemBuilder의 인수 _(underscore)는 이름을 사용하지 않겠다는 규칙이다.

