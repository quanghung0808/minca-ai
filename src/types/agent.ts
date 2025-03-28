export const Agents = {
  CLAIMS: 'Claims Agent',
  QOUTE: 'Quote Request Agent',
  RECOMMENDATION: 'Recommendation Agent',
} as const;

export const Statuses = {
  DONE: 'Done',
  INPROGRESS: 'In Progress',
  FAILED: 'Failed',
} as const;

export type Agent = (typeof Agents)[keyof typeof Agents];
export type Status = (typeof Statuses)[keyof typeof Statuses];
