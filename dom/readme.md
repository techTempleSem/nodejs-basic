# DOM

웹페이지를 트리 구조로 표현애 html을 인색하게 해 줌

js로 조작해서 원하는 것을 만들고 없앨 수 있음

window.document에서 확인 가능

ex) 버튼을 누르거나 색을 변경할 수 있음

## 웹페이지 빌드 과정(Crritical Rendering Path)

1. html을 돔으로 만듬
2. css를 cssom(css object model)로 만듬
3. 이 둘을 브라우저가 결합을 함. render tree 생성
4. 표시되는 위치와 크기 계산(layout 단계)
5. 실제로 그림(paint)

3,4,5는 비용이 많이 든다. 여기를 최소화 해야 성능이 좋아짐

(react같은 부분은 가상의 돔을 만들어 비용 최소화)

## document 태그

-   forms: 폼 태그 전부 반환
-   ~.id: 해당 요소의 id
-   ~.classList: 해당 요소의 classList
-   ~.className: 클래스 이름만 나옴
-   ~.scripts: 스크립트 태그 반환. 크롬 익스텐션이나 내부적으로 사용하는 모든 script들 받아와짐
-   ~.getAttribute('~~'): 해당 속성의 값을 가져옴
-   ~.getElementById('~~'): id가 해당 값인 요소를 가져옴
-   ~.querySelector('~~'): 선택자로 가져옴
-   ~.style.~ = ~: style 수정
-   ~.getElementsByClassName('~~'): id가 해당 값인 요소 전부를 가져옴
-   ~.querySelector미ㅣ('~~'): 선택자로 전부 가져옴

## 선택자

-   #: id
-   .: class
-   :last-child: 마지막 요소
-   :nth-child(3): n번째 요소
-   :nth-child(odd): 홀수 요소
