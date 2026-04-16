import { httpClient } from "../../client/http";

export class AuthService {
    static JWTSECRET: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    static isAuthenticated(): boolean {
        return !!httpClient.defaults.headers.Authorization;
    }

    static genCode(username: string, password: string): string {
        const code = Buffer.from(JSON.stringify({
            username,
            password,
            uri: `${httpClient.defaults.baseURL}/#/home`
        }), "utf-8").toString("base64");
        return code;
    }

    static async login(username: string, password: string): Promise<string> {
        const response = await httpClient.get("api/pn-signin", {
            maxRedirects: 0,
            validateStatus: (status: number) => status >= 200 && status < 400,
            params: {
                code: this.genCode(username, password),
                gopage: null,
                mgr: 1
            }
        });
        const responseRedirect = response.headers?.location;
        const parsedUrl = new URL(responseRedirect.replace('/#/', '/'));
        const responseRSP = parsedUrl.searchParams;
        const accessTokenRaw = responseRSP.get("CurrUser");
        const err = !accessTokenRaw || accessTokenRaw === "null" || responseRSP.get("error");

        if (err) {
            throw new Error("Login failed");
        }

        const decodedUser = JSON.parse(Buffer.from(accessTokenRaw!, "base64").toString("utf-8"));
        
        httpClient.defaults.headers.Authorization = `Bearer ${decodedUser.access_token}`;

        return "Login success";
    }
}