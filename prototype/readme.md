# property

객체가 다른 객체로부터 메소드, 속성을 상속받는 것

다른 객체와 같이 써야하는 변수나 함수를 prototype에 넣어서 사용

다음과 같은 방식을 사용하면 함수로 객체를 만들 수 있다.

```
function Example(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
}
```

Object.create(proto) : proto를 prototype으로 가지는 객체를 생성한다.
