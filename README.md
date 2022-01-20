# comstem hook을 정리한 라이브러리입니다.

## useInput
```tsx
// 선언 방법
const input = useInput<T>("Yongin-Jo",callback);
```
useInput은 state와 onchange를 반환하는 함수입니다. 
첫번째 인자는 state에 들어갈 초기값을 넣어줍니다. 타입은 string 또는 number입니다.
두번재 인자는 callback 함수를 넣어줍니다. 제네릭 타입을 정의 해주셔야 합니다.
