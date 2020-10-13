import {useState} from 'react';
import {RootObject} from '../../types/types';

export default function useFetch<T, E>() {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<E>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generalFetch = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetch: (query: string) => Promise<any>,
    query: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selector: (param: RootObject, state?: T) => Promise<T>,
    addResponseToState?: boolean,
  ) => {
    if (isLoading === false) {
      setIsLoading(true);
      fetch(query)
        .then((res) => {
          if (response && addResponseToState === true) {
            selector(res, response).then((res) => {
              setResponse(res);
              setIsLoading(false);
            });
          } else {
            selector(res).then((res) => {
              setResponse(res);
              setIsLoading(false);
            });
          }
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  };

  return {response, error, isLoading, generalFetch};
}
