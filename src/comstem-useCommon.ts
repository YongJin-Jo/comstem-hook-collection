


/**
 * useConfirm함수는 confirm ture, false 값에 따라 callback 함수가 호출되는 함수입니다.
 * @param message 
 * @param callback 
 * @param rejection 
 * @returns comfirmActiom
 */

import { checkTypeFunction } from './utill';

const useConfirm = (
    message: string,
    onComfirm: () => void,
    onCancel: () => void
  ) => {
    const confirmActiom = () => {
      
      const checkConfirm:boolean= checkTypeFunction(onComfirm)
      const checkCancel :boolean=  checkTypeFunction(onCancel)
      if (!checkConfirm || !checkCancel) return;
      

      if (confirm(message)) {
        return onComfirm();
      } else {
        return onCancel();
      }
    };
    return confirmActiom;
  };

  /**
   * usePreventLeve함수는 창을 닫을 때 confirm을 추가해주는 이벤트를 호출 하는 함수입니다.
   * @returns {enablPrevent,disablePrevent,}
   */
  const usePreventLeave = () => {
    const listener = (event: any) => {
      event.preventDefault();
      event.returnValue = '';
    };
    const enablPrevent = () => window.addEventListener('beforeunload', listener);
    const disablePrevent = () =>
      window.removeEventListener('beforeunload', listener);
    return {
      enablPrevent,
      disablePrevent,
    };
  };


  export{
    useConfirm,
    usePreventLeave
  }