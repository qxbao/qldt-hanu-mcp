import {httpClient} from '../../client/http';

export class StudentService {
  static async getStudentInfo(): Promise<StudentAPIObject> {
    const response = await httpClient.post('/api/dkmh/w-locsinhvieninfo', {
      params: {},
    });

    return response.data;
  }

  static async getSchedule(
    year: string,
    semester: string,
  ): Promise<SchedulesAPIObject> {
    const semesterInt = parseInt(year.concat(semester));
    const response = await httpClient.post(
      '/api/sch/w-locdstkbtuanusertheohocky',
      {
        filter: {hoc_ky: semesterInt, ten_hoc_ky: ''},
        additional: {
          paging: {limit: 100, page: 1},
          ordering: [{name: null, order_type: null}],
        },
      },
    );

    return response.data;
  }

  static async getGeneralTuitionFee(): Promise<TuitionFeeAPIObject> {
    const response = await httpClient.post(
      '/api/rms/w-locdstonghophocphisv',
      {},
    );

    return response.data;
  }

  static async getGrades(): Promise<GradesAPIObject> {
    const response = await httpClient.post(
      'api/srm/w-locdsdiemsinhvien?hien_thi_mon_theo_hkdk=false',
      {},
    );

    return response.data;
  }
}
