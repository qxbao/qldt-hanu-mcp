import path from 'path';

export const ACCESS_TOKEN_CACHE_TTL = 3600000; // unit = ms
export const JWT_SECRET_KEY =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export const SESSION_FILE = path.join(process.cwd(), '.session.json');
