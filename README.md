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

## useClick
```tsx
const sayHi = () => console.log('say-hi')
const element = useClick(sayHi)
```
-  `useClick`은  `tag`안 내장 객체에 `click` 이벤트가 없는 태그에 `click` 이벤트를 부여합니다.
-  인자는 함수를 받아 `useRef()`을 반환 합니다.

## useConfirm
```tsx
const createConfirm = useConfirm(mag,callback,rejection)
```
-  useConfirm함수는 confirm을 호출했을 때 값이 ture 면 callback 함수를 fales 면 rejection 함수를 호출하는 함수 입니다.
-  첫 인자는 string 타입을 받습니다.
-  2번째 3번째 인자는 void 타입을 반환 받습니다.

## usePreventLeave
```tsx
const {enablPrevent,disablePrevent} = usePreventLeave();
```
- usePreventLeve함수는 창을 닫을 때 confirm을 추가해주는 이벤트를 호출 하는 함수입니다.

## useBeforeLeave
```tsx
const createBeforeLeave = useBeforeLeave(onBefore)
```
-  useBeforeLeave 훅은 마우스 이벤트가 document에서 벗어 날때 함수를 호출할 수 있게 해주는 커스텀 훅입니다.
-  첫번 째 인자 onBefore은 콜백로 정의 됩니다.

## useFadeIn
```tsx
const tagName = useFadeIn(opacity,duration,dely)
```
- useFadeIn 훅은 opacity 과 transition를 쉽게 조작할 수 있게 만든 커스텀 훅입니다.
- 3인자 전부 number타입을 받습니다.

## useNetWork
```tsx
const status = useNetWork(onChange)
```
- useNetWork 훅 navigator.onLine에 상태값에 따라 값을 반환하는 커스텀 훅입니다.
-  onChange의 타입 정의는 boolen 타입이 인자로 들어갑니다.

## useScroll
```tsx
const {x,y} = useScroll()
```
- useScroll은 현재 스크롤 x,y값을 구해주는 커스텀 훅입니다.
