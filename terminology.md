# 용어 정리

> 기억하려고 남기는 처음 알게 된 용어들



- vsync 
  - **V**ertical **Sync**hronization (**V-sync**)
  - 수직동기화 : 프레임과 화면 출력 프레임의 타이밍이 맞지않아 그래픽이 깨지는 현상을 막아주는 역할을 한다.
    - 참고 : [Flutter 문서](https://codelabs.developers.google.com/codelabs/flutter/#6), [TickerProviderStateMixin](https://docs.flutter.io/flutter/widgets/TickerProviderStateMixin-mixin.html)


- 진자 템플릿
  > 어느새부턴가 익히 사용하고 있었지만 용어를 몰랐었다!
  - Python에서 사용되는 간단하고 유연한 템플릿 엔진
  - 동적인 콘텐츠를 생성하는데 사용. 변수, 제어 구조, 필터 등을 활용하여 템플릿 파일의 동적인 부분을 채울 수 있음. 
  - 예를 들어 `{{ 변수 }}`는 변수를 출력, `{% if 조건 %} ... {% endif %}`는 조건문을 나타냅니다.
  ```(python)
  sql = "SELECT * FROM prod.nps WHERE DATE(created_at) = DATE('{{ execution_date }}')"
  ```