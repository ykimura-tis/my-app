import axios from 'axios';
import { ApiCaller } from './apicaller';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ApiCaller', () => {
  let apiCaller: ApiCaller;

  beforeEach(() => {
    apiCaller = new ApiCaller();
  });

  it('should return data when callApi is called', async () => {
    const mockData = { data: 'data' };
    mockedAxios.get.mockResolvedValue(mockData);

    const data = await apiCaller.callApi('http://example.com');

    expect(data).toBe("data");
    expect(mockedAxios.get).toHaveBeenCalledWith('http://example.com');
  });

  it('should throw error when callApi fails', async () => {
    const mockError = new Error('Network error');
    mockedAxios.get.mockRejectedValue(mockError);

    await expect(apiCaller.callApi('http://example.com')).rejects.toThrow('Network error');
    expect(mockedAxios.get).toHaveBeenCalledWith('http://example.com');
  });
});