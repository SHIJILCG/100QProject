import {
  Question_Answer_ArrayProps,
  studentNameProps,
  studentSubjectProps,
} from "../../Types/type";

import {
  averageandtotalofstudent,
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
  students_with_High_Low_percentage_mark,
  studnts_above_below_a_mark_in_Allsubj,
  studnts_above_below_a_mark_in_spec_subj,
  students_high_low_percentage_mark_spec_subject,
  subjects_high_low_percentage_mark_spec_student,
  subject_all_scroe_above_below_certain_mark,
  avg_above_below_all_studnts_inSubject,
  studnt_score_high_low_atleast_one_sub,
  Find_average_total_foreach_subj_student,
  Find_high_low_marl_for_each_subjects,
  make_object_as_arrayTypeTow,
  Find_hig_low_each_subj,
  subject_high_persentage_students_score_below_above_certain_mark,
  persentage_student_score_above_and_below_a_mark,
  persentage_student_score_above_and_below_a_mark_all,
  subject_low_persentage_students_score_below_above_certain_mark,
  persentage_student_score_above_and_below_a_mark_atlease,
  students_scrore_above_below_given_mark,
  subject_avg_above_below_given_mark,
  studen_score_above_below_given_mark,
  averageandtotalofsubject,
  studnts_above_below_a_mark_in_marjoritySubject,
  subject_marjority_student_score_avg_above_below_In_spec_mark,
  make_object_as_arrayTypeThree,
} from "./common";

