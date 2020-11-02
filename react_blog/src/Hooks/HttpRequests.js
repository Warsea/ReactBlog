import { useEffect, useState } from 'react';
import Axios from 'axios';

export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
    });
    Axios.get(url).then((response) => {
      setRequest({
        loading: false,
        data: response.data,
      });
    });
  }, [url]);
  return request;
}
