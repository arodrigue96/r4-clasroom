import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { studentsStorage } from "../../storage/Storage.js";
import { Student } from "../../types.js";
import { generateId } from "../../utils.js";

// Crea una función para obtener el total de estudiantes
// La función debe recibir un array de estudiantes y devolver el total de estudiantes
export const getStudentsTotal = (students: Student[]): number =>
  students.length;

// Crea una función para añadir un estudiante a la lista de estudiantes
// La función debe recibir un array de estudiantes y los datos del estudiante a añadir
// Si el estudiante ya existe en la lista, muestra un error con showErrorModal
export const addStudent = (
  students: Student[],
  studentName: string,
  studentLastName: string,
  studentAge: number,
  studentEmail: string,
  studentPhoneNumber: string
): void => {
  const studentData: Student = {
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
};

// Crea una función para eliminar un estudiante de la lista de estudiantes
// La función debe recibir un array de estudiantes y el id del estudiante a eliminar

export const deleteStudent = (students: Student[], studentID: number): void => {
  const studentPosition = students.findIndex(
    (student) => student.id === studentID
  );

  students.splice(studentPosition, 1);
};

// Crea una función para obtener las opciones de estudiantes para rellenar un select
// La función debe recibir un array de estudiantes
// La función debe devolver un array de objetos con tres propiedades: id, name y lastName
// La propiedad id debe ser el id del estudiante
// La propiedad name debe ser el nombre del estudiante
// La propiedad lastName debe ser el apellido del estudiante
// export const getStudentsOptions =

// Crea una función para obtener el nombre completo de un estudiante por su id
// La función debe recibir un array de estudiantes y el id del estudiante
// export const getStudentNameById =
