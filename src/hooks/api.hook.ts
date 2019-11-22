import { ThunkCreator } from "easy-peasy";
import { useCallback } from "react";

export const useFetch = (fetch: ThunkCreator<void, any>): (() => void) => {
  const fetchCallback = useCallback(() => {
    fetch();
  }, [fetch]);

  return fetchCallback;
};

export const useFetchById = (
  fetchById: ThunkCreator<string, any>
): ((id: string) => void) => {
  const fetchCallback = useCallback(
    id => {
      fetchById(id);
    },
    [fetchById]
  );

  return fetchCallback;
};
