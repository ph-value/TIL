The Pragmatic Programmer 003
---

**TIL (Today I Learned) 날짜**

2022.03.23


**오늘 읽은 범위**

3장 기본도구


**책에서 기억하고 싶은 내용을 써보세요.**

`Topic` : 일반 텍스트, 셸, 파워에디팅, 버전관리, 디버깅, 텍스트 처리, 엔지니어링 일지

- 기본 도구
  - 각 도구들은 [고유의 방식으로 다듬어지고, 손에 쥐며, 사용 습관에 따라 닳아서] 손의 연장(extension)이 된다.
  - 도구는 우리들의 재능을 증폭시킨다. -> 생산성이 높아진다
  - 자신의 도구 상자에 [주기적으로 뭔가를 추가하게 될 것이라 예상하고, 언제나 일을 하는 데에 더 나은 방법이 없는지 살펴라]
- 일반 텍스트 -> 표준
  - '지식을 저장하는 최고의 포맷'
  - 조건
    - 인쇄 가능한 문자로 이루어진다.
    - 정보를 전달하기 적합한 형식을 갖추어야 한다.
  - 일반 텍스트가 널리 쓰이는 이유
    - 지원 중단에 대한 보험
      - 사람이 읽을 수 있는 형태의 데이터 (human readable)와 그 자체만으로 의미가 드러나는 데이터는 오래 살아 남는다.
    - 기존 도구의 활용
      - 컴퓨터 세계의 거의 모든 도구를 일반 텍스트를 다룰 수 있다.
        > 유닉스 철학
            일반 텍스트 파일을 기반 포맷으로 공유
    - 더 쉬운 테스트
      - 특벌한 도구를 만들 필요 없이 간단하게 테스트 데이터를 추가하거나 수정할 수 있다.
        - 회귀 테스트, 회귀 테스트에서 찾아낸 문제 : 리그레션(regression)
- 셸
  - GUI(graphical user interface) vs. Shell
  - GUI의 장점: WYSIWYG(What You See Is What You Get), 단점: WYSIAYG(What You See Is All You Get)
  - GUI 환경의 기능은 일반적으로 설계자가 의도한 범위를 넘어설 수 없다.
  - 자신만의 셸
  
    :heavy_check_mark: 색깔 조합 설정
    
    :x: 프롬프트 설정
    
    :x: 별칭과 셸 함수
    
    :heavy_check_mark: 명령어 자동완성 
    
- 파워 에디팅
  - 에디터를 유창하게 쓸 수 있게 하라.
  
    :heavy_check_mark: 텍스트 편집 시 문자, 단어, 줄, 문단 단위로 커서 이동 및 선택
    
    :heavy_check_mark: 코트 편집 시 반대쪽 괄호로 이동, 함수, 모듈 등 문법 단위로 커서 이동
    
    :heavy_check_mark: 변경 코드의 자동 indent
    
    :heavy_check_mark: 여러 줄의 코드 주석 및 해제
    
    :heavy_check_mark: 실행 취소 여러번 -> 재실행
    
    :heavy_check_mark: 에디터 창 여러 구역 쪼개기, 구역 이동
    
    :heavy_check_mark: 특정 줄 번호 이동
    
    :x: 여러 줄을 선택, 가나다순으로 정렬
    
    :heavy_check_mark: 문자열로, 정규 표현식으로 검색, 이전 검색 재검색
    
    :heavy_check_mark: 여러 개의 커서, 동시에 여러 곳 텍스트 편집
    
    :x: 현재 프로젝트의 컴파일 오류를 표시하라
    
    :heavy_check_mark: 현재 프로젝트의 테스트를 실행하라
    
  - 에디터 성장시키기
    - 확장 기능 언어를 파헤쳐 보라.
    - 늘 하는 반복적인 일을 자동화할 방법을 연구해 보라.
    - 필요한 확장 기능이 없다면 확장 기능을 만들어 낼 수도 있을 것이다. 그리고 공개하라.
