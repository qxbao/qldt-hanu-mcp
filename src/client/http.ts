import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import fakeUa from "fake-useragent";
import { CookieJar } from "tough-cookie";

const jar = new CookieJar();

const randomUA = fakeUa()
const instance = axios.create({
    baseURL: "https://qldt.hanu.edu.vn",
    withCredentials: true,
    headers: {
        "User-Agent": randomUA
    }
});


export const httpClient = wrapper(instance as any);