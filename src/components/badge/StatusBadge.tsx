import { Status, Statuses } from '@/types/agent';
import { Icon } from '@iconify/react';

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status === Statuses.INPROGRESS) {
    return (
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full animate-pulse">
        <Icon
          icon={'hugeicons:loading-02'}
          className="w-4 h-4 mr-1 animate-spin"
        />
        {Statuses.INPROGRESS}
      </span>
    );
  }
  if (status === Statuses.DONE) {
    return (
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
        <Icon icon={'mdi:success'} className="w-4 h-4 mr-1" />
        {Statuses.DONE}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">
      <Icon icon={'mingcute:warning-line'} className="w-4 h-4 mr-1" />
      {Statuses.FAILED}
    </span>
  );
};

export default StatusBadge;
