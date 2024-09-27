import { courses, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { generateId } from "../../utils.js";

// Crea una función para obtener el total de notas
// La función debe recibir un array de notas y devolver el total de notas
export const getGradesTotal = (grades: Grade[]): number => grades.length;

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName
// export const getGradeFullData =

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
// export const deleteGrade =

// Crea una función para crear una nueva nota
// La función debe recibir un array de notas, el id del estudiante, el id del curso y el valor de la nota
// Si la nota ya existe, muestra un error con showErrorModal

export const addGrade = (
  grades: Grade[],
  studentId: number,
  courseId: number,
  gradeValue: number
): void => {
  const gradeData = {
    id: generateId(courses),
    studentId: studentId,
    courseId: courseId,
    value: gradeValue,
  };

  const gradeExist = grades.some(
    (grade) => grade.courseId === gradeData.id || grade.value === gradeValue
  );

  if (!gradeExist) {
    grades.push(gradeData);
  } else {
    showErrorModal("La nota para este curso ya existe");
  }
};

/*const studentData: Student = {
    id: generateId(students),
    name: studentName,
    lastName: studentLastName,
    age: studentAge,
    email: studentEmail,
    phoneNumber: studentPhoneNumber,
  };
  const isStudentInList = students.some(
    (student) => student.email === studentEmail
  );

  if (!isStudentInList) {
    students.push(studentData);
  } else {
    showErrorModal("El alumno ya existe");
  }
};*/
