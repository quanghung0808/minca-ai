import { AgentName, Status } from './agent';

export interface Activity {
  id: number;
  action: string;
  agent: AgentName;
  time: string;
  status: Status;
}
