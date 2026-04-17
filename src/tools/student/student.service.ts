import {httpClient} from '../../client/http';
import {
  GRADES_API,
  SCHEDULE_API,
  STUDENT_INFO_API,
  TUITION_FEE_API,
} from '../../const/api';

export class StudentService {
  static async getStudentInfo(): Promise<StudentAPIObject> {
    const response = await httpClient.post(STUDENT_INFO_API, {});

    return response.data;
  }

  static async getSchedule(
    year: string,
    semester: string,
  ): Promise<SchedulesAPIObject> {
    const semesterInt = parseInt(year.concat(semester));
    const response = await httpClient.post(SCHEDULE_API, {
      filter: {hoc_ky: semesterInt, ten_hoc_ky: ''},
      additional: {
        paging: {limit: 100, page: 1},
        ordering: [{name: null, order_type: null}],
      },
    });

    return response.data;
  }

  static async getGeneralTuitionFee(): Promise<TuitionFeeAPIObject> {
    const response = await httpClient.post(TUITION_FEE_API, {});

    return response.data;
  }

  static async getGrades(): Promise<GradesAPIObject> {
    const response = await httpClient.post(GRADES_API, {});

    return response.data;
  }
}
