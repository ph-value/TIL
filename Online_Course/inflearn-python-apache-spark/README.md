# 실리콘밸리 엔지니어에게 배우는 파이썬 아파치 스파크

## 아파치 스파크 RDD의 기본적인 특징과 예제

### RDD를 이용하여 Word Count 해보기

```python
import pyspark

test_file = "file:///home/jovyan/work/sample/word.txt"
sc = pyspark.SparkContext.getOrCreate();

text_file = sc.textFile(test_file)

counts = text_file.flatMap(lambda line: line.split(" ")) \
             .map(lambda word: (word, 1)) \
             .reduceByKey(lambda a, b: a + b)

print(counts.collect())
```
- 어떠한 글이 담긴 텍스트파일이 있을 경우, 텍스트파일 로딩.
- pyspark 라이브러리를 사용하여 SparkContext 객체 생성.
- [`textFile()`](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.SparkContext.textFile.html?highlight=textfile) : 지정된 파일의 각 죽을 RDD의 각 요소로 변환.
- 각 줄을 읽고 띄어쓰기로 구분하여 나구어 flatMap 생성.
- (단어, 1) 형태로 map 생성.
- [`reduceByKey()`](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.RDD.reduceByKey.html) : map의 key 별로  value를 머지.
- -> 따라서 해당 단어의 포함 횟수 카운트 가능.

> 다른 예제: (이름 점수)\n 형식의 텍스트 파일에서 학생들이 어느 점수를 많이 얻었는지 산출하는 것.
> ```
> 90: 4
> 70: 2
> 80: 1
> 100: 1
> ```

#### 활용 방법
- 예제에서는 작은 파일을 읽었지만, 어마어마하게 큰 파일을 읽어서 추출하고 유의미한 통계적인 숫자를 산출 할 때에도 이와 같은 방식으로 사용 된다고 함.
- 워드 카운트 예시 본 기억:
  - [(구버전)Google Books 견고한 데이터 엔지니어링](https://books.google.co.kr/books?id=cOvLEAAAQBAJ&newbks=1&newbks_redir=0&dq=%EA%B2%AC%EA%B3%A0%ED%95%9C+%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81&hl=ko&source=gbs_navlinks_s) 에서 "자주 나오는 단어 및 구문" 섹션.
    - 다른 방식으로 구현했을 수도 있지만 방향성이 비슷할 것 같다.
- (✨내 아이디어)
  - 정류장의 이용자 하차에 대한 시계열 데이터가 있을 때, 기간 별 하차 빈도수 계산
  - (TBU: 추후 생각나면 업데이트 예정^^*)

### Key Value Pair, Average
- lecture4_example 참고 / house_price 평균 구하기

### Filter, Min/Max
- ❕ RDD에서 헤더를 제거하려면 수동으로 처리해야한다.
```python
def get_data(line, header):
    if line != header:
        col = line.split(',')
        city = col[6].strip("\"")
        avg_temp_fahr = col[4]
        yield (city, avg_temp_fahr)

lines = sc.textFile(test_file)

# get header string
header = lines.first()

parsed_line = lines.flatMap(lambda line: get_data(line, header))
# get_data에서 헤더를 거르면서 필요한 컬럼만 가져올 수 있게 작성하여 사용하자.
```

- [`filter`](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.RDD.filter.html?highlight=filter#pyspark.RDD.filter) 사용하기
```python
# filter NA values
filtered_line = parsed_line.filter(lambda x: "NA" not in x[1])
```

### Map vs Flatmap
(TBU)