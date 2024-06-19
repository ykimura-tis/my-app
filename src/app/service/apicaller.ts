import axios from 'axios';

export class ApiCaller {
  async callApi(endpoint: string) {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}