- 버전 관리
  - 언제나 버전 관리 시슴템을 사용하라
    - 언제나.
    - 혼자서 한 주짜리 프로젝트를 진행하는 경우일지라도,
    - 나중에 '버리기로 한' 프로토타입일지라도,
    - 소스 코드가 아닐지라도
    - **모든 것**을 버전 관리 아래 둬라
  - 브랜치 사용하기
    - 프로젝트의 어느 시점에서나 브랜치를 만들어 격리하고 나중에 다른 브랜치로 병합할 수 있다.
    - 브랜치과 테스트 구조의 공통점
      - 둘 다 수천 명의 외부인들이 어떻게 하는 게 맞냐고 잔소리를 한다는 거다.
- 디버깅
  - 디버깅 == 무서운 것(bogeyman, 부기맨)
  - 디버깅은 단지 **문제 풀이**일 뿐이라는 사실을 받아들이고, 그런 마음으로 공략하라.
  - 특정 증상만 고치려고 하지 말고, 항상 문제의 근본 원인을 찾으려고 노력하라.
  - 컴파일러의 경고 수준을 최고로 높게하여 컴퓨터가 대신 찾아 줄 수 있는 문제를 우리가 찾지 말자!
  - "처음에 받은 자료 이상을 얻기 위해서 버그를 보고한 사용자를 인터뷰할 필요도 있다."
  - 디버깅 전략
    - 이진 분할, 분할 정복 사용
    - 릴리즈의 예 :
        1. 현재 릴리즈에서 실패 테스트 작성.
        2. 문제가 없었던 버전 중 가장 최근 버전과 현재 버전 사이에서 중간 정도에 위치한 릴리즈를 골라라.
        3. 테스트를 수행한 후, 결과에 따라 어느 쪽을 탐색할지 골라라.
    - 로깅(loging)과 트레이싱(tracing)
      - 스택 트레이스 : 여기에 어떻게 도달했는지를 단편적으로 말해 줄 수 있을 뿐이다.
      - 트레이싱 구문 : 작은 진단용(diagnoostic) 메세지.
        - 규칙적이고 일관된 형식이어야 한다.
    - 러버덕
      - 누군가에게 설명하는 방법
      - 이것만으로도 찾고 있던 문제가 화면 밖으로 뛰쳐나와 모습을 드러낸다.
    - 소거법
  - 디버깅 체크 리스트
  
    :radio_button: 보고된 문제가 내재하는 버그의 직접적 결과인가 아니면 단순히 증상일 뿐인가?
    
    :radio_button: 버그가 정말로 여러분이 사용하는 프레임워크에 있나? OS에? 아니면 여러분 코드에 있나?
    
    :radio_button: 이 문제를 동료에게 상세히 설명한다면 어떻게 말하겠는가?
    
    :radio_button: 의심 가는 코드가 단위 테스트를 통과한다면 테스트는 충분히 갖춰진 것인가? 이 데이터로 테스트를 돌리면 무슨 일이 생기는가?
    
    :radio_button: 이 버그를 야기한 조건이 시스템의 다른 곳에도 존재하는가? 다른 버그가
    유충 단계에서 성충이 될 날만 기다리고 있는 것은 아닌가?
    
- 텍스트 처리
- 엔지니어링 일지
  - 무언가를 쓰기 위 해 하던 일을 멈추면 여러분의 뇌도 기어를 바꾼다.
  - 메모를 시작하자마자 메모의 주제인 여러분이 방금 전까지 하던 일이 실은 말도 안 된다는 것을 깨닫게 될 수도 있다.


**오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**

- 기본 도구가 있고 자신의 도구 상자에 '어떻게 투자'할 지에 대해 Topic별로 이야기 한 부분이 잘 정리 되어있어서 좋았다.
- 일반 텍스트
  > 107p: 모든 소프트웨어는 작성되자마자 레거시가 된다.
    - 우리 모두는 레거지 생산자. 그리고 그 레거시를 통해 살아가지.
  > 109p: 회귀 테스트는 동일한 테스트를 반복적으로 수행함으로써 새로운 기능이 애플리케잇션에 추가되었을 때 기존 기능이 여전히 제대로 작동하는지 검사하는 테스트다.
    - 직관적인 예시가 있을까?
