import { TabItemType, TabType } from '../types/types';

// tab items array of TabItemType object
export const tabItems: TabItemType[] = [
  {
    id: 1,
    label: TabType.All,
    isActive: true
  },
  {
    id: 2,
    label: TabType.Pending,
    isActive: false
  },
  {
    id: 3,
    label: TabType.Done,
    isActive: false
  },
];