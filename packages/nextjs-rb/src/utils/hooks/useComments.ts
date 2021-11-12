import getConfig from 'next/config';
import useSWR from 'swr';

import fetcher from '../fetcher';

const {
  publicRuntimeConfig: { wp_api_url },
} = getConfig();

function useComments(id: string, page = 1, perPage = 10) {
  const { data, mutate, error } = useSWR(
    `${wp_api_url}/comments?post=${id}&page=${page}&per_page=${perPage}&order=asc`,
    fetcher,
    { refreshInterval: 30000 },
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    error,
    mutate,
  };
}

export default useComments;
