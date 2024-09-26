import {studentNameProps, studentSubjectProps } from "./Types/type";
import {
  averageandtotalofstudent,
  averageandtotalofstudents,
  getstudentsId,
  getstudentsName,
  hightolowtotalmark,
  getmarksofstudent,
  getClassNameAndTeacherName,
  studentlowandhighmark,
  subjecthighavgmark,
  getsubjectsofstudent,
  get_overal_average_of_class,
  get_average_and_total_mark_of_each_subj,
  get_low_and_high_vlues_from_object,
} from "./utils/answersfun";



export const TheQandA = [
  {
    id:1,
    Q: "Write a function to print the name of the class: class A.",
    A:  getClassNameAndTeacherName("name"),
  },
  {
    id:2,
    Q: "Write a function to print the teacher's name: Mary",
    A: getClassNameAndTeacherName("teacherName"),
  },
  {
    id:3,
    Q: "Write a function to print the names of all the students in the class.",
    A: getstudentsName("name"),
  },
  {
    id:4,
    Q: "Write a function to print the IDs of all the students in the class",
    A: getstudentsId("id"),
  },
];

export const TheQandA2 = [
  {
    id:5,
    isselect:true,
    isselectType:"student",
    Q: "Write a function to print the subject names for a specific student",
    A: (value: studentNameProps) => getsubjectsofstudent(value)
  },
  {
    id:6,
    isselect:true,
    isselectType:"student",
    Q: "Write a function to print the marks of a specific student in all subjects.",
    A: (value: studentNameProps) => getmarksofstudent(value),
  },
   {
      id:7,
      isselect:true,
      isselectType:"student",
      Q:"Write a function to calculate and print the average marks for a specific student",
      A:(value:studentNameProps)=> averageandtotalofstudent({value:value,key:'Average'})
   },
   {
      id:8,
      isselect:true,
      isselectType:"student",
      Q:"Write a function to calculate and print the total marks for a specific student.",
      A:(value:studentNameProps)=> averageandtotalofstudent({value:value,key:"total"})
   },

];
export const TheQandA3=[
    {
        id:9,
        isselect:true,
        isselectType:"subject",
        Q:"Write a function to calculate and print the average marks for all students in a specific subject..",
        A:(value:studentSubjectProps)=> averageandtotalofstudents({subject:value,key:'Average'})
     },
    {
        id:10,
        isselect:true,
        isselectType:"subject",
        Q:"Write a function to calculate and print the total marks for all students in a specific subject.",
        A:(value:studentSubjectProps)=> averageandtotalofstudents({subject:value,key:"total"})
       },
       {
        id:11,
        isselect:true,
        isselectType:"subject",
        Q:"Write a function to find and print the student with the highest marks in a specific subject",
        A:(value:studentSubjectProps)=> studentlowandhighmark({subject:value,key:"high"})
       },
       {
        id:12,
        isselect:true,
        isselectType:"subject",
        Q:"Write a function to find and print the student with the lowest marks in a specific subject",
        A:(value:studentSubjectProps)=> studentlowandhighmark({subject:value,key:"low"})
       }, 
]
export const TheQandA4 =[
    {
        id:13,
        Q:"Write a function to find and print the student with the highest total marks",
        A:()=> hightolowtotalmark({key:"high"})
       },
       {
        id:14,
        Q:"Write a function to find and print the student with the lowest total marks",
        A:()=> hightolowtotalmark({key:"low"})
       },
       {
        id:15,
        Q:"Write a function to find and print the subject with the highest average marks.",
        A:()=> subjecthighavgmark({key:"high"})
       },
       {
        id:16,
        Q:"Write a function to find and print the subject with the lowest average marks.",
        A:()=> subjecthighavgmark({key:"low"})
       },
       {
        id:17,
        Q:"Write a function to calculate and print the overall average marks for the class.",
        A:()=> get_overal_average_of_class({key:"Average"})
       },
        {
        id:18,
        Q:"Write a function to calculate and print the overall total marks for the class.",
        A:()=> get_overal_average_of_class({key:"total"})
       }, 
       {
        id:19,
        Q:"Write a function to calculate and print the average marks for each subject.",
        A:()=> get_average_and_total_mark_of_each_subj({key:"Average"})
       },
       {
        id:20,
        Q:"Write a function to calculate and print the total marks for each subject.",
        A:()=> get_average_and_total_mark_of_each_subj({key:"total"})
       },
       {
        id:21,
        Q:"Write a function to find and print the subject with the highest total marks.",
        A:()=> get_low_and_high_vlues_from_object(get_average_and_total_mark_of_each_subj({key:"total"}),"high")
       },
       {
        id:22,
        Q:"Write a function to find and print the subject with the lowest total marks.",
        A:()=> get_low_and_high_vlues_from_object(get_average_and_total_mark_of_each_subj({key:"total"}),"low")
       },
      //  {
      //   id:23,
      //   Q:"Write a function to find and print the student(s) with the highest average marks",
      //   A:()=> get_low_and_high_vlues_from_object(get_average_and_total_mark_of_each_subj({key:"total"}),"low")
      //  },
]