# 객체 순회

for in 구문으로 객체 순회 가능

```
const obj = {
    key1: val1,
    key2: val2,
    key3: val3,
};

for(let key in obj){
    console.log(`${x}, ${user[x]}`);
}
```

# 배열 순회

forEach로 값, 인덱스, 배열을 받을 수 있음

map으로 순회하는 것도 가능

```
let arr = [val1, val2, val3];

arr.forEach(function (val, index, array){})
arr.map(function (val){})
```
