import { useState } from "react";

function useFetch(callback) {
  const [process, setProcess] = useState("loading");

  const fetching = async () => {
    setProcess("loading");
    try {
      await callback();
    } catch {
      setProcess("error");
    }
  };

  return [fetching, process, setProcess];
}

export default useFetch;
