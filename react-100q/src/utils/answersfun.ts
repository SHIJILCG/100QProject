import {
  ClassData,
  dataProps2,
  dataProps3,
  dataProps4,
  dataProps5,
  dataProps6,
  studentNameProps,
  studentSubjectProps,
} from "../Types/type";
import classObj from "../Data/data";

export const getClassNameAndTeacherName = (value: keyof ClassData) => classObj[value];
// ///////////////////////////////////////////////////////////////////

export const getstudentsName = (value: "name") => {
  let result: string[] = [];
  classObj.students.filter((student) => result.push(student[value]));
  return result;
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
////////////////////////////////////////////////////////////////

export const hightolowtotalmark = (data: dataProps6) => {
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
  return value;
};
//////////////////////////////////////////////////////
export const subjecthighavgmark = (data: dataProps6) => {
  let result: { subject: string; answer: number }[] = [];
  let subjects = getsubjectsofstudent("Aju");
  subjects.forEach((subj) => {
    let subject = subj as studentSubjectProps;
    result.push({
      subject: subject,
      answer: averageandtotalofstudents({ subject: subject, key: "Average" }),
    });
  });
  result.sort((a,b)=> a.answer - b.answer)
  let value = data.key === "high" ?   result[result.length - 1] : result[0];
  return value
};
/////////////////////////////////////////////////////-17,18
export const get_overal_average_of_class =(data:dataProps5)=>{
        let result : number[] =[]
        let names=getstudentsName("name");
        names.forEach((nae) => {
                let name = nae as studentNameProps;
              result.push(averageandtotalofstudent({value:name,key:"total"}))
        });
        let ans = result.reduce((acoumulator,value)=> acoumulator + value ,0)
        let value = data.key === "Average" ?   ans / result.length  : ans;
      return value
}
/////////////////////////////////////////////////////////////

export const get_average_and_total_mark_of_each_subj = (data:dataProps5)=>{
  let result: { subject: string; answer: number }[] = [];
  let subjects = getsubjectsofstudent("Aju");
  subjects.forEach((subj) => {
    let subject = subj as studentSubjectProps;
    result.push({
      subject: subject,
      answer: averageandtotalofstudents({ subject: subject, key: data.key}),
    });
  });
  result.sort((a,b)=> a.answer - b.answer)
    return result
}
////////////////////////////////////////////////////





export const get_low_and_high_vlues_from_object =(data:{}[],key:string)=>{
    let result = key === "high" ? data[data.length-1] : data[0] 
    return result
}

export const add_coma_to_array_element=(data:number | string | string[] | number[])=>{
     return Array.isArray(data) ? data.join(",") : data
}