import getConfig from "next/config";
import useSWR from "swr";

import fetcher from "../fetcher";

const {
  publicRuntimeConfig: { wp_project_url },
} = getConfig();

function useProjects(page = 1, perPage = 9) {
  const { data, mutate, error } = useSWR(
    `${wp_project_url}/projects?page=${page}&per_page=${perPage}`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    error,
    mutate,
  };
}

export default useProjects;
