import { Activity } from '@/types/activity';
import { Agents, Statuses } from '@/types/agent';

export const sampleActivities: Activity[] = [
  {
    action: 'Assigned new claim for T. Johnson',
    agent: Agents.CLAIMS,
    time: 'Just now',
    status: Statuses.INPROGRESS,
  },
  {
    action: 'Updated claim status for L. King',
    agent: Agents.CLAIMS,
    time: '5 minutes ago',
    status: Statuses.DONE,
  },
  {
    action: 'Rejected claim for J. Walker',
    agent: Agents.CLAIMS,
    time: '10 minutes ago',
    status: Statuses.FAILED,
  },
  {
    action: 'Created a new quote request for Acme Corp.',
    agent: Agents.QOUTE,
    time: '20 minutes ago',
    status: Statuses.INPROGRESS,
  },
  {
    action: 'Processed a claim for H. Martin',
    agent: Agents.CLAIMS,
    time: '30 minutes ago',
    status: Statuses.DONE,
  },
  {
    action: 'Request for recommendation sent to customer M. Garcia',
    agent: Agents.RECOMMENDATION,
    time: '45 minutes ago',
    status: Statuses.INPROGRESS,
  },
  {
    action: 'Approved claim for W. Evans',
    agent: Agents.CLAIMS,
    time: '1 hour ago',
    status: Statuses.DONE,
  },
  {
    action: 'Generated quote for customer E. Thomas',
    agent: Agents.QOUTE,
    time: '1 hour ago',
    status: Statuses.FAILED,
  },
  {
    action: 'Request for recommendation sent to customer M. Ramsey',
    agent: Agents.RECOMMENDATION,
    time: '2 hours ago',
    status: Statuses.INPROGRESS,
  },
  {
    action: 'Request for recommendation sent to customer K. Bryne',
    agent: Agents.RECOMMENDATION,
    time: '3 hours ago',
    status: Statuses.DONE,
  },
];
