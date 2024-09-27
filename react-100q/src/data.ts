import {
  studentNameProps,
  studentSubjectProps,
  TheQuestion_Answer_ArrayProps,
} from "./Types/type";
import {
  averageandtotalofstudent,
  averageandtotalofstudents,
  getstudentsId,
  getstudentsName,
  getmarksofstudent,
  getClassNameAndTeacherName,
  studentlowandhighmark,
  getsubjectsofstudent,
  get_overal_average_of_class,
  get_average_and_total_mark_of_each_subj,
  get_low_and_high_vlues_from_object,
  subj_high_low_avgmark,
  subj_high_low_totalmark,
  make_object_as_array,
  single_object_manage,
  get_students_high_avg_mark,
  get_students_high_total_mark,
  getMark,
  studnts_above_a_mark_in_spec_subj,
  studnts_above_a_mark_in_spec_Allsubj,
} from "./utils/answersfun";

export const TheQuestion_Answer_Array: TheQuestion_Answer_ArrayProps = [
  {
    id: 1,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to print the name of the class: class A.",
    A: () => getClassNameAndTeacherName("name"),
  },
  {
    id: 2,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to print the teacher's name: Mary",
    A: () => getClassNameAndTeacherName("teacherName"),
  },
  {
    id: 3,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to print the names of all the students in the class.",
    A: () => getstudentsName("name"),
  },
  {
    id: 4,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to print the IDs of all the students in the class",
    A: () => getstudentsId("id"),
  },
  {
    id: 5,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to print the subject names for a specific student",
    A: (value: studentNameProps) => getsubjectsofstudent(value),
  },
  {
    id: 6,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to print the marks of a specific student in all subjects.",
    A: (value: studentNameProps) => getmarksofstudent(value),
  },
  {
    id: 7,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the average marks for a specific student",
    A: (value: studentNameProps) =>
      averageandtotalofstudent({ value: value, key: "Average" }),
  },
  {
    id: 8,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the total marks for a specific student.",
    A: (value: studentNameProps) =>
      averageandtotalofstudent({ value: value, key: "total" }),
  },
  {
    id: 9,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to print the subject names for a specific student",
    A: (value: studentNameProps) => getsubjectsofstudent(value),
  },
  {
    id: 10,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the average marks for all students in a specific subject..",
    A: (value: studentSubjectProps) =>
      averageandtotalofstudents({ subject: value, key: "Average" }),
  },
  {
    id: 11,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the total marks for all students in a specific subject.",
    A: (value: studentSubjectProps) =>
      averageandtotalofstudents({ subject: value, key: "total" }),
  },
  {
    id: 12,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to find and print the student with the highest marks in a specific subject",
    A: (value: studentSubjectProps) =>
      studentlowandhighmark({ subject: value, key: "high" }),
  },
  {
    id: 13,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student with the highest total marks",
    A: () => subj_high_low_totalmark({ key: "high" }),
  },
  {
    id: 14,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student with the lowest total marks",
    A: () => subj_high_low_totalmark({ key: "low" }),
  },
  {
    id: 15,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject with the highest average marks.",
    A: () => subj_high_low_avgmark({ key: "high" }),
  },
  {
    id: 16,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject with the lowest average marks.",
    A: () => subj_high_low_avgmark({ key: "low" }),
  },
  {
    id: 17,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the overall average marks for the class.",
    A: () => get_overal_average_of_class({ key: "Average" }),
  },
  {
    id: 18,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the overall total marks for the class.",
    A: () => get_overal_average_of_class({ key: "total" }),
  },
  {
    id: 19,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the average marks for each subject.",
    A: () =>
      make_object_as_array(
        get_average_and_total_mark_of_each_subj({ key: "Average" })
      ),
  },
  {
    id: 20,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the total marks for each subject.",
    A: () =>
      make_object_as_array(
        get_average_and_total_mark_of_each_subj({ key: "total" })
      ),
  },
  {
    id: 21,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject with the highest total marks.",
    A: () =>
      single_object_manage(
        get_low_and_high_vlues_from_object(
          get_average_and_total_mark_of_each_subj({ key: "total" }),
          "high"
        )
      ),
  },
  {
    id: 22,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject with the lowest total marks.",
    A: () =>
      single_object_manage(
        get_low_and_high_vlues_from_object(
          get_average_and_total_mark_of_each_subj({ key: "total" }),
          "low"
        )
      ),
  },
  {
    id: 23,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the highest average marks.",
    A: () => make_object_as_array(get_students_high_avg_mark({ key: "high" })),
  },
  {
    id: 24,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the lowest average marks.",
    A: () => make_object_as_array(get_students_high_avg_mark({ key: "low" })),
  },
  {
    id: 25,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the highest total marks",
    A: () =>
      make_object_as_array(get_students_high_total_mark({ key: "high" })),
  },
  {
    id: 26,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the lowest total marks",
    A: () => make_object_as_array(get_students_high_total_mark({ key: "low" })),
  },
  {
    id: 27,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the number of students who scored above 30 mark in a specific subject.",
    A: (value: studentSubjectProps) =>
      make_object_as_array(
        studnts_above_a_mark_in_spec_subj({
          subject: value,
          mark: 30,
          key: "high",
        })
      ),
  },
  {
    id: 28,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the number of students who scored below 30 mark in a specific subject.",
    A: (value: studentSubjectProps) =>
      make_object_as_array(
        studnts_above_a_mark_in_spec_subj({
          subject: value,
          mark: 30,
          key: "low",
        })
      ),
  },
  {
    id: 29,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the number of students who scored above a certain mark in all subjects",
    A: () => studnts_above_a_mark_in_spec_Allsubj({ mark: 30, key: "high" }),
  },
  {
    id: 30,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the number of students who scored below a certain mark in all subjects",
    A: () => studnts_above_a_mark_in_spec_Allsubj({ mark: 30, key: "low" }),
  },
];
