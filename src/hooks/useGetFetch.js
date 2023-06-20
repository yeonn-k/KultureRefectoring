import { useState, useEffect } from 'react';

const useGetFetch = url => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        return setData(data);
      });
  }, [url]);

  return [data];
};

export default useGetFetch;
