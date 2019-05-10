import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AppService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString()
      }
    });
  }

  public async getTodos(): Promise<any[]> {
    var axiosResponse = await this.axiosClient.request<any[]>({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos'
    });

    return axiosResponse.data.map(x => {
      return {
        id: x.id,
        title: x.title,
        priority: this.generateRandomPriority(),
        tags: this.generateRandomTags()
      };
    });
  }

  private generateRandomPriority(): string {
    var priorities = ['Low', 'Medium', 'Urgent'];
    return priorities[Math.floor(Math.random() * priorities.length)];
  }

  private generateRandomTags(): string[] {
    var tags = ['Rock', 'Paper', 'Scissor'];
    return tags.slice(0, Math.floor(Math.random() * tags.length));
  }
}
