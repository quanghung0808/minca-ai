export const ActivityItemCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 border-b border-gray-200 last:border-0 gap-3 animate-pulse">
      {/* Icon Skeleton */}
      <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-300 rounded-full"></div>

      {/* Activity Details Skeleton */}
      <div className="flex-[2] md:flex-[4] space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Status & Time Skeleton */}
      <div className="flex flex-1 sm:flex-[1] items-center justify-between w-full sm:w-auto gap-2">
        <div className="h-5 bg-gray-300 rounded-full w-16"></div>
        <div className="h-3 bg-gray-300 rounded w-20"></div>
      </div>
    </div>
  );
};
