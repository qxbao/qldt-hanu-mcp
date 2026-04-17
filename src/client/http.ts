import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import fakeUa from 'fake-useragent';

const randomUA = fakeUa();
const instance = axios.create({
  baseURL: 'https://qldt.hanu.edu.vn',
  withCredentials: true,
  headers: {
    'User-Agent': randomUA,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const httpClient = wrapper(instance as any);
