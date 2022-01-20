import React, { ChangeEvent, useState } from 'react';

/**
 * useInput 은 input 태그의 상태의 제어를 쉬게 해주는 함수입니다.
 *  @retuurn  {value,onChange}
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

export { useInput };
