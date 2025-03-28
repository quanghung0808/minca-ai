import { Activity } from '@/types/activity';
import { AgentNames, Statuses } from './agents';
import { Agent } from '@/types/agent';

export const sampleActivities: Activity[] = [
  {
    id: 1,
    action: 'Assigned new claim for T. Johnson',
    agent: AgentNames.CLAIMS,
    time: 'Just now',
    status: Statuses.INPROGRESS,
  },
  {
    id: 2,
    action: 'Updated claim status for L. King',
    agent: AgentNames.CLAIMS,
    time: '5 minutes ago',
    status: Statuses.DONE,
  },
  {
    id: 3,
    action: 'Rejected claim for J. Walker',
    agent: AgentNames.CLAIMS,
    time: '10 minutes ago',
    status: Statuses.FAILED,
  },
  {
    id: 4,
    action: 'Created a new quote request for Acme Corp.',
    agent: AgentNames.QOUTE,
    time: '20 minutes ago',
    status: Statuses.INPROGRESS,
  },
  {
    id: 5,
    action: 'Processed a claim for H. Martin',
    agent: AgentNames.CLAIMS,
    time: '30 minutes ago',
    status: Statuses.DONE,
  },
  {
    id: 6,
    action: 'Request for recommendation sent to customer M. Garcia',
    agent: AgentNames.RECOMMENDATION,
    time: '45 minutes ago',
    status: Statuses.INPROGRESS,
  },
  {
    id: 7,
    action: 'Approved claim for W. Evans',
    agent: AgentNames.CLAIMS,
    time: '1 hour ago',
    status: Statuses.DONE,
  },
  {
    id: 8,
    action: 'Generated quote for customer E. Thomas',
    agent: AgentNames.QOUTE,
    time: '1 hour ago',
    status: Statuses.FAILED,
  },
  {
    id: 9,
    action: 'Request for recommendation sent to customer M. Ramsey',
    agent: AgentNames.RECOMMENDATION,
    time: '2 hours ago',
    status: Statuses.INPROGRESS,
  },
  {
    id: 10,
    action: 'Request for recommendation sent to customer K. Bryne',
    agent: AgentNames.RECOMMENDATION,
    time: '3 hours ago',
    status: Statuses.DONE,
  },
];
