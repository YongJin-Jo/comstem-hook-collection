import { useState, useEffect, useRef } from 'react';
import { MutableRefObject, Dispatch, SetStateAction } from 'react';
/**
 * useTitle DOM의 타이틀의 상태관리를 쉽게 해주는 커스텀 훅 입니다.
 * @param initalTitle
 * @returns {setTitle}
 */
const useTitle = (initalTitle: string): Dispatch<SetStateAction<string>> => {
  const [title, setTitle] = useState<string>(initalTitle);
  const updateTitle = () => {
    const htmlTItle = document.querySelector('title') as HTMLTitleElement;
    htmlTItle.textContent = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

/**
 * useClick은  tag안 내장 객체에 click 이벤트가 없는 태그에 click 이벤트를 부여합니다.
 * @param onClick
 * @returns {element}
 */
const useClick = (onClick: () => void) => {
  const element = useRef<HTMLInputElement>();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element as MutableRefObject<HTMLHeadingElement>;
};

export { useTitle, useClick };
