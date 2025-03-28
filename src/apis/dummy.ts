import { Statuses } from '@/constant/agents';
import { sampleActivities, sampleAgents } from '@/constant/dummy';
import { Activity } from '@/types/activity';
import { Agent } from '@/types/agent';
import { getRandomInt } from '@/utils/getRandomInt';

// Dummy API to simulate fetching activites
export const fetchActivities = async (): Promise<Activity[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomCount = getRandomInt(2, 5);

      const shuffledActivities = [...sampleActivities];
      for (let i = shuffledActivities.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledActivities[i], shuffledActivities[j]] = [
          shuffledActivities[j],
          shuffledActivities[i],
        ];
      }

      const randomActivities = shuffledActivities.slice(0, randomCount);
      resolve(randomActivities);
    }, 1000);
  });
};

// Dummy API to simulate fetching agents
export const fetchAgents = async (): Promise<Agent[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleAgents);
    }, 1000);
  });
};

// Dummy API to update an agent's status
export const updateAgentStatus = async (agent: Agent): Promise<Agent> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.6;
      resolve({
        ...agent,
        status: isSuccess ? Statuses.DONE : Statuses.FAILED,
        lastAction: isSuccess
          ? `Completed task successfully at ${new Date().toLocaleTimeString()}`
          : `Task failed at ${new Date().toLocaleTimeString()}`,
      });
    }, 1000);
  });
};
