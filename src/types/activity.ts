import { Agent, Status } from './agent';

export interface Activity {
  action: string;
  agent: Agent;
  time: string;
  status: Status;
}
