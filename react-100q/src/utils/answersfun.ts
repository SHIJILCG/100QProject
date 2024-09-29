import {
  ClassData,
  dataProps04,
  dataProps07,
  dataProps10,
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
///////////////////////////////////////////////////////
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

export const averageandtotalofsubject = (data: dataProps3) => {
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
      answer: averageandtotalofsubject({ subject: subject, key: "Average" }),
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
  let value = data.key === "Average" ? ans / (result.length * 5) : ans;
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
      answer: averageandtotalofsubject({ subject: subject, key: data.key }),
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
/////////////////////////////////////////////////////////////////////////return object-27,28,
export const studnts_above_below_a_mark_in_spec_subj = (data: dataProps8) => {
  let result: { subject: string; answer: number }[] = [];
  getstudentsName("name").map((student) => {
    let studentname = student as studentNameProps;
    let mark = getMark({ subject: data.subject, studntName: studentname });
    if (data.key === "high" && mark >= data.mark) {
      result.push({
        subject: student,
        answer: mark,
      });
    } else if (data.key === "low" && mark < data.mark) {
      result.push({
        subject: student,
        answer: mark,
      });
    }
  });
  return result.length === 0 ? "No one" : result;
};
////////////////////////////////////////////////////////////////////////31,32
export const persentage_student_score_above_and_below_a_mark = (
  data: dataProps8
) => {
  let answer;
  data.key == "high"
    ? (answer = studnts_above_below_a_mark_in_spec_subj({
        subject: data.subject,
        mark: data.mark,
        key: "high",
      }))
    : (answer = studnts_above_below_a_mark_in_spec_subj({
        subject: data.subject,
        mark: data.mark,
        key: "low",
      }));
  if (answer === "No one") {
    return 10 / 10 - 1;
  } else {
    return (answer.length / getstudentsName("name").length) * 100;
  }
};

/////////////////////////////////////////////////////////////////29,30
export const studnts_above_below_a_mark_in_Allsubj = (data: dataProps9) => {
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
  return result.length === 0 ? "No one" : result;
};
//////////////////////////////////////////////////////////////////////////////////-copy of above for atleast
export const studnts_above_below_a_mark_in_AtleastOnesubj = (data: dataProps9) => {
  let result: string[] = [];
  getstudentsName("name").map((student) => {
    let studentname = student as studentNameProps;
    let flag = false;
    getsubjectsofstudent(studentname).map((subject) => {
      let subjectname = subject as studentSubjectProps;
      let mark = getMark({ subject: subjectname, studntName: studentname });
      if (data.key === "high") {
        if (mark > data.mark) flag = true;
      } else if (data.key === "low") {
        if (mark < data.mark) flag = true;
      }
    });
    if (flag) result.push(studentname);
  });
  return result.length === 0 ? "No one" : result;
};
/////////////////////////////////////////////////////////////////////////////////////-copy of above for majority69,70
export const studnts_above_below_a_mark_in_marjoritySubject = (data: dataProps9) => {
  let result: string[] = [];
  getstudentsName("name").map((student) => {
    let studentname = student as studentNameProps;
    let flag = 0
    getsubjectsofstudent(studentname).map((subject) => {
      let subjectname = subject as studentSubjectProps;
      let mark = getMark({ subject: subjectname, studntName: studentname });
      if (data.key === "high") {
        if (mark > data.mark) flag++
      } else if (data.key === "low") {
        if (mark < data.mark) flag++ 
      }
    });
    if (flag >= getsubjectsofstudent('Aju').length / 2) result.push(studentname);
  });
  return result.length === 0 ? "No one" : result;
};
//////////////////////////////////////////////////////////////////////////////33,34
export const persentage_student_score_above_and_below_a_mark_all = (
  data: dataProps9
) => {
  let answer;
  data.key == "high"
    ? (answer = studnts_above_below_a_mark_in_Allsubj({
        mark:data.mark,
        key: "high",
      }))
    : (answer = studnts_above_below_a_mark_in_Allsubj({
        mark: data.mark,
        key: "low",
      }));
  if (answer === "No one") {
    return 10 / 10 - 1;
  } else {
    return (answer.length / getstudentsName("name").length) * 100;
  }
};
/////////////////////////////////////////////////////////////////////copy of above for atlease
export const persentage_student_score_above_and_below_a_mark_atlease = (
  data: dataProps9
) => {
  let answer;
  data.key == "high"
    ? (answer = studnts_above_below_a_mark_in_AtleastOnesubj({
        mark:data.mark,
        key: "high",
      }))
    : (answer = studnts_above_below_a_mark_in_AtleastOnesubj({
        mark: data.mark,
        key: "low",
      }));
  if (answer === "No one") {
    return 10 / 10 - 1;
  } else {
    return (answer.length / getstudentsName("name").length) * 100;
  }
};

//////////////////////////////////////////////////return 0bject35,36,37,38
export const students_with_High_Low_percentage_mark = (data: dataProps6) => {
  let result: { subject: string; answer: number }[] = [];
  getstudentsName("name").map((student) => {
    let name = student as studentNameProps;
    result.push({
      subject: student,
      answer:
        (averageandtotalofstudent({ value: name, key: "total" }) /
          (getsubjectsofstudent(name).length * 50)) *
        100,
    });
  });

  result.sort((a, b) => a.answer - b.answer);
  return Find_same_vlue(result, data.key);
};
////////////////////////////////////////////////////////////////////////39,40
export const students_high_low_percentage_mark_spec_subject = (
  data: dataProps4
) => {
  let result: { subject: string; answer: number }[] = [];
  getstudentsName("name").forEach((student) => {
    let name = student as studentNameProps;
    result.push({
      subject: student,
      answer: (getMark({ subject: data.subject, studntName: name }) / 50) * 100,
    });
  });
  result.sort((a, b) => a.answer - b.answer);
  return Find_same_vlue(result, data.key);
};
//////////////////////////////////////////////////////////////////////////////////41,42
export const subjects_high_low_percentage_mark_spec_student = (
  data: dataProps04
) => {
  let result: { subject: string; answer: number }[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let name = subject as studentSubjectProps;
    result.push({
      subject: subject,
      answer: (getMark({ subject: name, studntName: data.subject }) / 50) * 100,
    });
  });

  return Find_same_vlue(result, data.key);
};
//////////////////////////////////////////////43,44
export const subject_all_scroe_above_below_certain_mark = (
  data: dataProps9
) => {
  let result: string[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let name = subject as studentSubjectProps;
    let answer = studnts_above_below_a_mark_in_spec_subj({
      mark: data.mark,
      subject: name,
      key: data.key,
    });
    if (
      answer !== "No one" &&
      answer.length === getstudentsName("name").length
    ) {
      result.push(name);
    }
  });
  return result.length === 0 ? "No subjects" : result;
};
/////////////////////////////////////////////////45,46
export const avg_above_below_all_studnts_inSubject = (data: dataProps9) => {
  let result: string[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let name = subject as studentSubjectProps;
    let answer = averageandtotalofsubject({ subject: name, key: "Average" });
    if (data.key === "high") {
      if (answer >= data.mark) result.push(name);
    } else if (data.key === "low") {
      if (answer <= data.mark) result.push(name);
    }
  });
  return result.length === 0 ? "No subjects" : result;
};
///////////////////////////////////////////47,48
export const studnt_score_high_low_atleast_one_sub = (data: dataProps6) => {
  let result: string[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let name = subject as studentSubjectProps;
    if (data.key === "high") {
      let answer = studentlowandhighmark({ subject: name, key: "high" });
      if (!result.includes(answer)) result.push(answer);
    } else if (data.key === "low") {
      let answer = studentlowandhighmark({ subject: name, key: "low" });
      if (!result.includes(answer)) result.push(answer);
    }
  });
  return result;
};
/////////////////////////////////////////////////////////////////49,50
export const Find_average_total_foreach_subj_student = (data: dataProps5) => {
  let result: { name: string; marks: { subject: string; answer: number }[] }[] =
    [];
  let result3: string[] = [];
  getstudentsName("name").forEach((student) => {
    let name = student as studentNameProps;
    result.push({
      name: student,
      marks: get_a_studnt_all_mark(name),
    });
  });
  result.forEach((res) => {
    let result2 = `Name: ${res.name}\nMarks:\n`;
    res.marks.forEach((subject) => {
      result2 += `- ${subject.subject}: ${subject.answer}\n`;
    });
    result3.push(result2);
  });
  return result3;
};
//////////////////////////////////////////////////////////////////51,52
export const Find_high_low_marl_for_each_subjects = (data: dataProps6) => {
  let result: { subject: string; answer: string }[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let subjectName = subject as studentSubjectProps;
    if (data.key === "high") {
      result.push({
        subject: subject,
        answer: studentlowandhighmark({ subject: subjectName, key: "high" }),
      });
    } else if (data.key === "low") {
      result.push({
        subject: subject,
        answer: studentlowandhighmark({ subject: subjectName, key: "low" }),
      });
    }
  });
  return result;
};
///////////////////////////////////////////////////////////////////53,54
export const Find_hig_low_each_subj = (data: dataProps6) => {
  let result: { subject: string; answer: number }[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let subj = subject as studentSubjectProps;
    if (data.key === "high") {
      students_high_low_percentage_mark_spec_subject({
        subject: subj,
        key: "high",
      }).forEach((item) => {
        result.push({
          subject: subj,
          answer: (item.answer * 50) / 100,
        });
      });
    } else if (data.key === "low") {
      students_high_low_percentage_mark_spec_subject({
        subject: subj,
        key: "low",
      }).forEach((item) => {
        result.push({
          subject: subj,
          answer: (item.answer * 50) / 100,
        });
      });
    }
  });
  result.sort((a, b) => a.answer - b.answer);
  return data.key === "high"
    ? result.filter((res) => res.answer === result[result.length - 1].answer)
    : result.filter((res) => res.answer === result[0].answer);
};
////////////////////////////////////////////////////////////////////55,56
export const studen_score_above_below_given_mark = (data: dataProps9) => {
  let reults: studentNameProps[] = [];
  getstudentsName("name").map((name) => {
    let studentName = name as studentNameProps;
    getmarksofstudent(studentName).map((mark) => {
      if (mark > data.mark && data.key === "high") {
        if (!reults.includes(studentName)) {
          reults.push(studentName);
        }
      } else if (mark < data.mark && data.key === "low") {
        if (!reults.includes(studentName)) {
          reults.push(studentName);
        }
      }
    });
  });
  return reults;
};

