import {describe, test, expect, vi, beforeEach} from 'vitest';
import {AuthService} from './auth.service';
import {httpClient} from '../../client/http';
import fs from 'fs';

vi.mock('../../client/http', () => {
  return {
    httpClient: {
      get: vi.fn(),
      defaults: {
        headers: {common: {}},
      },
    },
  };
});

vi.mock('fs');

describe('AuthService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(fs.existsSync).mockReturnValue(false);
    vi.mocked(fs.writeFileSync).mockImplementation(() => {});
  });

  test('genCode - can generate JWT', () => {
    const code = AuthService.genCode('2201040017', 'quanbaons');
    expect(code).toBeDefined();
    expect(typeof code).toBe('string');
  });

  test('login - can login success', async () => {
    // CurrUser = base64(JSON.stringify({ access_token: 'fake-token-123' }))
    const fakeToken = 'eyJhY2Nlc3NfdG9rZW4iOiJmYWtlLXRva2VuLTEyMyJ9';
    const mockResponse = {
      status: 302,
      headers: {
        location: `https://qldt.hanu.edu.vn/?CurrUser=${fakeToken}&gopage=`,
      },
    };

    vi.mocked(httpClient.get).mockResolvedValueOnce(mockResponse);

    const result = await AuthService.login('2201040017', 'quanbaons');

    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(result).toBe('Login success');

    expect(httpClient.defaults.headers.common['Authorization']).toBe(
      'Bearer fake-token-123',
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
