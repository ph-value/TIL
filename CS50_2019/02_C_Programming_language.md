# 2. C언어

## 1) C기초

- ### C언어 : 텍스트 기반의 프로그래밍 언어.

- ![The C Programming Language logo.svg](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/140px-The_C_Programming_Language_logo.svg.png)

  ```c
  #include <stdio.h>
   
   int main(void){
   printf("hello, world!\n");
   }
  ```

  - line 1: `include` 
    - C 프로그래밍 언어에서 #include 지시어는 preprocessor에게 다른 파일의 내용을 소스 코드에 삽입하도록 지시합니다.
  - line 1: `<stdio.h>`
    - Standard Input/Output library (표준입출력 라이브러리)
    - C 언어의 표준 라이브러리 함수의 매크로 정의, 상수, 여러 형의 입출력 함수가 포함된 헤더 파일
  - line 3: `int main(void){}`
    - 메인 함수. 프로그램의 시작점. `{ }` 안에 있는 코드를 실행한다.
  - line 4: `printf()`
    - 표준 출력 함수. 서식에 맞게 문자를 출력해준다.
  - line 4: `printf("hello, world\n")`
    - 쌍따옴표 안에 문자열이 출력된다.
    - `\n`은 다음 줄(next line)을 나타내는 [Escape sequence](https://en.wikipedia.org/wiki/Escape_sequences_in_C)이다.

- ### **컴파일러(Compiler)**

- ```mermaid
  graph LR
  A((source code))-->B[compiler]
  B-->C((machine code))
  ```

- **소스 코드(source code)**: 우리가 직접 작성한 코드

- **머신 코드(machine code)**: 컴퓨터가 이해할 수 있는 2진수 코드



- ### :grey_question: 생각해보기 :grey_exclamation:

  > C로 "hello, boostcourse" 출력해보세요.

  ![image-20220816163214037](./images/image-20220816163214037.png)

---



## 2) 문자열

- 문자열(String) : 0개 이상의 문자 배열

- ```c
  #include <cs50.h>
  #include <stdio.h>
  int main(void){
  string name=get_string("What's your name?\n");
  printf("hello, %s\n",name);
  }
  
  ```

  - 사용자로부터 문자 입력을 받아 출력하는 프로그램
  - 입력 받은 문자를 `name` 에 저장한 후 line 5에서 `%s`를 통해 출력한다

- ### 형식 지정자(format specifiers)

  | SPECIFIER | USED FOR                                           |
  | :-------- | :------------------------------------------------- |
  | %c        | a single character                                 |
  | %s        | a string                                           |
  | %hi       | short (signed)                                     |
  | %hu       | short (unsigned)                                   |
  | %Lf       | long double                                        |
  | %n        | prints nothing                                     |
  | %d        | a decimal integer (assumes base 10)                |
  | %i        | a decimal integer (detects the base automatically) |
  | %o        | an octal (base 8) integer                          |
  | %x        | a hexadecimal (base 16) integer                    |
  | %p        | an address (or pointer)                            |
  | %f        | a floating point number for floats                 |
  | %u        | int unsigned decimal                               |
  | %e        | a floating point number in scientific notation     |
  | %E        | a floating point number in scientific notation     |
  | %%        | the % symbol                                       |

- `$ clang -o string string.c -lcs50` -> `$make string`

- `make` 명령어를 통해 간단하게 컴파일을 수행할 수 있다.

- ### :grey_question: 생각해보기 :grey_exclamation:

  > "좋아하는 동물을 알려주세요"로 질문하여 동물 이름을 animal이라는 변수에 저장하고, 이를 "내가 좋아하는 동물은"으로 출력해주는 코드를 작성해보세요.

  ![image-20220816185847042](./images/image-20220816185847042.png)

---



## 3) 조건문과 루프
- 변수 할당
```c
int counter = 0; //정수형 변수 counter에 0을 할당.
```

- 변수 값 증가
```c
counter = counter + 1; //counter에 1을 더한 값을 counter에 할당.
```

`counter += 1;` 과 `counter++;` 도 counter의 값을 1 증가 시키는 코드.

> :bulb: syntactic sugar :buld:
>
> 인간의 구문 사용을 일거나 표현하기 쉽게 하기 위해 언어를 **달콤하게** 표현한 것.

- 조건문
  `if`
 


## 4) 자료형, 형식 지정자, 연산자

## 5) 사용자 정의 함수, 중첩 루프

## 6) 하드웨어의 한계


---

https://sandbox.cs50.io/90e5d6b0-a5dc-4a13-b4d8-6407d3906a26
