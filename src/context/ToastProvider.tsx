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
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {open && (
        <div className="fixed bottom-4 right-4 z-50">
          <div
            className={`${
              severityStyles[severity]
            } text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between min-w-[300px] max-w-sm
            ${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}`}
          >
            <span>{message}</span>
            <button
              onClick={handleCloseToast}
              className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            >
              ✕
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
