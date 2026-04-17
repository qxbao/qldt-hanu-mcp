import {httpClient} from '../../client/http';
import fs from 'fs';
import {ACCESS_TOKEN_CACHE_TTL, SESSION_FILE} from '../../const/auth';
import { LOGIN_API } from '../../const/api';

export class AuthService {
  private static saveSession(token: string) {
    const data = {
      token,
      updatedAt: Date.now(),
    };

    fs.writeFileSync(SESSION_FILE, JSON.stringify(data));
  }

  static loadPersistedSession() {
    if (fs.existsSync(SESSION_FILE)) {
      const data = JSON.parse(fs.readFileSync(SESSION_FILE, 'utf-8'));
      const isExpired = Date.now() - data.updatedAt > ACCESS_TOKEN_CACHE_TTL;
      if (!isExpired) {
        httpClient.defaults.headers.common['Authorization'] =
          `Bearer ${data.token}`;
        return true;
      }
    }
    return false;
  }

  static isAuthenticated(): boolean {
    return !!httpClient.defaults.headers.Authorization;
  }

  static genCode(username: string, password: string): string {
    const code = Buffer.from(
      JSON.stringify({
        username,
        password,
        uri: `${httpClient.defaults.baseURL}/#/home`,
      }),
      'utf-8',
    ).toString('base64');
    return code;
  }

  static async login(username: string, password: string): Promise<string> {
    const finUsername = username || process.env.QLDT_USERNAME;
    const finPassword = password || process.env.QLDT_PASSWORD;

    if (!finUsername || !finPassword) {
      throw new Error('Username or password not provided (both ENV and input)');
    }

    const response = await httpClient.get(LOGIN_API, {
      maxRedirects: 0,
      validateStatus: (status: number) => status >= 200 && status < 400,
      params: {
        code: this.genCode(finUsername, finPassword),
        gopage: null,
        mgr: 1,
      },
    });

    const responseRedirect = response.headers?.location;
    const parsedUrl = new URL(responseRedirect.replace('/#/', '/'));
    const responseRSP = parsedUrl.searchParams;
    const accessTokenRaw = responseRSP.get('CurrUser');
    const err =
      !accessTokenRaw || accessTokenRaw === 'null' || responseRSP.get('error');

    if (err) {
      throw new Error('Login failed');
    }

    const decodedUser = JSON.parse(
      Buffer.from(accessTokenRaw!, 'base64').toString('utf-8'),
    );

    httpClient.defaults.headers.Authorization = `Bearer ${decodedUser.access_token}`;
    this.saveSession(decodedUser.access_token);
    return 'Login success';
  }
}
