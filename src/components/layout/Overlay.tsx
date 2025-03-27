import React from 'react';

const Overlay: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
      onClick={onClick}
    />
  );
};

export default Overlay;
