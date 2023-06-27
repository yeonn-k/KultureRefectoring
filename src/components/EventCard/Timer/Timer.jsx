import React, { useEffect, useState } from 'react';

const Timer = ({ auction_end_date, event_id }) => {
  const [remainTime, setRemainTime] = useState('');

  useEffect(() => {
    const diffDay = () => {
      const current = new Date();
      const auction = new Date(auction_end_date);

      const diff = auction - current;

      const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
      const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const diffMin = Math.floor((diff / (1000 * 60)) % 60);
      const diffSec = Math.floor((diff / 1000) % 60);

      const result = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초 남음`;
      setRemainTime(result);
    };

    diffDay();
    const intervalTimer = setInterval(diffDay, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [auction_end_date]);

  return <span>{remainTime}</span>;
};

export default Timer;
