import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade, ShowGrade } from "../../types";
import { generateId } from "../../utils.js";

// Crea una función para obtener el total de notas
// La función debe recibir un array de notas y devolver el total de notas
export const getGradesTotal = (grades: Grade[]): number => grades.length;

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName

export const getGradeFullData = (grade: Grade): ShowGrade => {
  const findStudentData = students.find(
    (student) => student.id === grade.studentId
  );

  const findCourseData = courses.find((course) => course.id === grade.courseId);

  const studentData: ShowGrade = {
    id: grade.id,
    studentId: grade.studentId,
    courseId: grade.courseId,
    value: grade.value,
    studentName: findStudentData!.name,
    studentLastName: findStudentData!.lastName,
    courseName: findCourseData!.name,
  };

  return studentData;
};

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar

export const deleteGrade = (grades: Grade[], gradeID: number): void => {
  const gradePosition = grades.findIndex((grade) => grade.id === gradeID);
  grades.splice(gradePosition, 1);
};

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
    id: generateId(grades),
    studentId: studentId,
    courseId: courseId,
    value: gradeValue,
  };

  const gradeExist = grades.some(
    (grade) =>
      grade.studentId === gradeData.studentId &&
      grade.courseId === gradeData.courseId
  );

  if (!gradeExist) {
    grades.push(gradeData);

    return;
  }

  showErrorModal("Ya existe una nota para este estudiante");
};
