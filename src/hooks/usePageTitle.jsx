import { useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}

export { usePageTitle };
