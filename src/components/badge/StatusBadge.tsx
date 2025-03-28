import { Statuses } from '@/constant/agents';
import { Icons } from '@/constant/icons';
import { Status } from '@/types/agent';
import { Icon } from '@iconify/react';

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status === Statuses.INPROGRESS) {
    return (
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full animate-pulse">
        <Icon icon={Icons.InProgress} className="w-4 h-4 mr-1 animate-spin" />
        {Statuses.INPROGRESS}
      </span>
    );
  }
  if (status === Statuses.DONE) {
    return (
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
        <Icon icon={Icons.Success} className="w-4 h-4 mr-1" />
        {Statuses.DONE}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">
      <Icon icon={Icons.Failed} className="w-4 h-4 mr-1" />
      {Statuses.FAILED}
    </span>
  );
};

export default StatusBadge;
