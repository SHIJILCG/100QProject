export const SUBJECTS = {
  english: "English",
  math: "Maths",
  Physics: "Physics",
  Chemistry: "Chemistry",
  Computer: "Computer",
};
export const STUDENTS = {
  Ravi: "Ravi",
  Aju: "Aju",
  Mini_SS: "Mini SS",
  Binu: "Binu",
};
const classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: SUBJECTS.english, mark: 25 },
        { subject: SUBJECTS.math, mark: 48 },
        { subject: SUBJECTS.Physics, mark: 40 },
        { subject: SUBJECTS.Chemistry, mark: 30 },
        { subject: SUBJECTS.Computer, mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: SUBJECTS.english, mark: 35 },
        { subject: SUBJECTS.math, mark: 38 },
        { subject: SUBJECTS.Physics, mark: 33 },
        { subject: SUBJECTS.Chemistry, mark: 34 },
        { subject: SUBJECTS.Computer, mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: SUBJECTS.english, mark: 12 },
        { subject: SUBJECTS.math, mark: 49 },
        { subject: SUBJECTS.Physics, mark: 18 },
        { subject: SUBJECTS.Chemistry, mark: 30 },
        { subject: SUBJECTS.Computer, mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: SUBJECTS.english, mark: 49 },
        { subject: SUBJECTS.math, mark: 49 },
        { subject: SUBJECTS.Physics, mark: 47 },
        { subject: SUBJECTS.Chemistry, mark: 46 },
        { subject: SUBJECTS.Computer, mark: 50 },
      ],
    },
  ],
};

export default classObj;
