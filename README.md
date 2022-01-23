# comstem hook을 정리한 라이브러리입니다

## useInput
```tsx
// 선언 방법
const input = useInput<T>("Yongin-Jo",callback);
```
-   `useInput`은 `state`와 `onchange`를 반환하는 함수입니다. 
-   첫번째 인자는 `stat`e에 들어갈 초기값을 넣어줍니다. 타입은 `string` 또는 `number`입니다.
    두번재 인자는 `callback` 함수를 넣어줍니다. 제네릭 타입을 정의 해주셔야 합니다.

## useTab
```tsx
interface contentsDefine{
    name:string;
    age:number
}

const contents:contentsDefine[] = [
    {name:'Yongin-Jo',age:25,},
    {name:'minshu-Kim',age:27,}
]
// 선언 방법
const {currentItem,changeItem} = useTeb<T>(1,contents);
```
- `useTab`은 `click` 이벤트에 떄라 상태 변화를 원하는 기능을 구현 할때 유용하게 쓰이는 커스텀 훅입니다.
- `useTab`은 `currentIndex`(현재 인덱스 값)과 `changeItem`(상태 변경값 훅) 을 반환 합니다. 첫번째 인자에는 `nuber` 타입 두번째 인자는 제네릭을 받는 배열을 받습니다.

## useTitle

```tsx
// 선언 방법
const setTitle = useTitle(initalTitle);
```
- `useTitle`은 타이틀 `tag` 의 상태관리를 쉽게 해주는 커스텀 훅 입니다.
- `useTitle`은 `initalTitle`을 받고 `string` 타입을 갖습니다.
