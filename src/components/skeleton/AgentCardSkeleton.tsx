export const AgentCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 animate-pulse">
      <div className="py-4 px-6">
        {/* Icon and Status Badge */}
        <div className="flex justify-between">
          <div className="h-5 w-5 bg-gray-300 rounded"></div>
          <div className="h-5 w-16 bg-gray-300 rounded-full"></div>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center my-2">
          <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        </div>

        {/* Description */}
        <div className="mb-6 h-8 overflow-hidden">
          <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>

        {/* Button */}
        <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};
