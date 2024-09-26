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

export type TheMakeCardProps = {
  value:
    | {
        id: number;
        Q: string;
        A:
          | string
          | {
              name: string;
              id: string;
              marks: { subject: string; mark: number }[];
            }[];
      }
    | { id: number; Q: string; A: string[] };
};

export type TheMakeCardTwoProps = {
  value:
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: (value: studentNameProps) => string[];
      }
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: (value: studentNameProps) => number[];
      };
};

export type TheMakeCardThreeProps = {
  value:
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: (value: studentSubjectProps) => number;
      }
    | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: (value: studentSubjectProps) => string;
      }
      | {
        id: number;
        isselect: boolean;
        isselectType: string;
        Q: string;
        A: (value: studentSubjectProps) => string[];
      };
};
