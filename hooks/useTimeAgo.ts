import { useEffect, useState } from 'react';

const DATE_UNITS: any = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

export const getDateDiffs = (timestamp: number) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for(const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'seconds') {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp: number) {
  const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeAgo(newTimeAgo);
    }, 10000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const rtf = new Intl.RelativeTimeFormat('en', {
    style: 'short' 
  });

  const { value, unit }: any = timeAgo;

  return rtf.format(value, unit);
}
