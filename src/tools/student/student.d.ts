// Student Info Section

type StudentAPIResponse = {
  data: StudentAPIObject;
};

type StudentAPIObject = {
  thoi_gian_get_data: string;
  ma_sv: string;
  ten_day_du: string;
  ten_day_du_eg: string;
  gioi_tinh: string;
  ngay_sinh: string;
  noi_sinh: string;
  dan_toc: string;
  ton_giao: string;
  quoc_tich: string;
  dien_thoai: string;
  email: string;
  email2: string;
  so_cmnd: string;
  ngay_cap_cmnd: string;
  noi_cap_cmnd: string;
  ho_khau_thuong_tru_gd: string;
  ho_khau_quan_huyen: string;
  ho_khau_tinh_thanh: string;
  so_tk: string;
  lop: string;
  khu_vuc: string;
  doi_tuong_uu_tien: string;
  doi_tuong_xet_TN: string;
  khoi: string;
  nganh: string;
  chuyen_nganh: string;
  khoa: string;
  bac_he_dao_tao: string;
  nien_khoa: string;
  ma_cvht: string;
  ho_ten_cvht: string;
  email_cvht: string;
  dien_thoai_cvht: string;
  hien_dien_sv: string;
};

// Schedule Section

type SchedulesAPIResponse = {
  data: SchedulesAPIObject;
};

type SchedulesAPIObject = {
  total_items: number;
  total_pages: 1;
  ds_tiet_trong_ngay: ClassTime[];
  ds_tuan_tkb: WeekDetail[];
};

type ClassTime = {
  tiet: number;
  gio_bat_dau: string;
  gio_ket_thuc: string;
  so_phut: number;
  nhhk: number;
};

type WeekDetail = {
  tuan_hoc_ky: number;
  tuan_tuyet_doi: number;
  thong_tin_tuan: string;
  ngay_bat_dau: string;
  ngay_ket_thuc: string;
  ds_thoi_khoa_bieu: ClassInWeek[];
};

type ClassInWeek = {
  is_hk_lien_truoc: number;
  thu_kieu_so: number;
  tiet_bat_dau: number;
  so_tiet: number;
  ma_mon: string;
  ten_mon: string;
  so_tin_chi: string;
  ma_nhom: string;
  ma_to_hop: string;
  ma_giang_vien: string;
  ten_giang_vien: string;
  ma_phong: string;
  ngay_hoc: string;
};

// Tuition Fee Section

type TuitionFeeAPIResponse = {
  data?: TuitionFeeAPIObject;
  result: boolean;
  code: number;
};

type TuitionFeeAPIObject = {
  total_items: number;
  total_pages: number;
  is_tinh_tong: boolean;
  is_show_hoc_bong: boolean;
  is_tg_dong_hoc_phi: boolean;
  is_hvsg: boolean;
  is_show_don_gia: boolean;
  ds_hoc_phi_hoc_ky: TuitionFeeInSemester[];
  ds_hoc_bong_mg: unknown[];
};

type TuitionFeeInSemester = {
  nhhk: number;
  ten_nhom_ct: string;
  ten_hoc_ky: string;
  hoc_phi: string;
  mien_giam: string;
  duoc_ho_tro: string;
  phai_thu: string;
  tong_hoc_bong: string;
  da_thu: string;
  con_no: string;
  ghi_chu: string;
  don_gia: string;
};

// Student Grades Section

type GradesAPIObject = {
  total_items: number;
  total_pages: number;
  is_kkbd: boolean;
  ds_diem_hocky: SemesterGradeList[];
  ds_field_an_cot_diem: unknown[];
  hien_thi_khoa_thi: boolean;
  hien_thi_cot_diem_tp: boolean;
  an_chi_tiet_diem_tp: boolean;
  hien_thi_cot_diem_k1: boolean;
  hien_thi_cot_mhtt: boolean;
  hien_thi_cot_stctt: boolean;
  hien_thi_cot_diemtk10: boolean;
  hien_thi_cot_diemtk4: boolean;
  hien_thi_cot_diem_thi: boolean;
  hien_thi_cot_mh_nganh: boolean;
  hien_thi_cot_hk_chuyen_diem: boolean;
  mesage_diemtk4: string;
  mesage_diemtkc: string;
  mesage_diemtk10: string;
  mesage_diemk1: string;
  ghi_chu_xem_diem: string;
};

type SemesterGradeList = {
  loai_nganh: number;
  hoc_ky: string;
  ten_hoc_ky: string;
  dtb_hk_he10: string;
  dtb_hk_he4: string;
  dtb_tich_luy_he_10: string;
  dtb_tich_luy_he_4: string;
  so_tin_chi_dat_hk: string;
  so_tin_chi_dat_tich_luy: string;
  diemrl_hk: string;
  phan_loai_rl_hk: string;
  phan_loai_rl_hk_eg: string;
  hien_thi_tk_he_10: boolean;
  hien_thi_tk_he_4: boolean;
  xep_loai_tkb_hk: string;
  xep_loai_tkb_hk_eg: string;
  canh_cao_hoc_tap: string;
  canh_cao_hoc_tap_eg: string;
  ds_diem_mon_hoc: CourseGradeList[];
};

type CourseGradeList = {
  chuyen_diem_ve_hoc_ky: string;
  ma_mon: string;
  ma_mon_tt: string;
  nhom_to: string;
  ten_mon: string;
  ten_mon_eg?: string;
  mon_hoc_nganh: boolean;
  so_tin_chi: string;
  diem_thi: string;
  diem_giua_ky: string;
  diem_tk: string;
  diem_tk_so: string;
  diem_tk_chu: string;
  ket_qua: number;
  hien_thi_ket_qua: boolean;
  loai_nganh: number;
  KhoaThi: number;
  khong_tinh_diem_tbtl: number;
  ly_do_khong_tinh_diem_tbtl: string;
  ds_diem_thanh_phan: CourseComponentGrade[];
};

type CourseComponentGrade = {
  ky_hieu: string;
  ten_thanh_phan: string;
  trong_so: string;
  diem_thanh_phan: string;
};