/////////////////////////////////////////////////////////////////////57,58
export const subject_avg_above_below_given_mark = (data: dataProps9) => {
  let reults: studentSubjectProps[] = [];
  getsubjectsofstudent("Aju").map((name) => {
    let subjectName = name as studentSubjectProps;
    let mark = averageandtotalofsubject({
      subject: subjectName,
      key: "Average",
    });
    if (mark > data.mark && data.key === "high") {
      if (!reults.includes(subjectName)) {
        reults.push(subjectName);
      }
    } else if (mark < data.mark && data.key === "low") {
      if (!reults.includes(subjectName)) {
        reults.push(subjectName);
      }
    }
  });
  return reults;
};
/////////////////////////////////////////////////////////////////////59,60
export const subject_high_persentage_students_score_below_above_certain_mark = (
  data: dataProps9
) => {
  let reults: { subject: string; answer: number }[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let subjectName = subject as studentSubjectProps;
    if (data.key === "high") {
            reults.push({
               subject:subjectName,
               answer:persentage_student_score_above_and_below_a_mark({subject:subjectName,key:"high",mark:data.mark})
            })
    } else if (data.key === "low") {
      reults.push({
        subject:subjectName,
        answer:persentage_student_score_above_and_below_a_mark({subject:subjectName,key:"low",mark:data.mark})
     })
    }
  });

  reults.sort((a, b) => a.answer - b.answer);
  return Find_same_vlue(reults, "high");
};
//////////////////////////////////////////////////////////////////////////
export const subject_low_persentage_students_score_below_above_certain_mark = (
  data: dataProps9
) => {
  let reults: { subject: string; answer: number }[] = [];
  getsubjectsofstudent("Aju").forEach((subject) => {
    let subjectName = subject as studentSubjectProps;
    if (data.key === "high") {
            reults.push({
               subject:subjectName,
               answer:persentage_student_score_above_and_below_a_mark({subject:subjectName,key:"high",mark:data.mark})
            })
    } else if (data.key === "low") {
      reults.push({
        subject:subjectName,
        answer:persentage_student_score_above_and_below_a_mark({subject:subjectName,key:"low",mark:data.mark})
     })
    }
  });

  reults.sort((a, b) => a.answer - b.answer);
  return Find_same_vlue(reults, "low");
};
//////////////////////////////////////////////////////////////////////////67,68
export const students_scrore_above_below_given_mark=( data: dataProps9
) => {
  let answer;
  data.key == "high"
    ? (answer = studnts_above_below_a_mark_in_Allsubj({
        mark:data.mark,
        key: "high",
      }))
    : (answer = studnts_above_below_a_mark_in_Allsubj({
        mark: data.mark,
        key: "low",
      }));

    return  answer
     
}
//////////////////////////////////////////////////////////////////////////////////// 71,72
export const subject_marjority_student_score_avg_above_below_In_spec_mark = (data: dataProps9) => {
  let reults: studentSubjectProps[] = [];
  let answer:string[]=[]
  getstudentsName("name").forEach((name) => {
    let studentName = name as studentNameProps;
     getsubjectsofstudent(studentName).map(subject =>{
            let subjectName = subject as studentSubjectProps
            let mark = getMark({studntName:studentName,subject:subjectName})
            if(mark >= data.mark && data.key ==="high") reults.push(subjectName)
            if(mark <= data.mark && data.key ==="low") reults.push(subjectName)
     })
  });
  let result2 = getsubjectsofstudent('Aju')
  result2.forEach(res => {
      let flag = 0
      reults.forEach(res2 => res2 === res ? flag++ : flag)
      if(flag > getstudentsName('name').length / 2 ) answer.push(res)
  })
  return answer;
};

