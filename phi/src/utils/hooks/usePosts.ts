import getConfig from "next/config";
import useSWR from "swr";

import fetcher from "../fetcher";

const {
  publicRuntimeConfig: { wp_api_url },
} = getConfig();

function usePosts(page = 1, perPage = 10, options?: Record<string, unknown>) {
  const { data, mutate, error } = useSWR(
    `${wp_api_url}/posts?_embed&page=${page}&per_page=${perPage}`,
    fetcher,
    options
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    error,
    mutate,
  };
}

export default usePosts;
