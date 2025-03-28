import Dashboard from '@/pages/Dashboard';
import AgentsOverview from '@/pages/AgentsOverview';
import ClaimsAgent from '@/pages/ClaimsAgent';
import QuoteRequestsAgent from '@/pages/QuoteRequestsAgent';
import RecommendationAgent from '@/pages/RecommendationAgent';
import Settings from '@/pages/Settings';
import { Route } from '@/types/common';

export const routes: Route[] = [
  {
    path: '/dashboard',
    component: <Dashboard />,
    name: 'Dashboard',
    icon: 'material-symbols:dashboard-outline',
  },
  {
    path: '/agents-overview',
    component: <AgentsOverview />,
    name: 'Agents Overview',
    icon: 'material-symbols:tune',
  },
  {
    path: '/claims-agent',
    component: <ClaimsAgent />,
    name: 'Claims Agent',
    icon: 'material-symbols:description',
  },
  {
    path: '/quote-requests-agent',
    component: <QuoteRequestsAgent />,
    name: 'Quote Requests Agent',
    icon: 'material-symbols:chat-bubble-outline',
  },
  {
    path: '/recommendation-agent',
    component: <RecommendationAgent />,
    name: 'Recommendation Agent',
    icon: 'fluent:star-emphasis-24-regular',
  },
  {
    path: '/settings',
    component: <Settings />,
    name: 'Settings',
    icon: 'material-symbols:settings',
  },
];
