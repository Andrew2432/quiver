import getConfig from "next/config";
import useSWR from "swr";

import fetcher from "../fetcher";

const {
  publicRuntimeConfig: { wp_api_url },
} = getConfig();

function usePostsSearch(
  page = 1,
  perPage = 10,
  query = "",
  options?: Record<string, unknown>
) {
  const { data, mutate, error } = useSWR(
    `${wp_api_url}/posts?_embed&search=${query}&page=${page}&per_page=${perPage}`,
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

export default usePostsSearch;
