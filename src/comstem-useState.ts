import React, { ChangeEvent, useState } from 'react';

/**
 * useInput 은 input 태그의 상태의 제어를 쉬게 해주는 함수입니다.
 *  @param initialValue
 *  @param validator
 *  @returns {value,onChange}
 * */
const useInput = <callback>(
  initialValue: string | number,
  validator: callback
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    let willUdate = true;
    if (typeof validator === 'function') {
      willUdate = validator(value);
      console.log(willUdate);
    }
    if (willUdate) {
      const targetValue = value as any;
      setValue(targetValue);
    }
  };
  return { value, onChange };
};


/**
 * useTab은 click 이벤트에 떄라 상태 변화를 원하는 기능을 구현 할때 유용하게 쓰이는 커스텀 훅입니다.
 * @param initialTab 
 * @param allTabs 
 * @returns  {currentItem,changeItem}
 */
const useTab = <T,>(
  initialTab: number,
  allTabs: T[]
): { currentItem: T; changeItem: Dispatch<SetStateAction<number>> } => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};


export { useInput, useTab };
