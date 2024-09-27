export type Student = {
  name: string;
  id: string;
  marks: {
    subject: string;
    mark: number;
  }[];
};

export type ClassData = {
  name: string;
  teacherName: string;
  students: Student[];
};

export type studentNameProps = "Ravi" | "Aju" | "Mini SS" | "Binu";
export type studentSubjectProps =
  | "English"
  | "Maths"
  | "Physics"
  | "Chemistry"
  | "Computer";
export type studentSubjectPropsTwo = {
  value: "Ravi" | "Aju" | "Mini SS" | "Binu";
};
export type dataProps2 = {
  value: studentNameProps;
  key: "Average" | "total";
};
export type dataProps3 = {
  subject: studentSubjectProps;
  key: "Average" | "total";
};
export type dataProps4 = {
  subject: studentSubjectProps;
  key: "high" | "low";
};
export type dataProps5 = {
  key: "Average" | "total";
};
export type dataProps6 = {
  key: "high" | "low";
};
export type dataProps7={
   subject:studentSubjectProps,
   studntName:studentNameProps
}
export type dataProps8={
  subject:studentSubjectProps,
  mark:number,
  key:"high" | "low"
}
export type dataProps9={
  mark:number,
  key:"high" | "low"
}
export type MapValuesProps = {
  value:
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: (
          value: studentSubjectProps
        ) => string[] | number[] | string | number;
      }
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: (value: studentNameProps) => string[] | number[] | string | number;
      }
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: () => string | string[] | number | number[];
      }
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: () => {};
      };
};

export type TheQuestion_Answer_ArrayProps = (
  | {
      id: number;
      isselect: boolean;
      isselectType: string;
      Q: string;
      A: () => string | string[];
    }
  | {
      id: number;
      isselect: boolean;
      isselectType: string;
      Q: string;
      A: (value: studentNameProps) => string[] | number[] | string | number;
    }
  | {
      id: number;
      isselect: boolean;
      isselectType: string;
      Q: string;
      A: (value: studentSubjectProps) => string[] | number[] | string | number;
    }
  | {
      id: number;
      isselect: boolean;
      isselectType: string;
      Q: string;
      A: () => {};
    }
)[];
