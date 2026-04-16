import { httpClient } from "../../client/http";
import type { StudentAPIObject } from "./student.d";

export class StudentService {
    static async getStudentInfo(): Promise<StudentAPIObject> {
        const response = await httpClient.post("/api/dkmh/w-locsinhvieninfo", {
            params: {}
        });
        return response.data;
    }
}