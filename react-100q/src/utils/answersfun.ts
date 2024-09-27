import {
  ClassData,
  dataProps2,
  dataProps3,
  dataProps4,
  dataProps5,
  dataProps6,
  dataProps7,
  dataProps8,
  dataProps9,
  studentNameProps,
  studentSubjectProps,
} from "../Types/type";
import classObj from "../Data/ResultObject";

export const getClassNameAndTeacherName = (value: "name" | "teacherName") => {
  let result = classObj[value];
  return result;
};
// ///////////////////////////////////////////////////////////////////

export const getstudentsName = (value: "name") => {
  let result: string[] = [];
  classObj.students.filter((student) => result.push(student[value]));
  return result;
};
//////////////////////////////////////////////////////////////////////
export const getMark = (data: dataProps7) => {
  let value: number = 0;
  classObj.students.forEach((student) => {
    if (student.name === data.studntName) {
      student.marks.forEach((mark) => {
        if (mark.subject === data.subject) value = mark.mark;
      });
    }
  });
  return value;
};
///////////////////////////////////////////////////////////////////////

export const getstudentsId = (value: "id") => {
  let result: string[] = [];
  classObj.students.filter((student) => result.push(student[value]));
  return result;
};
// //////////////////////////////////////////////////////////////////

export const getmarksofstudent = (data: studentNameProps) => {
  let result: number[] = [];
  classObj.students.forEach((student) => {
    if (student.name === data) {
      result = student.marks.map((mar) => mar.mark);
    }
  });
  return result;
};
/////////////////////////////////////////////////////////////

export const getsubjectsofstudent = (data: studentNameProps) => {
  let result: string[] = [];
  classObj.students.forEach((student) => {
    if (student.name === data) {
      result = student.marks.map((mar) => mar.subject);
    }
  });
  return result;
};
//////////////////////////////////////////////////////

export const averageandtotalofstudent = (data: dataProps2) => {
  let result: number = 0;
  let result2: number = 0;
  let mark = getmarksofstudent(data.value);
  result = mark.reduce((acumulator, value) => acumulator + value, 0);
  result2 = data.key === "Average" ? result / mark.length : result;
  return result2;
};
/////////////////////////////////////////////////////
export const totalsocreforasubject = (data: studentSubjectProps) => {
  let result: number[] = [];
  classObj.students.forEach((student) => {
    student.marks.forEach((items) => {
      if (items.subject === data) {
        result.push(items.mark);
      }
    });
  });
  return result;
};
////////////////////////////////////////////////////////////////////

export const averageandtotalofstudents = (data: dataProps3) => {
  let result: number = 0;
  let result2: number = 0;
  let mark = totalsocreforasubject(data.subject);
  result = mark.reduce((acumulator, value) => acumulator + value, 0);
  result2 = data.key === "Average" ? (result = result / mark.length) : result;
  return result2;
};

/////////////////////////////////////////////////////////////
export const studentlowandhighmark = (data: dataProps4) => {
  let result: { mark: number; name: string }[] = [];
  classObj.students.forEach((student) => {
    student.marks.forEach((items) => {
      if (items.subject === data.subject) {
        result.push({ mark: items.mark, name: student.name });
      }
    });
  });
  result.sort((a, b) => a.mark - b.mark);
  let value = data.key === "high" ? result[result.length - 1] : result[0];
  return value.name;
};
////////////////////////////////////////////////////////////////return object13,14

export const subj_high_low_totalmark = (data: dataProps6) => {
  let result: { mark: number; name: string }[] = [];
  let names = getstudentsName("name");
  names.forEach((nae) => {
    let name = nae as studentNameProps;
    result.push({
      mark: averageandtotalofstudent({ value: name, key: "total" }),
      name: name,
    });
  });
  result.sort((a, b) => a.mark - b.mark);
  let value = data.key === "high" ? result[result.length - 1] : result[0];
  return value.name;
};
////////////////////////////////////////////////////// return object-15,16
export const subj_high_low_avgmark = (data: dataProps6) => {
  let result: { subject: string; answer: number }[] = [];
  let subjects = getsubjectsofstudent("Aju");
  subjects.forEach((subj) => {
    let subject = subj as studentSubjectProps;
    result.push({
      subject: subject,
      answer: averageandtotalofstudents({ subject: subject, key: "Average" }),
    });
  });
  result.sort((a, b) => a.answer - b.answer);
  let value = data.key === "high" ? result[result.length - 1] : result[0];
  return value.subject;
};
/////////////////////////////////////////////////////-17,18
export const get_overal_average_of_class = (data: dataProps5) => {
  let result: number[] = [];
  let names = getstudentsName("name");
  names.forEach((nae) => {
    let name = nae as studentNameProps;
    result.push(averageandtotalofstudent({ value: name, key: "total" }));
  });
  let ans = result.reduce((acoumulator, value) => acoumulator + value, 0);
  let value = data.key === "Average" ? ans / result.length : ans;
  return value;
};
/////////////////////////////////////////////////////////////return Object-19,20,21,22

