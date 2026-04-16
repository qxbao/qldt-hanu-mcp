import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { StudentService } from "./student.service";

export const registerStudentTools = (server: McpServer) => {
    server.registerTool("get_student_info",
        {
            title: "Get Student Info",
            description: "Get student information. MUST BE LOGGED IN FIRST",
            inputSchema: z.object({})
        },
        async () => {
            try {
                const studentInfo = await StudentService.getStudentInfo();
                return {
                    content: [{
                        type: "text",
                        text: `This is the student object, field names and content are in Vietnamese:\n${JSON.stringify(studentInfo, null, 2)}`
                    }]
                };
            } catch (error: any) {
                return {
                    content: [{
                        type: "text",
                        text: `Get student info failed with Exception: ${error.message}`
                    }],
                    isError: true
                };
            }
        }
    )
};
