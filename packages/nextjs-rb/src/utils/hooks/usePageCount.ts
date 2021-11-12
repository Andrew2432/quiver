import { NextRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  router: NextRouter;
}

function usePageCount({ router }: Props) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

export default usePageCount;