export const Question_Answer_Array: Question_Answer_ArrayProps = [
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
    A1: <T>(value: T) => getsubjectsofstudent(value),
  },
  {
    id: 6,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to print the marks of a specific student in all subjects.",
    A1: <T>(value: T) => getmarksofstudent(value),
  },
  {
    id: 7,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the average marks for a specific student",
    A1: (value: studentNameProps) =>
      averageandtotalofstudent({ value: value, key: "Average" }),
  },
  {
    id: 8,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the total marks for a specific student.",
    A1: (value: studentNameProps) =>
      averageandtotalofstudent({ value: value, key: "total" }),
  },
  {
    id: 9,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to print the subject names for a specific student",
    A1: (value: studentNameProps) => getsubjectsofstudent(value),
  },
  {
    id: 10,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the average marks for all students in a specific subject..",
    A2: (value: studentSubjectProps) =>
      averageandtotalofsubject({ subject: value, key: "Average" }),
  },
  {
    id: 11,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the total marks for all students in a specific subject.",
    A2: (value: studentSubjectProps) =>
      averageandtotalofsubject({ subject: value, key: "total" }),
  },
  {
    id: 12,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to find and print the student with the highest marks in a specific subject",
    A2: (value: studentSubjectProps) =>
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
    A2: (value: studentSubjectProps) =>
      make_object_as_array(
        studnts_above_below_a_mark_in_spec_subj({
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
    A2: (value: studentSubjectProps) =>
      make_object_as_array(
        studnts_above_below_a_mark_in_spec_subj({
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
    Q: "Write a function to calculate and print the number of students who scored above 30 mark in all subjects",
    A: () => studnts_above_below_a_mark_in_Allsubj({ mark: 30, key: "high" }),
  },
  {
    id: 30,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the number of students who scored below 30 mark in all subjects",
    A: () => studnts_above_below_a_mark_in_Allsubj({ mark: 30, key: "low" }),
  },
  {
    id: 31,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the percentage of students who scored above 30 mark in a specific subject",
    A2: (value: studentSubjectProps) =>
      persentage_student_score_above_and_below_a_mark({
        subject: value,
        key: "high",
        mark: 30,
      }) + "%",
  },
  {
    id: 32,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to calculate and print the percentage of students who scored below 30 mark in a specific subject",
    A2: (value: studentSubjectProps) =>
      persentage_student_score_above_and_below_a_mark({
        subject: value,
        key: "low",
        mark: 30,
      }) + "%",
  },
  {
    id: 33,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored above 30 mark in all subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: 30,
        key: "high",
      }) + "%",
  },
  {
    id: 34,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored below 30 mark in all subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: 30,
        key: "low",
      }) + "%",
  },
  {
    id: 35,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the highest percentage of marks.",
    A: () =>
      make_object_as_array(
        students_with_High_Low_percentage_mark({ key: "high" })
      ) + "%",
  },
  {
    id: 36,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the lowest percentage of marks.",
    A: () =>
      make_object_as_array(
        students_with_High_Low_percentage_mark({ key: "low" })
      ) + "%",
  },
  {
    id: 37,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the highest percentage of marks.",
    A: () =>
      make_object_as_array(
        students_with_High_Low_percentage_mark({ key: "high" })
      ) + "%",
  },
  {
    id: 38,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) with the lowest percentage of marks.",
    A: () =>
      make_object_as_array(
        students_with_High_Low_percentage_mark({ key: "low" })
      ) + "%",
  },
  {
    id: 39,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.",
    A2: (value: studentSubjectProps) =>
      make_object_as_array(
        students_high_low_percentage_mark_spec_subject({
          subject: value,
          key: "high",
        })
      ) + "%",
  },
  {
    id: 40,
    isselect: true,
    isselectType: "subject",
    Q: "Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject.",
    A2: (value: studentSubjectProps) =>
      make_object_as_array(
        students_high_low_percentage_mark_spec_subject({
          subject: value,
          key: "low",
        })
      ) + "%",
  },
  {
    id: 41,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_array(
        subjects_high_low_percentage_mark_spec_student({
          subject: value,
          key: "high",
        })
      ) + "%",
  },
  {
    id: 42,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_array(
        subjects_high_low_percentage_mark_spec_student({
          subject: value,
          key: "low",
        })
      ) + "%",
  },
  {
    id: 43,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which all students scored above  30  mark.",
    A: () =>
      subject_all_scroe_above_below_certain_mark({ mark: 30, key: "high" }),
  },
  {
    id: 44,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which all students scored below  30  mark.",
    A: () =>
      subject_all_scroe_above_below_certain_mark({ mark: 30, key: "low" }),
  },
  {
    id: 45,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the average marks of all students are above 30 mark.",
    A: () => avg_above_below_all_studnts_inSubject({ mark: 30, key: "high" }),
  },
  {
    id: 46,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the average marks of all students are below 30 mark.",
    A: () => avg_above_below_all_studnts_inSubject({ mark: 30, key: "low" }),
  },
  {
    id: 47,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored the highest marks in at least one subject.",
    A: () => studnt_score_high_low_atleast_one_sub({ key: "high" }),
  },
  {
    id: 48,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored the highest marks in at least one subject.",
    A: () => studnt_score_high_low_atleast_one_sub({ key: "low" }),
  },
  {
    id: 49,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the average marks for each student in each subject.",
    A: () => Find_average_total_foreach_subj_student({ key: "Average" }),
  },
  {
    id: 50,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the total marks for each student in each subject.",
    A: () => Find_average_total_foreach_subj_student({ key: "total" }),
  },
  {
    id: 51,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored the highest marks in each subject.",
    A: () =>
      make_object_as_arrayTypeTow(
        Find_high_low_marl_for_each_subjects({ key: "high" })
      ),
  },
  {
    id: 52,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored the lowest marks in each subject.",
    A: () =>
      make_object_as_arrayTypeTow(
        Find_high_low_marl_for_each_subjects({ key: "low" })
      ),
  },
  {
    id: 53,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the highest marks were scored",
    A: () => make_object_as_array(Find_hig_low_each_subj({ key: "high" })),
  },
  {
    id: 54,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the lowest marks were scored",
    A: () => make_object_as_array(Find_hig_low_each_subj({ key: "low" })),
  },
  {
    id: 55,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored above the class average marks",
    A: () =>
      studen_score_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 56,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored below the class average marks",
    A: () =>
      studen_score_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 57,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the average marks are above the class average marks.",
    A: () =>
      subject_avg_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 58,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the average marks are above the class average marks.",
    A: () =>
      subject_avg_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 59,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the highest percentage of students scored above 30 mark.",
    A: () =>
      make_object_as_array(
        subject_high_persentage_students_score_below_above_certain_mark({
          key: "high",
          mark: 30,
        })
      ) + "%",
  },
  {
    id: 60,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the highest percentage of students scored below 30 mark.",
    A: () =>
      make_object_as_array(
        subject_high_persentage_students_score_below_above_certain_mark({
          key: "low",
          mark: 30,
        })
      ) + "%",
  },
  {
    id: 61,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the lowest percentage of students scored above 30 mark.",
    A: () =>
      make_object_as_array(
        subject_low_persentage_students_score_below_above_certain_mark({
          key: "high",
          mark: 30,
        })
      ) + "%",
  },
  {
    id: 62,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the lowest percentage of students scored below 30 mark.",
    A: () =>
      make_object_as_array(
        subject_low_persentage_students_score_below_above_certain_mark({
          key: "low",
          mark: 30,
        })
      ) + "%",
  },
  {
    id: 63,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored above the class average marks in each subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }) + "%",
  },
  {
    id: 64,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored below the class average marks in each subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }) + "%",
  },
  {
    id: 65,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_atlease({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }) + "%",
  },
  {
    id: 66,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_atlease({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }) + "%",
  },
  {
    id: 67,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored above the class average marks in all subjects.",
    A: () =>
      students_scrore_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 68,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored below the class average marks in all subjects.",
    A: () =>
      students_scrore_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 69,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.",
    A: () =>
      studnts_above_below_a_mark_in_marjoritySubject({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 70,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.",
    A: () =>
      studnts_above_below_a_mark_in_marjoritySubject({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 71,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.",
    A: () =>
      subject_marjority_student_score_avg_above_below_In_spec_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 72,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the majority of students scored below the class average marks.",
    A: () =>
      subject_marjority_student_score_avg_above_below_In_spec_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 73,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.",
    A1: (value: studentNameProps) =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "high",
      }) + "%",
  },
  {
    id: 74,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.",
    A1: (value: studentNameProps) =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "low",
      }) + "%",
  },
  {
    id: 75,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.",
    A1: (value: studentNameProps) =>
      persentage_student_score_above_and_below_a_mark_atlease({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "high",
      }) + "%",
  },
  {
    id: 76,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.",
    A1: (value: studentNameProps) =>
      persentage_student_score_above_and_below_a_mark_atlease({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "low",
      }) + "%",
  },
  {
    id: 77,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects.",
    A1: (value: studentNameProps) =>
      students_scrore_above_below_given_mark({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 78,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects.",
    A1: (value: studentNameProps) =>
      students_scrore_above_below_given_mark({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 79,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      subject_avg_above_below_given_mark({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 80,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      subject_avg_above_below_given_mark({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 81,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_arrayTypeThree(
        subject_high_persentage_students_score_below_above_certain_mark({
          key: "high",
          mark: averageandtotalofstudent({ value: value, key: "Average" }),
        })
      ),
  },
  {
    id: 82,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_arrayTypeThree(
        subject_high_persentage_students_score_below_above_certain_mark({
          key: "low",
          mark: averageandtotalofstudent({ value: value, key: "Average" }),
        })
      ),
  },
  {
    id: 83,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_array(
        subject_low_persentage_students_score_below_above_certain_mark({
          key: "high",
          mark: averageandtotalofstudent({ value: value, key: "Average" }),
        })
      ) + "%",
  },
  {
    id: 84,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_array(
        subject_low_persentage_students_score_below_above_certain_mark({
          key: "low",
          mark: averageandtotalofstudent({ value: value, key: "Average" }),
        })
      ) + "%",
  },
  {
    id: 85,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }) + "%",
  },
  {
    id: 86,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_all({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }) + "%",
  },
  {
    id: 87,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_atlease({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }) + "%",
  },
  {
    id: 88,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to calculate and print the percentage of students who scored below the average marks of the class in at least one subject.",
    A: () =>
      persentage_student_score_above_and_below_a_mark_atlease({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }) + "%",
  },
  {
    id: 89,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored above the average marks of the class in all subjects.",
    A: () =>
      students_scrore_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 90,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored below the average marks of the class in all subjects.",
    A: () =>
      students_scrore_above_below_given_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 91,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored above the average marks of the class in the majority of subjects.",
    A: () =>
      studnts_above_below_a_mark_in_marjoritySubject({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 92,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the student(s) who scored below the average marks of the class in the majority of subjects.",
    A: () =>
      studnts_above_below_a_mark_in_marjoritySubject({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 93,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the majority of students scored above the average marks of the class.",
    A: () =>
      subject_marjority_student_score_avg_above_below_In_spec_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "high",
      }),
  },
  {
    id: 94,
    isselect: false,
    isselectType: "none",
    Q: "Write a function to find and print the subject(s) in which the majority of students scored below the average marks of the class.",
    A: () =>
      subject_marjority_student_score_avg_above_below_In_spec_mark({
        mark: get_overal_average_of_class({ key: "Average" }),
        key: "low",
      }),
  },
  {
    id: 95,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    A1: (value: studentNameProps) =>
      (studnts_above_below_a_mark_in_marjoritySubject({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "high",
      }).length /
        getstudentsName("name").length) *
        100 +
      "%",
  },
  {
    id: 96,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    A1: (value: studentNameProps) =>
      (studnts_above_below_a_mark_in_marjoritySubject({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "low",
      }).length /
        getstudentsName("name").length) *
        100 +
      "%",
  },
  {
    id: 97,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    A1: (value: studentNameProps) =>
      (studnts_above_below_a_mark_in_marjoritySubject({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "high",
      }).length /
        getstudentsName("name").length) *
        100 +
      "%",
  },
  {
    id: 98,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    A1: (value: studentNameProps) =>
      (studnts_above_below_a_mark_in_marjoritySubject({
        mark: averageandtotalofstudent({ value: value, key: "Average" }),
        key: "low",
      }).length /
        getstudentsName("name").length) *
        100 +
      "%",
  },
  {
    id: 99,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_arrayTypeThree(
        subject_high_persentage_students_score_below_above_certain_mark({
          key: "high",
          mark: averageandtotalofstudent({ value: value, key: "Average" }),
        })
      ),
  },
  {
    id: 100,
    isselect: true,
    isselectType: "student",
    Q: "Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.",
    A1: (value: studentNameProps) =>
      make_object_as_arrayTypeThree(
        subject_high_persentage_students_score_below_above_certain_mark({
          key: "low",
          mark: averageandtotalofstudent({ value: value, key: "Average" }),
        })
      ),
  },
];
