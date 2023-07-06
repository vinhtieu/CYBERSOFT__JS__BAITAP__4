// BAI TAP 1
const radioTPHCM = document.querySelector(".bai-1 input[id='bai1-radio1']");
const radioTPHN = document.querySelector(".bai-1 input[id='bai1-radio2']");
const khu_vuc = document.getElementById("khu-vuc");
const doi_tuong = document.getElementById("doi-tuong");
const diem_chuan = document.querySelector("#diem-chuan");
const mon1 = document.getElementById("bai1-mon1");
const mon2 = document.getElementById("bai1-mon2");
const mon3 = document.getElementById("bai1-mon3");
const btn1 = document.querySelector(".bai-1 .btn");
const result = document.getElementById("result");

btn1.addEventListener("click", () => {
  let diemMon1 = mon1.value * 1;
  let diemMon2 = mon2.value * 1;
  let diemMon3 = mon3.value * 1;
  let diemKhuVuc = khu_vuc.value * 1;
  let diemDoiTuong = doi_tuong.value * 1;
  let diemChuan = diem_chuan.value * 1;
  let diemUuTien = diemKhuVuc + diemDoiTuong;
  let tongDiem;
  let ketQua;

  result.classList.add("alert", "alert-success");
  result.setAttribute("role", "alert");

  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    result.classList.add("alert", "alert-danger");
    result.setAttribute("role", "alert");
    result.innerHTML = `
    <p>Kết Quả: Rớt</p>
    <p>Kết Quả: ${ketQua}</p>`;
  } else {
    tongDiem = diemMon1 + diemMon2 + diemMon3;
    ketQua = tongDiem + diemUuTien;

    if (ketQua < diemChuan) {
      console.log("🚀 ~ file: main.jsx:38 ~ btn1.addEventListener ~ diemChuan:", diemChuan)
      result.classList.add("alert", "alert-danger");
      result.setAttribute("role", "alert");
      result.innerHTML = `
      <p>Kết Quả: Rớt</p>
      <p>Kết Quả: ${ketQua}</p>`;
    } else {
      result.innerHTML = `
      <p>Kết Quả: Đậu</p>
      <p>Kết Quả: ${ketQua}</p>`;
    }
  }
});
// BAI TAP 2

const userName = document.getElementById("bai2-name");
const userEnergy = document.getElementById("bai2-energy");
const btnBai2 = document.getElementById("bai2-btn");
const total_amount = document.getElementById("total-amount");

const TIEN_DIEN_50KW_DAU = 500;
const TIEN_DIEN_50KW_KE = 650;
const TIEN_DIEN_100KW_KE = 850;
const TIEN_DIEN_150KW_KE = 1100;
const TIEN_DIEN_CON_LAI = 1300;

btnBai2.addEventListener("click", () => {
  console.log("clicked");
  let nameInput = userName.value;
  let energyInput = userEnergy.value.replace(/\./g, "") * 1;

  let result = tinhTienDien(energyInput);
  total_amount.classList.add("alert", "alert-success");
  total_amount.setAttribute("role", "alert");
  total_amount.innerHTML = `
  <p>Khách Hàng: ${nameInput}</p>
  <p>
    Tiền Điện: ${result.toLocaleString("vi-VN")} VND
  </p>`;
});

function tinhTienDien(energyInput) {
  let tien50kwDau = tinhTien50kwDau(energyInput);
  let tien50kwKe = tinhTien50kwKe(energyInput);
  let tien100kwKe = tinhTien100kwKe(energyInput);
  let tien150kwKe = tinhTien150kwKe(energyInput);
  let tienConLai = tinhTienConLai(energyInput);
  let total = tien50kwDau + tien50kwKe + tien100kwKe + tien150kwKe + tienConLai;
  return total;
}

function tinhTien50kwDau(energyInput) {
  if (energyInput <= 50) {
    let price = energyInput * TIEN_DIEN_50KW_DAU;
    return price;
  } else {
    let price = 50 * TIEN_DIEN_50KW_DAU;
    return price;
  }
}
function tinhTien50kwKe(energyInput) {
  if (energyInput > 50) {
    let power = energyInput - 50;
    if (power > 0 && power <= 50) {
      let price = power * TIEN_DIEN_50KW_KE;
      return price;
    } else if (power > 50) {
      let price = 50 * TIEN_DIEN_50KW_KE;
      return price;
    }
  } else {
    return 0;
  }
}
function tinhTien100kwKe(energyInput) {
  if (energyInput > 100) {
    let power = energyInput - 100;
    if (power > 0 && power <= 100) {
      let price = power * TIEN_DIEN_100KW_KE;
      return price;
    } else if (power > 100) {
      let price = 100 * TIEN_DIEN_100KW_KE;
      return price;
    }
  } else {
    return 0;
  }
}

function tinhTien150kwKe(energyInput) {
  if (energyInput > 200) {
    let power = energyInput - 200;
    if (power > 0 && power <= 150) {
      let price = power * TIEN_DIEN_150KW_KE;
      return price;
    } else if (power > 150) {
      let price = 150 * TIEN_DIEN_150KW_KE;
      return price;
    }
  } else {
    return 0;
  }
}
function tinhTienConLai(energyInput) {
  if (energyInput > 350) {
    let power = energyInput - 350;
    return power * TIEN_DIEN_CON_LAI;
  } else {
    return 0;
  }
}
// BAI TAP 3

