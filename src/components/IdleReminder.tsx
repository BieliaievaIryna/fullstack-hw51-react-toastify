import React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { toast } from 'react-toastify';

const IdleReminder: React.FC = () => {
  useIdleTimer({
    timeout: 1000 * 60, 
    events: ['mousemove','keydown'],
    onIdle: () => toast.info('Ви довго не додавали завдання!'),
    throttle: 500,
  });

  return null;
};

export default IdleReminder;
