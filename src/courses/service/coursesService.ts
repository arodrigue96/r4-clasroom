import { showErrorModal } from "../../dom/index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";

// Crea una función para obtener el total de cursos
// La función debe recibir un array de cursos y devolver el total de cursos
export const getCoursesTotal = (courses: Course[]): number => {
  return courses.length;
};

// Crea una función para añadir un curso a la lista de cursos
// La función debe recibir un array de cursos y el nombre del curso a añadir
// Si el curso ya existe en la lista, muestra un error con showErrorModal
export const addCourse = (courses: Course[], courseNameToAdd: string): void => {
  const courseData = {
    id: generateId(courses),
    name: courseNameToAdd,
  };

  const isCourseInList = courses.some(
    (course) =>
      course.name === courseNameToAdd ||
      course.name.toLowerCase() === courseNameToAdd.toLowerCase()
  );
  if (!isCourseInList) {
    courses.push(courseData);
  } else {
    showErrorModal("El curso ya existe");
  }
};

// Crea una función para eliminar un curso de la lista de cursos
// La función debe recibir un array de cursos y el id del curso a eliminar
export const deleteCourse = (
  courses: Course[],
  courseIdToDelete: number
): void => {
  const coursePosition = courses.findIndex(
    (course) => course.id === courseIdToDelete
  );

  courses.splice(coursePosition, 1);
};

// Crea una función para obtener las opciones de cursos para rellenar un select
// La función debe recibir un array de cursos
// La función debe devolver un array de objetos con dos propiedades: id y name
// La propiedad id debe ser el id del curso
// La propiedad name debe ser el nombre del curso

export const getCoursesOptions = (courses: Course[]): Course[] => {
  return courses.map((course) => {
    return {
      id: course.id,
      name: course.name,
    };
  });
};
