import { Dispatch, SetStateAction, useState, useEffect } from 'react';

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

export { useTitle };
