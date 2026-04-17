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
  ds_hoc_bong_mg: any[];
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
