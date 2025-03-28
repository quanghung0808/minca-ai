import { useEffect, useState } from 'react';
import { fetchActivities } from '@/apis/dummy';
import { Activity } from '@/types/activity';
import CustomButton from '@/components/button/CustomButton';
import ActivityItemCard from '@/components/card/ActivityItemCard';
import Pagination from '@/components/pagination/Pagination';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/context/ToastProvider';
import MainLoading from '@/components/loading/MainLoading';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activities, setActivities] = useState<Activity[]>([]);
  const { showToast } = useToast();
  const itemsPerPage = 10;

  const getActivites = useMutation({
    mutationKey: ['fetch-activites'],
    mutationFn: () => fetchActivities(),
    onSuccess: (data) => {
      setActivities((prev) => [...data, ...prev]);
      showToast(`There are ${data.length} new activities`, 'info');
    },
  });
  const indexOfLastActivity = currentPage * itemsPerPage;
  const indexOfFirstActivity = indexOfLastActivity - itemsPerPage;
  const currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  useEffect(() => {
    getActivites.mutate();

    const interval = setInterval(() => {
      if (!getActivites.isPending) {
        getActivites.mutate();
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <CustomButton
          title="Refresh"
          icon="ci:arrows-reload-01"
          onClick={() => getActivites.mutate()}
        />
      </div>
      <p className="text-gray-600 mb-4">
        Live activity feed from your AI agents
      </p>

      <div className="items-center shadow-sm bg-white rounded-2xl">
        {getActivites.isPending && <MainLoading />}
        {currentActivities.map((activity, index) => (
          <ActivityItemCard key={index} activity={activity} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </>
  );
};

export default Dashboard;
