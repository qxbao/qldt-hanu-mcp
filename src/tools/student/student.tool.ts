import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {z} from 'zod';
import {StudentService} from './student.service';

export const registerStudentTools = (server: McpServer) => {
  server.registerTool(
    'get_student_info',
    {
      title: 'Get Student Info',
      description: 'Get student information. MUST BE LOGGED IN FIRST',
      inputSchema: z.object({}),
    },
    async () => {
      try {
        const studentInfo = await StudentService.getStudentInfo();
        return {
          content: [
            {
              type: 'text',
              text: `This is the student object, field names and content are in Vietnamese:\n${JSON.stringify(studentInfo, null, 2)}`,
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Get student info failed with Exception: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'get_student_schedule',
    {
      title: 'Get Student Schedule',
      description: 'Get student schedule. MUST BE LOGGED IN FIRST',
      inputSchema: z.object({
        year: z
          .string()
          .describe(
            'Start year of the academic year. For instance, if you are in 2023-2024 (academic year), the start year is 2023',
          ),
        semester: z.string().describe('Semester of the schedule (e.g. 1, 2)'),
      }),
    },
    async ({year, semester}) => {
      try {
        const schedule = await StudentService.getSchedule(year, semester);
        return {
          content: [
            {
              type: 'text',
              text: `This is the schedule object, field names and content are in Vietnamese. Handle it by your own way:\n${JSON.stringify(schedule, null, 2)}`,
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Get schedule failed with Exception: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'get_all_semester_tuition_fee',
    {
      title: 'Get All Semester Tuition Fee',
      description: 'Get all semester tuition fee. MUST BE LOGGED IN FIRST',
      inputSchema: z.object({}),
    },
    async () => {
      try {
        const tuitionFee = await StudentService.getGeneralTuitionFee();
        return {
          content: [
            {
              type: 'text',
              text: `This is the full tuition fee API Response, field names and content are in Vietnamese. Serve it on your own need:\n${JSON.stringify(tuitionFee, null, 2)}`,
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Get tuition fee failed with Exception: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'get_all_semester_grades',
    {
      title: 'Get All Semester Grades',
      description: 'Get all semester grades. MUST BE LOGGED IN FIRST',
      inputSchema: z.object({}),
    },
    async () => {
      try {
        const grades = await StudentService.getGrades();
        return {
          content: [
            {
              type: 'text',
              text: `This is the full grades API Response, field names and content are in Vietnamese. Serve it on your own need:\n${JSON.stringify(grades, null, 2)}`,
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Get grades failed with Exception: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );
};
