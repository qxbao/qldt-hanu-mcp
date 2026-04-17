import {describe, test, expect, vi, beforeEach} from 'vitest';
import {AuthService} from './auth.service';
import {httpClient} from '../../client/http';

vi.mock('../../client/http', () => {
  return {
    httpClient: {
      get: vi.fn(),
      defaults: {
        headers: {},
      },
    },
  };
});

describe('AuthService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('genCode - can generate JWT', () => {
    const code = AuthService.genCode('2201040017', 'quanbaons');
    expect(code).toBeDefined();
    expect(typeof code).toBe('string');
  });

  test('login - can login success', async () => {
    const mockResponse = {
      status: 302,
      headers: {
        location:
          'https://qldt.hanu.edu.vn/?CurrUser=eyJJRFVzZXIiOi03ODI3MzMyMTM3OTE&gopage=',
      },
    };

    vi.mocked(httpClient.get).mockResolvedValueOnce(mockResponse);

    const result = await AuthService.login('2201040017', 'quanbaons');

    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(result).toBe('Login success');

    expect(httpClient.defaults.headers.Authorization).toBe(
      'Bearer eyJJRFVzZXIiOi03ODI3MzMyMTM3OTE',
    );
  });

  test('login - can login failed', async () => {
    const mockResponse = {
      status: 302,
      headers: {
        location: 'https://qldt.hanu.edu.vn/?CurrUser=null&error=1',
      },
    };

    vi.mocked(httpClient.get).mockResolvedValueOnce(mockResponse);

    await expect(AuthService.login('fail', 'fail')).rejects.toThrow(
      'Login failed',
    );
  });
});