export const get_average_and_total_mark_of_each_subj = (data: dataProps5) => {
  let result: { subject: string; answer: number }[] = [];
  let subjects = getsubjectsofstudent("Aju");
  subjects.forEach((subj) => {
    let subject = subj as studentSubjectProps;
    result.push({
      subject: subject,
      answer: averageandtotalofstudents({ subject: subject, key: data.key }),
    });
  });
  result.sort((a, b) => a.answer - b.answer);
  return result;
};
////////////////////////////////////////////////////

export const get_students_high_avg_mark = ({ key }: dataProps6) => {
  let result: { subject: string; answer: number }[] = [];
  let result2: { subject: string; answer: number }[] = [];
  getstudentsName("name").map((student) => {
    let studentname = student as studentNameProps;
    result.push({
      subject: student,
      answer: averageandtotalofstudent({ value: studentname, key: "Average" }),
    });
  });
  result.sort((a, b) => a.answer - b.answer);
  key === "high"
    ? (result2 = result.filter((resu) => resu === result[result.length - 1]))
    : (result2 = result.filter((resu) => resu === result[0]));
  return result2;
};
////////////////////////////////////////////////////////////////

export const get_students_high_total_mark = ({ key }: dataProps6) => {
  let result: { subject: string; answer: number }[] = [];
  let result2: { subject: string; answer: number }[] = [];
  getstudentsName("name").map((student) => {
    let studentname = student as studentNameProps;
    result.push({
      subject: student,
      answer: averageandtotalofstudent({ value: studentname, key: "total" }),
    });
  });
  result.sort((a, b) => a.answer - b.answer);
  key === "high"
    ? (result2 = result.filter((resu) => resu === result[result.length - 1]))
    : (result2 = result.filter((resu) => resu === result[0]));
  return result2;
};
/////////////////////////////////////////////////////////////////////////
export const studnts_above_a_mark_in_spec_subj = (data: dataProps8) => {
  let result: { subject: string; answer: number }[] = [];
  getstudentsName("name").map((student) => {
    let studentname = student as studentNameProps;
    let mark = getMark({ subject: data.subject, studntName: studentname });
    console.log(mark);
    if (data.key === "high" && mark >= data.mark) {
      result.push({
        subject: student,
        answer: mark,
      });
    } else if (data.key === "low" && mark <= data.mark) {
      result.push({
        subject: student,
        answer: mark,
      });
    }
  });
  return result.length === 0 ? "No one" : result;
};
/////////////////////////////////////////////////////////////////
export const studnts_above_a_mark_in_spec_Allsubj = (data: dataProps9) => {
  let result: string[] = [];
  getstudentsName("name").map((student) => {
    let studentname = student as studentNameProps;
    let flag = true;
    getsubjectsofstudent(studentname).map((subject) => {
      let subjectname = subject as studentSubjectProps;
      let mark = getMark({ subject: subjectname, studntName: studentname });
      if (data.key === "high") {
        if (mark < data.mark) flag = false;
      } else if (data.key === "low") {
        if (mark > data.mark) flag = false;
      }
    });
    if (flag) result.push(studentname);
  });
  console.log(result);
  return result.length === 0 ? "No one" : result;
};
///////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////
/////////////////////////////////////
export const get_low_and_high_vlues_from_object = (
  data: { subject: string; answer: number }[],
  key: string
) => {
  let result = key === "high" ? data[data.length - 1] : data[0];
  return result;
};
export const add_coma_to_array_element = (
  data: number | string | string[] | number[]
) => {
  return Array.isArray(data) ? data.join(", ") : data;
};

export const make_object_as_array = (
  data: { subject: string; answer: number }[] | string
) => {
  return Array.isArray(data)
    ? data.map((data) => ` ${data.subject}:${data.answer} `)
    : data;
};
export const single_object_manage = (data: {
  subject: string;
  answer: number;
}) => {
  return `${data.subject}:${data.answer}`;
};

////////////////////////////////////////////