const userName3 = document.getElementById("bai3-name");
const annualIncome = document.getElementById("bai3-income");
const familyMember = document.getElementById("bai3-people");
const btnBai3 = document.getElementById("bai3-btn");
const displayTax = document.getElementById("tax");

btnBai3.addEventListener("click", () => {
  console.log("clicked");
  let nameInput = userName3.value;
  let annualIncomeInput = annualIncome.value.replace(/\./g, "") * 1;
  let formatIncome = annualIncomeInput / 1000000;
  let member = familyMember.value * 1;

  let tax = calculateTax(formatIncome, member);

  displayTax.classList.add("alert", "alert-success");
  displayTax.setAttribute("role", "alert");
  displayTax.innerHTML = `
  <p>Khách Hàng: ${nameInput}</p>
  <p>
    Thuế: ${tax.toLocaleString("vi-VN")} VND
  </p>`;
});

function calculateTax(annualIncome, member) {
  let beforeTax = annualIncome - 4 - member * 1.6;

  if (beforeTax <= 60) {
    let tax = beforeTax * 1000000 * 0.05;
    return tax;
  } else if (beforeTax > 60 && beforeTax <= 120) {
    let tax = beforeTax * 1000000 * 0.1;
    return tax;
  } else if (beforeTax > 120 && beforeTax <= 210) {
    let tax = beforeTax * 1000000 * 0.15;
    return tax;
  } else if (beforeTax > 210 && beforeTax <= 384) {
    let tax = beforeTax * 1000000 * 0.2;
    return tax;
  } else if (beforeTax > 384 && beforeTax <= 624) {
    let tax = beforeTax * 1000000 * 0.25;
    return tax;
  } else if (beforeTax > 624 && beforeTax <= 960) {
    let tax = beforeTax * 1000000 * 0.3;
    return tax;
  } else if (beforeTax > 960) {
    let tax = beforeTax * 1000000 * 0.35;
    return tax;
  }
}
// BAI TAP 4

const PHI_XU_LY_NHA_DAN = 4.5;
const PHI_DICH_VU_NHA_DAN = 20.5;
const PHI_THUE_1_KENH_NHA_DAN = 7.5;
const PHI_XU_LY_DOANH_NGHIEP = 15;
const PHI_DICH_VU_DOANH_NGHIEP = 75;
const PHI_THUE_1_KENH_DOANH_NGHIEP = 50;

const bai4_radio1 = document.getElementById("bai4-radio1");
const bai4_radio2 = document.getElementById("bai4-radio2");
const bai4_id = document.getElementById("bai4-id");
const bai4_so_kenh = document.getElementById("bai4-so-kenh");
const bai4_ket_noi = document.getElementById("bai4-ket-noi");
const btnBai4 = document.getElementById("bai4-btn");
const displayBill = document.getElementById("bill");

document.addEventListener("DOMContentLoaded", () => {
  bai4_ket_noi.setAttribute("disabled", "disabled");
  bai4_ket_noi.placeholder = "Disabled";
});
bai4_radio1.addEventListener("change", () => {
  bai4_ket_noi.setAttribute("disabled", "disabled");
  bai4_ket_noi.placeholder = "Disabled";
});
bai4_radio2.addEventListener("change", () => {
  bai4_ket_noi.removeAttribute("disabled");
  bai4_ket_noi.placeholder = "0";
});

btnBai4.addEventListener("click", () => {
  let radioNhaDan = bai4_radio1.checked;
  let radioDoanhNghiep = bai4_radio2.checked;
  let idKhachHang = bai4_id.value;
  let soKenh = bai4_so_kenh.value * 1;
  let soKetNoi = bai4_ket_noi.value * 1;
  let billing;

  if (radioNhaDan) {
    billing = tinhTienNhaDan(soKenh);
  } else if (radioDoanhNghiep) {
    billing = tinhTienDoanhNghiep(soKenh, soKetNoi);
  }

  displayBill.classList.add("alert", "alert-success");
  displayBill.setAttribute("role", "alert");
  displayBill.innerHTML = `
  <p>Mã Khách Hàng: ${idKhachHang}</p>
  <p>
    Tiền Cáp: ${billing.toLocaleString("vi-VN")} USD
  </p>`;
});

function tinhTienNhaDan(soKenh) {
  return (
    PHI_XU_LY_NHA_DAN + PHI_DICH_VU_NHA_DAN + PHI_THUE_1_KENH_NHA_DAN * soKenh
  );
}

function tinhTienDoanhNghiep(soKenh, soKetNoi) {
  let phiDichVu;
  if (soKetNoi <= 10) {
    phiDichVu = PHI_DICH_VU_DOANH_NGHIEP;
  } else {
    phiDichVu = PHI_DICH_VU_DOANH_NGHIEP + (soKetNoi - 10) * 5;
  }

  return (
    PHI_XU_LY_DOANH_NGHIEP + phiDichVu + soKenh * PHI_THUE_1_KENH_DOANH_NGHIEP
  );
}
