import { fetchAgents } from '@/apis/dummy';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AgentCard from '@/components/card/AgentCard';
import { AgentCardSkeleton } from '@/components/skeleton/AgentCardSkeleton';

const AgentsOverview: React.FC = () => {
  const { data: agents = [], isLoading } = useQuery({
    queryKey: ['agents'],
    queryFn: fetchAgents,
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
            Agents <span className="text-indigo-600">Overview</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <>
                <AgentCardSkeleton />
                <AgentCardSkeleton />
                <AgentCardSkeleton />
              </>
            ) : (
              agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsOverview;
