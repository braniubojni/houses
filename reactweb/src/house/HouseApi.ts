import { useQuery } from 'react-query';
import AxiosService from '../apiService/AxiosService';
import { Observable } from 'rxjs';
import { House } from './types/house';
import { AxiosError } from 'axios';

class houseApi extends AxiosService {
  fetchData() {
    return new Observable((subscriber) => {
      const controller = new AbortController();
      const { signal } = controller;
      this.get('/houses', { signal })
        .then((result) => {
          subscriber.next(result);
          subscriber.complete();
        })
        .catch((err) => subscriber.error(err));

      return () => controller.abort();
    });
  }
}
const HouseApi = new houseApi();

const useFetchHouses = () => {
  return useQuery<House[], AxiosError>('houses', () => HouseApi.get('/houses'));
};

export { HouseApi, useFetchHouses };
