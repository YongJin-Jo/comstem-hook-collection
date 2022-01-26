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


/**
 * useBeforeLeave 훅은 마우스 이벤트가 document에서 벗어 날때 함수를 호출할수 있게 해주는 커스텀 훅입니다.
 * @param onBefore 
 */
const useBeforeLeave = (onBefore: () => void) => {
  const handle = (event: MouseEvent) => {
    if (event.clientY <= 0) return onBefore();
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  });
};


/**
 * useFadeIn 훅은 opacity 과 transition를 쉽게 조작할 수 있게 만든 커스텀 훅입니다.
 * @param opacity 
 * @param duration
 * @param dely 
 * @returns { ref: element, style: { opacity: 0 } };
 */
const useFadeIn = (opacity: number, duration?: number, dely?: number) => {
  const element = useRef<HTMLHeadingElement>(null);
  console.log(element);

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${dely}s`;
      current.style.opacity = `${opacity}`;
      console.log(element.current);
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

/**
 * useNetWork 훅 navigator.onLine에 상태값에 따라 값을 반환하는 커스텀 훅입니다.
 * @param onChange 
 * @returns 
 */
const useNetWork = (onChange: (online: boolean) => void) => {
  const [status, setStatus] = useState<boolean>(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  return status;
};

/**
 *  
 * @returns state
 */
const useScroll = () => {
  const [state, setState] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  const eventHandler = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener('scroll', eventHandler);
    return () => window.removeEventListener(`scroll`, eventHandler);
  }, []);
  return state;
};
export { useTitle, useClick,useBeforeLeave,useFadeIn,useScroll };
