class Student {
  name;
  kelas;
  NISN;
  nilaiRapor;
  constructor(name, kelas, NISN, nilaiRapor) {
    this.name = name;
    this.kelas = kelas;
    this.NISN = NISN;
    this.nilaiRapor = nilaiRapor;
  }

  get name() {
    return this.name;
  }
  get kelas() {
    return this.kelas;
  }
  get NISN() {
    return this.NISN;
  }
  get showGrade() {
    return this.nilaiRapor;
  }
  showGradeByIndex(i) {
    return this.nilaiRapor[i];
  }
  get sumGrade() {
    return this.nilaiRapor.reduce((total, n) => total + n, 0);
  }
  get averageGrade() {
    const avg = this.sumGrade / this.nilaiRapor.length;
    return Number(avg.toFixed(2));
  }
  get predikat() {
    const n = this.averageGrade;
    return n >= 90 ? "A" : n >= 80 ? "B" : n >= 70 ? "C" : n >= 60 ? "D" : "E";
  }
}

export default Student;
