# class

es6에서부터 class를 사용할 수 있다.

메소드는 자동으로 prototype으로 들어가진다.

## static

함수 자체에 메소드나 변수를 넣는다. 콘솔로 찍었을 때 생성자 안에 들어있는 것을 확인할 수 있다.

${클래스 명}.${static 메소드 이름}으로 사용한다.

객체들과 독립적으로 쓰이는 메소드를 만들 때 사용

## 상속

extends로 상속받음. 이때 부모 클래스는 prototype의 prototype에 들어가 있음

super()로 부모 생성자 호출

자식 객체 -> 자식 클래스 -> 부모 클래스 -> global prototype 순으로 prototype이 만들어 진다.
