import { Icon } from '@iconify/react';
import { Activity } from '@/types/activity';
import { Agents } from '@/types/agent';
import StatusBadge from '../badge/StatusBadge';

interface ActivityItemCardProps {
  activity: Activity;
}

const ActivityItemCard: React.FC<ActivityItemCardProps> = ({ activity }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 last:border-0">
      {/* Icon */}
      <Icon
        icon={
          activity.agent === Agents.QOUTE
            ? 'material-symbols:chat-bubble-outline'
            : activity.agent === Agents.CLAIMS
            ? 'material-symbols:description'
            : 'fluent:star-emphasis-24-regular'
        }
        className="w-9 h-9 text-indigo-600 mr-3 bg-indigo-100 rounded-full p-2"
      />
      {/* Activity Details */}
      <div className="w-[80%]">
        <p className="text-gray-800 font-medium">{activity.action}</p>
        <p className="text-gray-500 text-sm">{activity.agent}</p>
      </div>
      <div className="flex gap-1 justify-between w-[20%]">
        {/* Status Badge */}
        <StatusBadge status={activity.status} />
        <div className="ml-2 text-sm text-gray-500">{activity.time}</div>
      </div>
    </div>
  );
};

export default ActivityItemCard;
