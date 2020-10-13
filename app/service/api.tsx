import axios from 'axios';
import {RootObject} from '../types/types';
import {GRAPHQL_API_BASE, WIKIPEDIA_API_BASE} from '../consts';

export const NetworkService = {
  sendPostRequest(query: string | null) {
    return axios
      .post<RootObject>(GRAPHQL_API_BASE, {
        query,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  SendGetRequest(query: string) {
    return axios
      .get<RootObject>(WIKIPEDIA_API_BASE.concat(query))
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default NetworkService;
