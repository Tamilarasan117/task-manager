import { useEffect } from 'react';
import { CustomToastProps, ToastColors, ToastType } from '../types/types';

const CustomToast = ({ message, type = ToastType.Info, onClose }: CustomToastProps) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, [onClose]);

  return (
    <div className={`fixed top-5 right-[45%] z-50 text-white !px-4 !py-2 rounded shadow-lg ${ ToastColors[type] }`}>
      { message }
    </div>
  );
};

export default CustomToast;
