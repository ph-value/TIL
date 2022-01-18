

python에서 현재 사용중인 크롬의 크롬드라이버 사용하기
---
> 원인 : 버전에 맞는 드라이버를 사용하고, 경로를 올바르게 지정했으나 버전에 맞지 않는다는 오류 내용 때문에 다른 방법 사용.


1. webdriver-manager 설치
```
pip install webdriver-manager
```
2. 코드 작성
```
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
```

webdriver-manager의 다른 브라우저 사용은 https://pypi.org/project/webdriver-manager/ 참고

