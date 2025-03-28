import { Icon } from '@iconify/react';
import { Activity } from '@/types/activity';
import StatusBadge from '../badge/StatusBadge';
import { Icons } from '@/constant/icons';
import { AgentNames } from '@/constant/agents';

interface ActivityItemCardProps {
  activity: Activity;
}
const ActivityItemCard: React.FC<ActivityItemCardProps> = ({ activity }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 border-b border-gray-200 last:border-0 gap-3">
      {/* Icon */}
      <Icon
        icon={
          activity.agent === AgentNames.QOUTE
            ? Icons.Quote
            : activity.agent === AgentNames.CLAIMS
            ? Icons.Claims
            : Icons.Recommendation
        }
        className="w-8 h-8 sm:w-9 sm:h-9 text-indigo-600 bg-indigo-100 rounded-full p-2"
      />

      {/* Activity Details */}
      <div className="flex-[2] md:flex-[4]">
        <p className="text-gray-800 font-medium text-sm sm:text-base">
          {activity.action}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">{activity.agent}</p>
      </div>

      {/* Status & Time */}
      <div className="flex flex-1 sm:flex-[1] items-center justify-between w-full sm:w-auto gap-2">
        <StatusBadge status={activity.status} />
        <div className="text-xs sm:text-sm text-gray-500">{activity.time}</div>
      </div>
    </div>
  );
};

export default ActivityItemCard;
