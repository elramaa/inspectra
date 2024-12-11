import { useEffect } from "react";

function useTitlePage(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}

export { useTitlePage };
