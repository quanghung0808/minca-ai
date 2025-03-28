import { AgentNames, Statuses } from '@/constant/agents';

export type AgentName = (typeof AgentNames)[keyof typeof AgentNames];
export type Status = (typeof Statuses)[keyof typeof Statuses];

export interface Agent {
  id: number;
  name: AgentName;
  status: Status;
  lastAction: string;
}
