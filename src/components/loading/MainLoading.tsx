import { Icons } from '@/constant/icons';
import { Icon } from '@iconify/react';

const MainLoading = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <span className="rounded-full animate-pulse">
        <Icon icon={Icons.Loading} className="w-10 h-10 animate-spin" />
      </span>
    </div>
  );
};

export default MainLoading;
