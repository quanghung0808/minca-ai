import { Icons } from '@/constant/icons';
import { Icon } from '@iconify/react';
import React, { createContext, useState, useContext } from 'react';

interface ToastContextProps {
  showToast: (
    message: string,
    severity: 'success' | 'error' | 'warning' | 'info'
  ) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<
    'success' | 'error' | 'warning' | 'info'
  >('success');
  const [isFadingOut, setIsFadingOut] = useState(false);

  const showToast = (
    message: string,
    severity: 'success' | 'error' | 'warning' | 'info'
  ) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
    setIsFadingOut(false);

    setTimeout(() => {
      setIsFadingOut(true);
    }, 3700);

    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const handleCloseToast = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const severityStyles = {
    success: {
      background: 'bg-green-500',
      icon: <Icon icon={Icons.Success} className="w-6 h-6 mr-3" />,
    },
    error: {
      background: 'bg-red-500',
      icon: <Icon icon={Icons.Error} className="w-6 h-6 mr-3" />,
    },
    warning: {
      background: 'bg-yellow-500',
      icon: <Icon icon={Icons.Warning} className="w-6 h-6 mr-3" />,
    },
    info: {
      background: 'bg-indigo-500',
      icon: <Icon icon={Icons.Info} className="w-6 h-6 mr-3" />,
    },
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {open && (
        <div className="fixed bottom-4 right-4 z-50">
          <div
            className={`${
              severityStyles[severity].background
            } text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between min-w-[300px] max-w-sm
            ${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}
            transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center">
              {severityStyles[severity].icon}
              <span>{message}</span>
            </div>
            <button
              onClick={handleCloseToast}
              className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            >
              <Icon icon={Icons.Cancel} className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
