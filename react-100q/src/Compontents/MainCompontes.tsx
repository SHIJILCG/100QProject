import { useEffect, useState } from 'react';
import classObj from '../data';

type Student = {
    name: string;
    id: string;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type ClassData = {
    name: string;
    teacherName: string;
    students: Student[];
};

export const MainCompontes = () => {
    const [data, setData] = useState<ClassData>({} as ClassData);

    useEffect(() => {
        setData(classObj);
    }, []);

    console.log(data.students[1].name);
  return (
    <div>
       
    </div>
  )
}