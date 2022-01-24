


/**
 * useConfirm함수는 confirm ture, false 값에 따라 
 * @param message 
 * @param callback 
 * @param rejection 
 * @returns comfirmActiom
 */

const useConfirm = (
    message: string,
    callback: () => void,
    rejection: () => void
  ) => {
    const confirmActiom = () => {
      if (confirm(message)) {
        return callback();
      } else {
        return rejection();
      }
    };
    return confirmActiom;
  };

  export{
    useConfirm
  }