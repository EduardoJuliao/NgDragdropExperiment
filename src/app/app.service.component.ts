import { Injectable } from '@angular/core';
import axios , { AxiosInstance } from 'axios';

@Injectable()
export class AppService {
  private axiosClient: AxiosInstance;

  constructor() {
   this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
          "X-Initialized-At": Date.now().toString()
      }
  });
  }

  public async getTodos(): Promise<any[]> {
    var axiosResponse = await this.axiosClient.request<any[]>({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
    });

    return axiosResponse.data;
  }
}