/////////////////////////////////////////////////////////////////////////////////get student subject with mark
export const get_a_studnt_all_mark = (name: studentNameProps) => {
  let result: { subject: string; answer: number }[] = [];
  getsubjectsofstudent(name).forEach((subject) => {
    let subjectname = subject as studentSubjectProps;
    result.push({
      subject: subject,
      answer: getMark({ studntName: name, subject: subjectname }),
    });
  });
  return result;
};
///////////////////////////////////////////////////////// find find array with same values
export const Find_same_vlue = (
  data: { subject: string; answer: number }[],
  key: dataProps10
) => {
  let result2 =
    key === "high"
      ? data.filter((res) => res.answer === data[data.length - 1].answer)
      : data.filter((res) => res.answer === data[0].answer);
  return result2;
};
////////////////////////////////////////////////////////////////// get the first an last item from a array
export const get_low_and_high_vlues_from_object = (
  data: { subject: string; answer: number }[],
  key: string
) => {
  let result = key === "high" ? data[data.length - 1] : data[0];
  return result;
};
/////////////////////////////////////////////////////////////////// add coma to a array element
export const add_coma_to_array_element = (
  data: number | string | string[] | number[]
) => {
  return Array.isArray(data) ? data.join(",") : data;
};
//////////////////////////////////////////////////////////////////////// make a object as array answer type number
export const make_object_as_array = (
  data: { subject: string; answer: number }[] | string
) => {
  return Array.isArray(data)
    ? data.map((data) => ` ${data.subject}:${data.answer.toFixed(0)} `)
    : data;
};
/////////////////////////////////////////////////////////////////////////////// make a object as array answer type number
export const make_object_as_arrayTypeTow = (
  data: { subject: string; answer: string }[] | string
) => {
  return Array.isArray(data)
    ? data.map((data) => ` ${data.subject}:${data.answer} `)
    : data;
};
///////////////////////////////////////////////////////////////////////// make object as array and add % symbol
export const make_object_as_arrayTypeThree = (
  data: { subject: string; answer: number }[] | string
) => {
  return Array.isArray(data)
    ? data.map((data) => ` ${data.subject}:${data.answer}% `)
    : data;
};
///////////////////////////////////////////////////////// to print the single object as a string
export const single_object_manage = (data: {
  subject: string;
  answer: number;
}) => {
  return `${data.subject}:${data.answer}`;
};
////////////////////////////////////////////