- 셸
  - > 112p: 계약에 의한 설계(design-by-contract), 다중 처리 프라그마(multi-processing pragma) 등을 구현하기 위해 IDE에 코드 전처리기를 추가해야 한다고 가정해 보자.
    - `new` 계약에 의한 설계(design-by-contract)
      - contract programming, programming by contract
      - 소프트웨어 설계자가 사업 계약에 따른 조건과 의무에 검증 가능한 인터페이스 사양을 정의해야 한다.
      - 대부분의 DbC 기능을 기본적으로 구현하는 언어 : 코틀린, 스칼라 등.
    - `new` 다중 처리 프라그마(multi-processing pragma)
      - 프라그마
        - 컴파일러에 추가 정보를 제공하기 위해 C언어 표준에서 지정한 방법.
  - > 112p: 자바 코드에서 명시적으로 import하는 패키지 이름을 중복 없이 모아야 하는가? 다음 명령은 그 목록을 'list'라는 파일에 저장한다.
    ```
    grep '^import ' *.java | \
      sed -e's/.*import *//; -e's/;.*//' | \
      sort -u > list
    ```
    [문자열을 찾아라] [import로 시작(^)하는] [확장자가 .java 파일에서] [그리고(|)] [줄바꿈(\)]
        [문자열을 대체하라(stream editor)] [다중 명령어 시 꼭 서야함 (-e)] [치환(s/)] [import글자를 공백으로(지움)] [;] [(-e)] [;문자를 공백으로(지움)] [그리고(|)] [줄바꿈(\)]
        [정렬하라] [중복없이(-u)] [파일에 저장(>)] [list라는 이름의]
- 파워 에디팅
  - 셸 토픽과 마찬가지로 해본 것은 :heavy_check_mark:로 표시, 못 해본 것은 :x:로 표시했다. 못 해본 것을 해본 것으로 만들어야겠다. 
- 버전 관리
  - 특정 릴리즈와 관련해서 이런 글을 남긴 적이 있다.
    [Expo CLI로 대체된 Expo XDE 설치파일 다운로드 링크](https://ph-value.github.io/blog/expo-xde-download-link/)
    (2018년 글... 지금은 어떨런지 확인해보고 삭제해야겠다...)
  - > 사고 실험
    ...밀크티를 몽땅 노트북 키보드에 쏟아 버렸다.
    
    여기까지 읽고 넘겨버림. 끔찍해.
  - > 도전해 볼 것
    노트북의 환경을 복구하는 것에 대해 시간을 두고 고민해 보라.

    마침 내 맥북 프로를 포맷하고 싶은데, 설치되어 있는 확장 프로그램이나 셸 설정들, 에디터 설정들을 어떻게 export 해야하는지 찾아보고 있었다. 과제 아닌 과제를 받아든 느낌.
- 디버깅
  - > 133p: 스택 트레이스 ~ 이벤트 기반 시스템에서는 더하다.
        (주석 내용 : 엘름(Elm)언어에 시간 여행 디버거가 있기는 하다.)

    이벤트 기반 시스템 : 이벤트 기반 시스템은 발생한 이벤트에 대해 언제, 어디서, 어떤 이벤트가 발생했는지 따위의 데이터를 수집하고, 이 데이터를 필요한 이벤트 핸들러로 발송(dispatch)한다.
    
    - 이벤트가 언제 들어올지 모르니 디버깅 및 스택 트레이스로 추적하기 어렵다는 뜻인 것 같다.
  - 나의 러버덕 대체품은 내 컵 위의 이상해씨이다. (사진은 나중에)
  - > 제 1 법칙. 당황하지 말라.
    - JIRA에서 이슈티켓을 왕창 받은 일이 생각난다. 당황 그 자체였다.
- 텍스트 처리
  - 무엇을 말하려고 하는지 의중을 모르겠다.
- 엔지니어링 일지
  - 종이와 펜으로 쓰기를 추천하는 것에 동의한다.
  - 회고록을 쓸 일? 그럴 일은 없다.


---
이번 글은 꽤 길게 작성했는데, 기본도구. 챕터명과 같이 기본에 충실해야 하기 때문이 아닌가 싶다.

두고두고 들여다 볼 필요가 있는 챕터였다.

TIL에 내 경험이 꽤 실렸는데, 시간이 지난 후에 업데이트 될 것은 소망한다.







