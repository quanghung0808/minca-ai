import { Icons } from '@/constant/icons';
import { Icon } from '@iconify/react';

const ButtonLoading = () => {
  return (
    <span className="rounded-full animate-pulse">
      <Icon icon={Icons.Loading} className="w-5 h-5 animate-spin" />
    </span>
  );
};

export default ButtonLoading;
