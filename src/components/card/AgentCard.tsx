import StatusBadge from '@/components/badge/StatusBadge';
import ButtonLoading from '@/components/loading/ButtonLoading';
import { AgentNames, Statuses } from '@/constant/agents';
import { Icons } from '@/constant/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Agent } from '@/types/agent';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useToast } from '@/context/ToastProvider';
import { updateAgentStatus } from '@/apis/dummy';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const updateAgentMutation = useMutation({
    mutationKey: ['update-agent'],
    mutationFn: updateAgentStatus,
    onMutate: async (updatedAgent: Agent) => {
      setLoading(true);
      await queryClient.cancelQueries({ queryKey: ['agents'] });

      const previousAgents = queryClient.getQueryData<Agent[]>(['agents']);
      queryClient.setQueryData(['agents'], (oldAgents: Agent[] = []) =>
        oldAgents.map((a) => (a.id === updatedAgent.id ? updatedAgent : a))
      );

      return { previousAgents };
    },
    onSuccess: (data: Agent) => {
      queryClient.setQueryData(['agents'], (oldAgents: Agent[] = []) =>
        oldAgents.map((a) => (a.id === data.id ? data : a))
      );

      showToast(
        data.status === Statuses.DONE
          ? `Agent "${data.name}" completed successfully.`
          : `Agent "${data.name}" failed. Check logs.`,
        data.status === Statuses.DONE ? 'success' : 'error'
      );
    },
    onError: (_error, _agent, context) => {
      if (context?.previousAgents) {
        queryClient.setQueryData(['agents'], context.previousAgents);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="py-4 px-6">
        <div className="flex justify-between">
          <Icon
            icon={
              agent.name === AgentNames.CLAIMS
                ? Icons.Claims
                : agent.name === AgentNames.QOUTE
                ? Icons.Quote
                : Icons.Recommendation
            }
            className="h-5 w-5 text-indigo-500"
          />
          <StatusBadge status={agent.status} />
        </div>
        <div className="flex justify-between items-center my-2">
          <h2 className="text-xl font-bold text-gray-800 truncate pr-4">
            {agent.name}
          </h2>
        </div>
        <div className="mb-6 h-8 overflow-hidden">
          <p className="text-sm text-gray-600 line-clamp-2">
            {agent.lastAction}
          </p>
        </div>
        <button
          onClick={() => updateAgentMutation.mutate(agent)}
          disabled={
            loading ||
            agent.status === Statuses.DONE ||
            agent.status === Statuses.FAILED
          }
          className="w-full flex items-center justify-center space-x-2 
            bg-indigo-600 text-white py-3 rounded-lg 
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            transition-all duration-300 ease-in-out
            disabled:opacity-50 disabled:cursor-not-allowed
            group"
        >
          <span className="font-semibold">
            {loading ? <ButtonLoading /> : 'Trigger Agent'}
          </span>
          <Icon
            icon={Icons.Activity}
            className="w-5 h-5 transition-transform group-hover:rotate-12"
          />
        </button>
      </div>
    </div>
  );
};

export default AgentCard;
