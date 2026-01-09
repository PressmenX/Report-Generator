import { elementId, saveData, loadData } from "./helper.js";
import { studentData, mapelArr } from "./data.js";
import Student from "./Students.js";

//-- RESTORE DATA SISWA --
const storedData = loadData("Student Data") || [];
studentData.length = 0;
studentData.push(...storedData);


function formListiner() {
  const form = elementId("input-div");
  let name = elementId("name");
  let kelas = elementId("kelas");
  let NISN = elementId("NISN");
  let mapelInput = document.querySelectorAll(".mapel input");
  const raporCtn = elementId("raporCtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameVal = name.value;
    const kelasVal = kelas.value;
    const NISNVal = NISN.value;
    const mapelValue = [...mapelInput].map((ipt) => Number(ipt.value.trim()));
    const checkMapelVal = [...mapelValue].every((gradeVal) => gradeVal !== 0);

    if (!nameVal || !kelasVal || !NISNVal) {
      alert("Input tidak boleh kosong");
      return;
    }
    if (!checkMapelVal) {
      alert("Masukan semua nilai");
      return;
    }

    const dataItem = {
      name: nameVal,
      kelas: kelasVal,
      NISN: NISNVal,
      nilai: mapelValue,
    };
    studentData.push(dataItem);
    saveData("Student Data", studentData);
    console.log(studentData);

    setupRapor();
  });
}

function setupRapor() {
  const raporCtn = elementId("raporCtn");
  raporCtn.innerHTML = "";

  //Local Variabel
  let totalSiswa = studentData.length;
  let lulus = 0;
  let tidakLulus = 0;

  studentData.forEach((student) => {
    const s = new Student(
      student.name,
      student.kelas,
      student.NISN,
      student.nilai
    );

    //Checking Graduation
    const passGrade = s.averageGrade >= 75;
    if (passGrade) lulus++;
    else tidakLulus++;
    console.log(totalSiswa, lulus, tidakLulus);

    const raporItem = document.createElement("div");
    raporItem.className = "rapor-item";
    raporItem.innerHTML = `
            <h2>RAPOR SISWA</h2>

            <h3>Identitas Siswa</h3>
            <p class="namaSiswa">Nama : ${s.name}</p>
            <p class="kelasSiswa">Kelas : ${s.kelas}</p>
            <p class="NISNSiswa">NISN : ${s.NISN}</p>

            <h3>Nilai Rapor</h3>
            <table border="1" class="tableNilai">
              ${mapelArr
                .slice(0, 5) // ---- Last Created, refractor menjadi 2 mapel/baris
                .map(
                  (nama, i) => `
                <tr>
                  <td>${nama}</td>
                  <td>${s.showGradeByIndex(i)}</td>
                
                  <td>${mapelArr[i + 5]}</td>
                  <td>${s.showGradeByIndex(i + 5)}</td>
                </tr>
                `
                )
                .join("")}
            </table>

            <h3>Hasil</h3>
            <table class="tableResult" border="1">
              <tr>
                <th>Jumlah</th>
                <td>${s.sumGrade}</td>
              </tr>
              <tr>
                <th>Rata-rata</th>
                <td>${s.averageGrade}</td>
              </tr>
              <tr>
                <th>Predikat</th>
                <td>${s.predikat}</td>
              </tr>
            </table>

            <p class="status">Dengan nilai ini Siswa ini dinyatakan :</p>
            <h3 class="status">
     
              <span class="${passGrade ? "isPassed" : ""}">LULUS</span>
              <span class="${passGrade ? "" : "isFailed"}">TIDAK LULUS</span>

            </h3>`;

    raporCtn.appendChild(raporItem);
  });

  const indikator = document.querySelector("div#indicator");
  indikator.innerHTML = `
  <p id="total-stat">Total Siswa : ${totalSiswa}</p>
<p id="total-passed-stat">Total Siswa Lulus : ${lulus}</p>
<p id="total-failed-stat">Total Siswa Tidak Lulus : ${tidakLulus}</p>
  `;
}

function clickClearData() {
  const btn = elementId("clearData");
  btn.addEventListener("click", () => {
    localStorage.clear();
    studentData.length = 0;
    setupRapor();
  });
}

function clickExportData() {
  const btn = elementId("exportJSON")
  btn.addEventListener("click", () => {
    if (studentData.length === 0) {
      alert("Tidak ada data untuk diekspor!");
      return;
    }

    const dataTeks = JSON.stringify(studentData, null, 2);
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataTeks);
    const linkUnduh = document.createElement("a");
    linkUnduh.setAttribute("href", dataUri);
    linkUnduh.setAttribute("download", "data_siswa_rapor.json");
    linkUnduh.click();
  });
}

export { formListiner, setupRapor, clickExportData,clickClearData };
